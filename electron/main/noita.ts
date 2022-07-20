import ws, { WebSocketServer } from "ws";
import { v4 as uuidv4 } from "uuid";
import { appEvent } from "./appEvent";
import { ipcMain } from "electron";
import { EventEmitter } from "events";
function sysMsg(message: string) {
  appEvent("sChat", {
    id: uuidv4(),
    userId: "-1",
    name: "[System]",
    message,
  });
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

  client = null;
  paused = false;
  queue = [];
  queueDelay = 5000;

  rejectConnections = true;
  user = { userId: 0, name: "", host: false };
  spellList = [];
  gameFlags = [];
  players = {};
  bank = {
    wands: [],
    spells: [],
    flasks: [],
    objects: [],
    gold: 0,
  };
  onDeathKick = false;

  constructor() {
    super();
    this.setMaxListeners(0);

    ipcMain.once("game_listen", () => {
      this.gameListen();
    });
  }

  isConnectionLocalhost(addr: string | undefined) {
    return (
      addr == "::1" ||
      addr == "127.0.0.1" ||
      addr == "localhost" ||
      addr == "::ffff:127.0.0.1"
    );
  }

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
  gameMessage(data, socket) {
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

  sendEvt(key, payload = {}) {
    this.toGame({ event: key, payload });
  }

  toGame(obj = {}) {
    const evt = JSON.stringify(obj);
    if (!this.client) {
      //console.log("[Game] Pushed code to queue.")
      this.queue.push(evt);
      return;
    }
    this.client.send(evt);

    if (this.queue.length > 0) {
      setTimeout(() => {
        this.toGame(this.queue.shift());
      }, this.queueDelay);
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

  reset() {
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

  sPlayerMove(payload) {
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
  }
  sPlayerPos(payload) {
    if (payload.userId == this.user.userId || !this.client) {
      return;
    }
    this.sendEvt("PlayerPos", payload);
  }
  sPlayerUpdate(payload) {
    if (payload.userId == this.user.userId) {
      return;
    }
    this.sendEvt("PlayerUpdate", payload);
  }
  sPlayerUpdateInventory(payload) {
    if (payload.userId == this.user.userId) {
      return;
    }
    this.sendEvt("PlayerUpdateInventory", payload);
  }
  sHostItemBank(payload) {
    this.bank = {
      wands: payload.wands,
      spells: payload.spells,
      flasks: payload.items,
      objects: payload.objects,
      gold: payload.gold,
    };
    this.bankToGame();
  }
  sHostUserTake(payload) {
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
  }
  sPlayerAddItem(payload) {
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
  }
  sPlayerAddGold(payload) {
    this.bank.gold += payload.amount;
    this.sendEvt("UserAddGold", payload);
  }
  sPlayerTakeGold(payload) {
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
  }
  sHostUserTakeGold(payload) {
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
  }
  sPlayerTakeItem(payload) {
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
  }
  sPlayerPickup(payload) {
    const player =
      payload.userId == this.user.userId
        ? this.user
        : this.players[payload.userId];
    if (player) {
      sysMsg(`${player.name} picked up a ${payload.heart ? "heart" : "orb"}.`);
    }
    if (payload.userId == this.user.userId) {
      return;
    }
    this.sendEvt("PlayerPickup", payload);
  }
  sPlayerDeath(payload) {
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
  }
  //sPlayerNewGamePlus (payload) => {},
  sPlayerSecretHourglass(payload) {
    if (payload.userId == this.user.userId) {
      return;
    }
    this.sendEvt("SecretHourglass", payload);
  }
  sCustomModEvent(payload) {
    if (payload.userId == this.user.userId) {
      return;
    }
    try {
      this.sendEvt("CustomModEvent", {
        userId: payload.userId,
        ...JSON.parse(payload.payload),
      });
    } catch (error) {}
  }
  sRespawnPenalty(payload) {
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
  }
  sAngerySteve(payload) {
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
  }
  /*
    sNemesisPickupItem (payload) => {},
    sNemesisAbility (payload) => {},
    */
  sChat(payload) {
    this.sendEvt("Chat", payload);
  }
}

export default new NoitaGame();
