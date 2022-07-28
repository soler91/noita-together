import { WebSocket, WebSocketServer } from "ws";
import { v4 as uuidv4 } from "uuid";
import { appEvent } from "./appEvent";
import { ipcMain } from "electron";
import { EventEmitter } from "events";
import type { NT } from "./proto/messages";

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

class NoitaGame extends EventEmitter {
  port = 25569;
  server: WebSocketServer | null = null;

  client: WebSocket | null = null;
  paused = false;
  #queue: string[] = [];
  #queueDelay = 5000;

  rejectConnections = true;
  user = { userId: "", name: "", host: false };
  spellList = [];
  gameFlags: NT.ClientRoomFlagsUpdate.IGameFlag[] = [];
  players = {};
  bank = {
    wands: [] as NT.IWand[],
    spells: [] as NT.ISpell[],
    flasks: [] as NT.IItem[],
    objects: [] as NT.IEntityItem[],
    gold: 0,
  };
  onDeathKick = false;

  #gameActionHandler: {
    [key in keyof NT.IGameAction]: (
      payload: NonNullable<NT.IGameAction[key]>
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
        if (payload.userId == this.user.userId) {
          return;
        }
        this.sendEvt("PlayerUpdateInventory", payload);
      },
      sHostItemBank: async (payload) => {
        this.bank = {
          wands: payload.wands ?? [],
          spells: payload.spells ?? [],
          flasks: payload.items ?? [],
          objects: payload.objects ?? [],
          gold: payload.gold ?? 0,
        };
        this.bankToGame();
      },
      sHostUserTake: async (payload) => {
        if (!payload.success) {
          if (payload.userId == this.user.userId) {
            this.sendEvt("UserTakeFailed", payload);
          }
          return;
        }
        for (const key in this.bank) {
          if (key == "gold") {
            continue;
          }
          for (const [index, item] of this.bank[key].entries()) {
            if (item.id == payload.id) {
              this.bank[key].splice(index, 1);
              this.sendEvt("UserTakeSuccess", {
                me: payload.userId == this.user.userId,
                ...payload,
              });
            }
          }
        }
      },
      sPlayerAddItem: async (payload) => {
        const data = {
          flasks: payload.flasks,
          spells: payload.spells,
          wands: payload.wands,
          objects: payload.objects,
        };
        const items = [];

        for (const key in data) {
          if (!data[key]) {
            continue;
          }
          for (const item of data[key].list) {
            this.bank[key].push(item);
            items.push(item);
          }
        }

        this.sendEvt("UserAddItems", { userId: payload.userId, items }); //filter later?
      },
      sPlayerAddGold: async (payload) => {
        this.bank.gold += payload.amount;
        this.sendEvt("UserAddGold", payload);
      },
      sPlayerTakeGold: async (payload) => {
        if (!this.isHost) {
          return;
        }
        if (this.bank.gold >= payload.amount) {
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
      sHostUserTakeGold: async (payload) => {
        if (payload.success) {
          this.bank.gold -= payload.amount;
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
        for (const key in this.bank) {
          if (key == "gold") {
            continue;
          }
          for (const item of this.bank[key]) {
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
      sPlayerDeath: async (payload) => {
        const player =
          payload.userId == this.user.userId
            ? this.user
            : this.players[payload.userId];
        if (player) {
          sysMsg(`${player.name} has ${payload.isWin ? "won" : "died"}.`);
          if (
            this.isHost &&
            this.onDeathKick &&
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
      sRespawnPenalty: async (payload) => {
        const player =
          payload.userId == this.user.userId
            ? this.user
            : this.players[payload.userId];
        if (player) {
          sysMsg(`${player.name} had to respawn against his will.`);
          if (
            this.isHost &&
            this.onDeathKick &&
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
      this.setSpellList(payload);
    });
    this.on("RequestPlayerList", () => {
      this.sendPlayerList();
      this.sendEvt("UpdateFlags", this.gameFlags);
    });
    this.on("PlayerDeath", () => {
      this.bank = {
        wands: [],
        spells: [],
        flasks: [],
        objects: [],
        gold: 0,
      };
    });
    this.on("RunOver", () => {
      this.bank = {
        wands: [],
        spells: [],
        flasks: [],
        objects: [],
        gold: 0,
      };
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

  updateFlags(data) {
    const onDeathKick = data.some((entry) => entry.flag == "_ondeath_kick");
    if (this.isHost) {
      this.onDeathKick = onDeathKick;
    }

    data.push({ flag: "NT_GAMEMODE_CO_OP" }); //hardcode this for now :) <3
    this.gameFlags = data;
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
    const bank = [];
    for (const wand of this.bank.wands) {
      bank.push(wand);
    }
    for (const spell of this.bank.spells) {
      bank.push(spell);
    }
    for (const item of this.bank.flasks) {
      bank.push(item);
    }
    for (const item of this.bank.objects) {
      bank.push(item);
    }
    this.sendEvt("ItemBank", { items: bank, gold: this.bank.gold });
  }

  setSpellList(data) {}

  sendPlayerList() {
    for (let player in this.players) {
      this.sendEvt("AddPlayer", this.players[player]);
    }
  }

  async reset() {
    this.setHost(false);
    this.rejectConnections = true;
    this.spellList = [];
    this.gameFlags = [];
    this.players = {};
    this.bank = {
      wands: [],
      spells: [],
      flasks: [],
      objects: [],
      gold: 0,
    };
  }

  getBank() {
    return {
      wands: this.bank.wands,
      spells: this.bank.spells,
      flasks: this.bank.flasks,
      objects: this.bank.objects,
      gold: this.bank.gold,
    };
  }

  handleGameAction(gameAction: NT.IGameAction) {
    const { key, value } = protoKeyValue(gameAction);
    return this.#gameActionHandler[key]?.(value as any);
  }
}

export default new NoitaGame();
