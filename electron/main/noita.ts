import { WebSocket, WebSocketServer } from "ws";
import { v4 as uuidv4 } from "uuid";
import { appEvent } from "./appEvent";
import { ipcMain } from "electron";
import { EventEmitter } from "events";
import type { NT } from "./proto/messages";
import { BankItem, Game, Gamemode, getDb, RoomFlag } from "./database";

// TODO: Check out  https://github.com/timostamm/protobuf-ts
// Or check out https://github.com/stephenh/ts-proto plus https://github.com/timostamm/protobuf-ts/tree/master/packages/protoc

function sysMsg(message: string) {
  appEvent("sChat", {
    id: uuidv4(),
    userId: "-1",
    name: "[System]",
    message,
  });
}

// From https://effectivetypescript.com/2020/05/12/unionize-objectify/
type UnionizeOneOf<T extends object> = {
  [k in keyof T]: { key: k; value: NonNullable<T[k]> };
}[keyof T];

function protoKeyValue<T extends object>(obj: T): UnionizeOneOf<Required<T>> {
  // One hell of a hack to figure out which "oneof" is set
  const key = Object.keys(obj).shift() as keyof T;
  return { key, value: obj[key] } as any;
}

function lerp(a: number, b: number, weight: number) {
  return a * weight + b * (1 - weight);
}

function rotLerp(a: number, b: number, weight: number) {
  const pi2 = Math.PI * 2;
  const shortest = ((a - b + Math.PI) % pi2) - Math.PI;
  return b + ((shortest * weight) % pi2);
}

/**
 * Utility function to remove certain values from an array
 */
function removeFromArray<T>(array: T[], shouldRemove: (element: T) => boolean) {
  const removed: T[] = [];
  let i = 0;
  while (i < array.length) {
    if (shouldRemove(array[i])) {
      removed.push(...array.splice(i, 1));
    } else {
      i++;
    }
  }
  return removed;
}

class RunningGame {
  gameId: string;
  name = ""; // TODO: Save the game name
  gamemode: Gamemode = "coop"; // TODO: Save the game gamemode
  // TODO: consider using a map, since that's supported now
  flags: NT.ClientRoomFlagsUpdate.IGameFlag[] = [];
  bank: {
    wands: NT.IWand[];
    spells: NT.ISpell[];
    flasks: NT.IItem[];
    objects: NT.IEntityItem[];
  } = {
    wands: [],
    spells: [],
    flasks: [],
    objects: [],
  };
  gold = 0;

  constructor(gameId: string) {
    this.gameId = gameId;
  }

  get isOnDeathKick() {
    // Only seems to happen when the user is the host
    return this.flags.some((v) => v.flag == "_ondeath_kick");
  }

  get worldSeed() {
    return this.flags.find((v) => v.flag == "sync_world_seed")?.uIntVal ?? 0;
  }
}

class NoitaGame extends EventEmitter {
  port = 25569;
  server: WebSocketServer | null = null;

  client: WebSocket | null = null;
  paused = false;
  #queue: string[] = [];
  #queueDelay = 5000;

  rejectConnections = true;
  user = { userId: "", name: "", host: false };
  players = {};
  #game: RunningGame | null = null;
  #gameActionHandler: {
    [key in keyof NT.IGameAction]: (
      payload: NonNullable<NT.IGameAction[key]>,
      game: RunningGame
    ) => void | Promise<void>;
  };

  constructor() {
    super();
    this.setMaxListeners(0);

    ipcMain.once("game_listen", () => {
      this.gameListen();
    });

    this.#gameActionHandler = {
      sChat: async (payload) => {
        appEvent("sChat", payload);
        this.sendEvt("Chat", payload);
      },
      sPlayerMove: async (payload) => {
        try {
          if (payload.userId == this.user.userId || !this.client) {
            return;
          }
          const frames = [];
          for (const [index, current] of payload.frames.entries()) {
            frames.push(current);
            const next = payload.frames[index + 1];
            if (typeof next !== "undefined") {
              const med = {
                x: lerp(current.x, next.x, 0.869),
                y: lerp(current.y, next.y, 0.869),
                armR: rotLerp(current.armR, next.armR, 0.869),
                armScaleY: current.armScaleY,
                scaleX: next.scaleX,
                anim: next.anim,
                held: next.held,
              };
              frames.push(med);
            }
          }
          const jank = frames
            .map((current) => {
              return `${current.armR},${current.armScaleY},${current.x},${current.y},${current.scaleX},${current.anim},${current.held},`;
            })
            .join(",");
          this.sendEvt("PlayerMove", { userId: payload.userId, frames, jank });
        } catch (error) {
          console.log(error);
        }
      },
      sPlayerPos: async (payload) => {
        if (payload.userId == this.user.userId || !this.client) {
          return;
        }
        this.sendEvt("PlayerPos", payload);
      },
      sPlayerUpdate: async (payload) => {
        if (payload.userId == this.user.userId) {
          return;
        }
        this.sendEvt("PlayerUpdate", payload);
      },
      sPlayerUpdateInventory: async (payload) => {
        // TODO: ^ Should I also save inventories?
        if (payload.userId == this.user.userId) {
          return;
        }
        this.sendEvt("PlayerUpdateInventory", payload);
      },
      sHostItemBank: async (payload, game) => {
        console.log("sHostItemBank, setting up the bank");
        game.bank.flasks = payload.items ?? [];
        game.bank.objects = payload.objects ?? [];
        game.bank.spells = payload.spells ?? [];
        game.bank.wands = payload.wands ?? [];
        game.gold = payload.gold ?? 0;
        this.bankToGame();
      },
      sHostUserTake: async (payload, game) => {
        if (!payload.success) {
          if (payload.userId == this.user.userId) {
            this.sendEvt("UserTakeFailed", payload);
          }
          return;
        }
        const removed = [
          removeFromArray(game.bank.flasks, (v) => v.id == payload.id),
          removeFromArray(game.bank.objects, (v) => v.id == payload.id),
          removeFromArray(game.bank.spells, (v) => v.id == payload.id),
          removeFromArray(game.bank.wands, (v) => v.id == payload.id),
        ];
        if (removed.length > 0) {
          this.sendEvt("UserTakeSuccess", {
            me: payload.userId == this.user.userId,
            ...payload,
          });
        }
      },
      sPlayerAddItem: async (payload, game) => {
        const data = {
          flasks: payload.flasks?.list ?? [],
          objects: payload.objects?.list ?? [],
          spells: payload.spells?.list ?? [],
          wands: payload.wands?.list ?? [],
        };
        game.bank.flasks.push(...data.flasks);
        game.bank.objects.push(...data.objects);
        game.bank.spells.push(...data.spells);
        game.bank.wands.push(...data.wands);

        this.sendEvt("UserAddItems", {
          userId: payload.userId,
          items: [data.flasks, data.objects, data.spells, data.wands].flat(),
        }); //filter later?
      },
      sPlayerAddGold: async (payload, game) => {
        game.gold += payload.amount;
        this.sendEvt("UserAddGold", payload);
      },
      sPlayerTakeGold: async (payload, game) => {
        if (!this.isHost) {
          return;
        }
        if (game.gold >= payload.amount) {
          this.emit("HostTakeGold", {
            userId: payload.userId,
            amount: payload.amount,
            success: true,
          });
        } else {
          this.emit("HostTakeGold", {
            userId: payload.userId,
            amount: payload.amount,
            success: false,
          });
        }
      },
      sHostUserTakeGold: async (payload, game) => {
        if (payload.success) {
          game.gold -= payload.amount;
          this.sendEvt("UserTakeGoldSuccess", {
            me: payload.userId == this.user.userId,
            ...payload,
          });
        } else if (payload.userId == this.user.userId) {
          this.sendEvt("UserTakeGoldFailed", {
            me: payload.userId == this.user.userId,
            ...payload,
          });
        }
      },
      sPlayerTakeItem: async (payload) => {
        if (!this.isHost) {
          return;
        }
        if (!this.#game) return;
        for (const key in this.#game.bank) {
          for (const item of this.#game.bank[key]) {
            if (item.id == payload.id) {
              this.emit("HostTake", {
                userId: payload.userId,
                id: payload.id,
                success: true,
              });
              return;
            }
          }
        }
        this.emit("HostTake", {
          userId: payload.userId,
          id: payload.id,
          success: false,
        });
      },
      sPlayerPickup: async (payload) => {
        const player =
          payload.userId == this.user.userId
            ? this.user
            : this.players[payload.userId];
        if (player) {
          sysMsg(
            `${player.name} picked up a ${payload.heart ? "heart" : "orb"}.`
          );
        }
        if (payload.userId == this.user.userId) {
          return;
        }
        this.sendEvt("PlayerPickup", payload);
      },
      sPlayerDeath: async (payload, game) => {
        const player =
          payload.userId == this.user.userId
            ? this.user
            : this.players[payload.userId];
        if (player) {
          sysMsg(`${player.name} has ${payload.isWin ? "won" : "died"}.`);
          if (
            this.isHost &&
            game.isOnDeathKick &&
            !payload.isWin &&
            this.user.userId != payload.userId
          ) {
            this.emit("death_kick", payload.userId);
          }
        }
        if (payload.userId == this.user.userId) {
          return;
        }
        this.sendEvt("PlayerDeath", payload);
      },
      sPlayerSecretHourglass: async (payload) => {
        if (payload.userId == this.user.userId) {
          return;
        }
        this.sendEvt("SecretHourglass", payload);
      },
      sCustomModEvent: async (payload) => {
        if (payload.userId == this.user.userId) {
          return;
        }
        try {
          this.sendEvt("CustomModEvent", {
            userId: payload.userId,
            ...JSON.parse(payload.payload),
          });
        } catch (error) {}
      },
      sRespawnPenalty: async (payload, game) => {
        const player =
          payload.userId == this.user.userId
            ? this.user
            : this.players[payload.userId];
        if (player) {
          sysMsg(`${player.name} had to respawn against his will.`);
          if (
            this.isHost &&
            game.isOnDeathKick &&
            this.user.userId != payload.userId
          ) {
            this.emit("death_kick", payload.userId);
          }
        }
        if (payload.userId == this.user.userId) {
          return;
        }
        this.sendEvt("RespawnPenalty", payload);
      },
      sAngerySteve: async (payload) => {
        const player =
          payload.userId == this.user.userId
            ? this.user
            : this.players[payload.userId];
        if (player) {
          sysMsg(`${player.name} has angered the gods.`);
        }
        if (payload.userId == this.user.userId) {
          return;
        }
        this.sendEvt("AngerySteve", payload);
      },
    };

    //sPlayerNewGamePlus (payload) => {},
    /*
    sNemesisPickupItem (payload) => {},
    sNemesisAbility (payload) => {},
    */
  }

  isConnectionLocalhost(addr: string | undefined) {
    return (
      addr == "::1" ||
      addr == "127.0.0.1" ||
      addr == "localhost" ||
      addr == "::ffff:127.0.0.1"
    );
  }

  /**
   * Sets up the connection between this client and the locally running Noita game.
   */
  gameListen() {
    if (!this.server) {
      this.server = new WebSocketServer({ port: this.port });
    }
    this.server.on("connection", (socket, req) => {
      //console.log("[Game WS] New connection(?)")
      if (
        !this.isConnectionLocalhost(req.socket.remoteAddress) ||
        this.rejectConnections
      ) {
        //console.log("terminate")
        socket.terminate();
        return;
      }

      socket.on("message", (data) => {
        this.gameMessage(data, socket);
      });

      socket.on("close", () => {
        if (this.client === socket) {
          //console.log("[Game] Disconnected.")
          this.client = null;
          this.emit("GAME_CLOSE");
        }
      });
    });

    this.on("GameSpellList", (payload) => {
      // TODO: What's this for?
    });
    this.on("RequestPlayerList", () => {
      this.sendPlayerList();
      if (!this.#game) {
        console.warn("Requested player list without game");
      }
      this.sendEvt("UpdateFlags", this.#game?.flags ?? []);
    });
    this.on("PlayerDeath", () => {
      // TODO: When does this happen and what exactly should it do?
      console.log("PlayerDeath");
      const game = this.#game;
      if (!game) return;
      game.gold = 0;
      game.bank.flasks = [];
      game.bank.objects = [];
      game.bank.spells = [];
      game.bank.wands = [];
    });
    this.on("RunOver", () => {
      // TODO: When does this happen and what exactly should it do?
      console.log("RunOver");
      // Clear the bank
      const game = this.#game;
      if (!game) return;
      game.gold = 0;
      game.bank.flasks = [];
      game.bank.objects = [];
      game.bank.spells = [];
      game.bank.wands = [];
    });
  }
  // event and ping
  // {event: "", payload: {}}
  gameMessage(data, socket: WebSocket) {
    let dataJSON = null;
    if (data.slice(0, 1) == ">") {
      if (data == ">RES> [no value]") {
        return;
      } else {
        //console.log(data)
        return;
      }
    } else {
      try {
        dataJSON = JSON.parse(data);
      } catch (e) {
        console.log("[Game] Error parsing game message.");
        console.error(e);
        return;
      }
    }
    if (dataJSON.event == "ping") {
      if (!this.client) {
        //console.log("[Game] Connected.")
        this.client = socket;
        this.emit("GAME_OPEN");
        this.bankToGame();
      }
    } else {
      /*
            console.log({ dataJSON })
            console.log()
            */
      this.emit(dataJSON.event, dataJSON.payload);
    }
  }

  get isPaused() {
    return this.paused;
  }

  get isHost() {
    return this.user.host;
  }

  setUser(user) {
    this.user = user;
  }

  setHost(val) {
    this.user.host = val;
  }

  /**
   * Sends a message to the locally running Noita game.
   */
  sendEvt(key: string, payload: any = {}) {
    const data = JSON.stringify({ event: key, payload });
    console.log("Sending to game:", key, data.length);
    this.#toGame(data);
  }

  /**
   * Sends a message to the locally running Noita game.
   */
  #toGame(data: string) {
    if (!this.client) {
      //console.log("[Game] Pushed code to queue.")
      this.#queue.push(data);
      return;
    }
    this.client.send(data);

    if (this.#queue.length > 0) {
      setTimeout(() => {
        const dataInQueue = this.#queue.shift();
        if (dataInQueue) {
          this.#toGame(dataInQueue);
        }
      }, this.#queueDelay);
    }
  }

  startGame(gameId: string) {
    console.log("Started game", gameId);
    this.#game = new RunningGame(gameId);
  }

  loadSavedGame(savedGame: Game) {
    const game = this.#game;
    if (!game) return false;
    game.gold = savedGame.gold;
    console.log("Loaded gold ", savedGame.gold);
    savedGame.bank.forEach((bankItem) => {
      if (bankItem.type == "flask") {
        game.bank.flasks.push(bankItem.value);
      } else if (bankItem.type == "item") {
        game.bank.objects.push(bankItem.value);
      } else if (bankItem.type == "spell") {
        game.bank.spells.push(bankItem.value);
      } else if (bankItem.type == "wand") {
        game.bank.wands.push(bankItem.value);
      } else {
        console.warn("Unknown bank item type", bankItem);
      }
    });
    game.name = savedGame.name;

    // TODO: Do the flags loading here

    return true;
  }

  updateFlags(data: NT.ServerRoomFlagsUpdated.IGameFlag[]) {
    data.push({ flag: "NT_GAMEMODE_CO_OP" }); //hardcode this for now :) <3
    if (this.#game) {
      this.#game.flags = data;
    } else {
      console.error("[Game] Update flags without game");
    }

    this.sendEvt("UpdateFlags", data);
  }

  addPlayer(data) {
    this.players[data.userId] = data;
    if (!this.client) {
      return;
    }
    this.sendEvt("AddPlayer", data);
  }

  removePlayer(data) {
    delete this.players[data.userId];
    this.sendEvt("RemovePlayer", data);
  }

  bankToGame() {
    if (!this.#game) return;
    const bank = this.#game.bank;

    const items = [bank.flasks, bank.objects, bank.spells, bank.wands].flat();

    this.sendEvt("ItemBank", {
      items: [],
      gold: this.#game.gold,
    });
    // The receiving end has a broken websocket library which can't handle large messages
    // So we send items over bit by bit
    const itemsToSendPerMessage = 10;
    for (let i = 0; i < items.length; i += itemsToSendPerMessage) {
      this.sendEvt("UserAddItems", {
        userId: this.user.userId,
        items: items.slice(i, i + itemsToSendPerMessage),
      });
    }
  }

  sendPlayerList() {
    for (let player in this.players) {
      this.sendEvt("AddPlayer", this.players[player]);
    }
  }

  async saveGame() {
    const game = this.#game;
    if (!game) return false;

    const db = await getDb();
    removeFromArray(db.data.games, (v) => v.id === game.gameId);
    db.data.games.push({
      id: game.gameId,
      name: game.name,
      gold: game.gold,
      gamemode: game.gamemode,
      bank: [
        protoBankToDb(game.bank.flasks, "flask"),
        protoBankToDb(game.bank.objects, "item"),
        protoBankToDb(game.bank.spells, "spell"),
        protoBankToDb(game.bank.wands, "wand"),
      ].flat(),
      flags: game.flags.map((v) => protoFlagToDb(v)),
      timestamp: Date.now(),
    });

    await db.write();

    function protoBankToDb(
      protoBankItems: BankItem["value"][],
      type: BankItem["type"]
    ): BankItem[] {
      return protoBankItems.map((v) => {
        return {
          id: v.id,
          type: type,
          value: { ...v },
        } as BankItem;
      });
    }

    function protoFlagToDb(
      protoFlag: NT.ClientRoomFlagsUpdate.IGameFlag
    ): RoomFlag {
      // TODO: This is just a temporary hack
      if (
        "uIntVal" in protoFlag &&
        protoFlag.uIntVal !== undefined &&
        protoFlag.uIntVal !== null
      ) {
        return {
          id: protoFlag.flag,
          type: "number",
          value: protoFlag.uIntVal as number,
        };
      } else {
        // The existence of a flag implies that it's set to true
        return {
          id: protoFlag.flag,
          type: "boolean",
          value: true,
        };
      }
    }

    return true;
  }

  async reset() {
    if (this.isHost) {
      await this.saveGame();
    }
    this.#game = null;
    this.setHost(false);
    this.rejectConnections = true;
    this.players = {};
  }

  getBank() {
    if (!this.#game) return null;
    return {
      wands: this.#game.bank.wands,
      spells: this.#game.bank.spells,
      flasks: this.#game.bank.flasks,
      objects: this.#game.bank.objects,
      gold: this.#game.gold,
    };
  }

  handleGameAction(gameAction: NT.IGameAction) {
    const { key, value } = protoKeyValue(gameAction);
    if (!this.#game) {
      console.error("No game existing during handleGameAction, key was ", key);
    }
    return this.#gameActionHandler[key]?.(value as any, this.#game);
  }
}

export default new NoitaGame();
