import { v4 as uuidv4 } from "uuid";
import { ipcMain } from "electron";
import ws from "ws";
import messageHandler from "./proto/messageHandler";
import { appEvent } from "./appEvent";
import noita from "./noita";
import { GameAction } from "./proto/messages";
const host = `ws://${process.env["VITE_APP_HOSTNAME"]}${
  process.env["VITE_APP_WS_PORT"] ? ":" + process.env["VITE_APP_WS_PORT"] : ""
}/`;
const print = true;
export default (data) => {
  const user = { userId: data.id, name: data.display_name };
  noita.setUser({ userId: user.userId, name: user.name, host: false });
  let isHost = false;
  let client: ws | null = new ws(`${host}${data.token}`);
  const lobby = {
    sHostStart: (payload) => {
      if (isHost) {
        const msg = messageHandler.encodeGameMsg("cHostItemBank", {
          wands: noita.bank.wands,
          spells: noita.bank.spells,
          items: noita.bank.flasks,
          objects: noita.bank.objects,
          gold: noita.bank.gold,
        });
        sendMsg(msg);
      }
      noita.sendEvt("StartRun");
    },
    sUserBanned: (payload) => {
      if (payload.userId == user.userId) {
        noita.reset();
      } else {
        noita.removePlayer(payload);
      }
    },
    sUserKicked: (payload) => {
      if (payload.userId == user.userId) {
        noita.reset();
      } else {
        noita.removePlayer(payload);
      }
    },
    sUserLeftRoom: (payload) => {
      if (payload.userId == user.userId) {
        noita.reset();
      } else {
        noita.removePlayer(payload);
      }
    },
    sUserJoinedRoom: (payload) => {
      noita.addPlayer(payload);
    },
    sJoinRoomSuccess: (payload) => {
      noita.rejectConnections = false;
      for (const player of payload.users) {
        if (player.userId == user.userId) {
          continue;
        }
        noita.addPlayer({ userId: player.userId, name: player.name });
      }
    },
    sRoomFlagsUpdated: (payload) => {
      noita.updateFlags(payload.flags);
    },
    sRoomCreated: (payload) => {
      noita.rejectConnections = false;
      noita.setHost(true);
      isHost = true;
    },
    sRoomDeleted: (payload) => {
      noita.reset();
    },
  };

  client.on("open", () => {
    appEvent("CONNECTED", data);
  });

  client.on("close", () => {
    appEvent("CONNECTION_LOST");
    client.terminate();
    client = null;
  });

  // We know it's an Uint8Array, because we're using that binary type
  client.on("message", (data: Uint8Array) => {
    try {
      const message = messageHandler.decode(data).kind;
      if (message.oneofKind === "gameAction") {
        const key = message.gameAction.action.oneofKind;
        if (key === undefined) {
          throw new Error("No game message key");
        }
        const payload = message.gameAction.action[key];
        if (key == "sChat") {
          appEvent(key, payload); // TODO: is the payload usable & can it be sent to the render thread?
        }
        if (typeof noita[key] == "function") {
          noita[key](payload);
        }
      } else if (message.oneofKind === "lobbyAction") {
        const key = message.lobbyAction.action.oneofKind;
        if (key === undefined) {
          throw new Error("No lobby message key");
        }
        const payload = message.lobbyAction.action[key];
        if (key && payload) {
          if (typeof lobby[key] == "function") {
            lobby[key](payload); // TODO: is the payload usable & can it be sent to the render thread?
          }
          appEvent(key, payload);
        }
      }
      //if (["sPlayerMove", "sPlayerUpdate", "sChat"].indexOf(key) > -1) { return }
      //console.log(`[SERVER ${key}]`)
      //console.log(payload)
      //console.log()
    } catch (error) {
      //eugh
      console.error("something went wrong while getting the message", error);
    }
  });

  ipcMain.on("CLIENT_MESSAGE", (e, data) => {
    const msg = messageHandler.encodeLobbyMsg(data.key, data.payload);
    sendMsg(msg);
  });

  ipcMain.on("CLIENT_CHAT", (e, data) => {
    const msg = messageHandler.encodeGameMsg(data.key, data.payload);
    sendMsg(msg);
  });

  noita.on("death_kick", (userId) => {
    const msg = messageHandler.encodeLobbyMsg("cKickUser", { userId });
    sendMsg(msg);
  });

  noita.on("GAME_OPEN", () => {
    noita.sendEvt("RequestGameInfo");
    noita.sendEvt("RequestSpellList");

    noita.once("GameInfo", (event) => {
      const msg = messageHandler.encodeLobbyMsg("cReadyState", {
        ready: true,
        seed: event.seed,
        mods: event.mods,
        version: event.version,
        beta: event.beta,
      });
      sendMsg(msg);
    });
  });

  noita.on("GAME_CLOSE", () => {
    unready();
  });

  noita.on("PlayerMove", (event) => {
    const msg = messageHandler.encodeGameMsg("cPlayerMove", event);
    sendMsg(msg);
  });

  noita.on("PlayerUpdate", (event) => {
    const msg = messageHandler.encodeGameMsg("cPlayerUpdate", event);
    sendMsg(msg);
  });

  noita.on("PlayerPickup", (event) => {
    const msg = messageHandler.encodeGameMsg("cPlayerPickup", event);
    sendMsg(msg);
  });

  noita.on("PlayerDeath", (event) => {
    const msg = messageHandler.encodeGameMsg("cPlayerDeath", event);
    sendMsg(msg);
    unready();
  });

  noita.on("RunOver", () => {
    unready();
    if (isHost) {
      const msg = messageHandler.encodeLobbyMsg("cRunOver", { idk: false });
      sendMsg(msg);
    }
  });

  noita.on("SendGold", (event) => {
    const msg = messageHandler.encodeGameMsg("cPlayerAddGold", event);
    sendMsg(msg);
  });

  noita.on("TakeGold", (event) => {
    const msg = messageHandler.encodeGameMsg("cPlayerTakeGold", event);
    sendMsg(msg);
  });

  noita.on("AngerySteve", (event) => {
    const msg = messageHandler.encodeGameMsg("cAngerySteve", event);
    sendMsg(msg);
  });

  noita.on("RespawnPenalty", (event) => {
    const msg = messageHandler.encodeGameMsg("cRespawnPenalty", event);
    sendMsg(msg);
  });

  noita.on("SendItems", (event) => {
    const payload = {};
    if (event.spells) {
      const spells = event.spells.map(mapSpells);
      payload.spells = { list: spells };
    } else if (event.flasks) {
      const flasks = event.flasks.map(mapFlasks);
      payload.flasks = { list: flasks };
    } else if (event.wands) {
      const wands = event.wands.map(mapWands);
      payload.wands = { list: wands };
    } else if (event.objects) {
      const objects = event.objects.map(mapObjects);
      payload.objects = { list: objects };
    }
    const msg = messageHandler.encodeGameMsg("cPlayerAddItem", payload);
    sendMsg(msg);
  });

  noita.on("PlayerTake", (event) => {
    const msg = messageHandler.encodeGameMsg("cPlayerTakeItem", event);
    sendMsg(msg);
  });

  noita.on("HostTake", (event) => {
    const msg = messageHandler.encodeGameMsg("cHostUserTake", event);
    sendMsg(msg);
  });

  noita.on("HostTakeGold", (event) => {
    const msg = messageHandler.encodeGameMsg("cHostUserTakeGold", event);
    sendMsg(msg);
  });

  noita.on("CustomModEvent", (event) => {
    const payload = JSON.stringify(event);
    const msg = messageHandler.encodeGameMsg("cCustomModEvent", { payload });
    sendMsg(msg);
  });

  function sendMsg(msg) {
    if (client != null) {
      client.send(msg);
    }
  }

  function unready() {
    const msg = messageHandler.encodeLobbyMsg("cReadyState", {
      ready: false,
      seed: "",
      mods: [],
    });
    sendMsg(msg);
  }

  function mapWands(wand) {
    return {
      id: uuidv4(),
      stats: keysToCamel(wand.stats),
      alwaysCast: wand.always_cast
        ? wand.always_cast.map(mapSpells)
        : undefined,
      deck: wand.deck.map(mapSpells),
      sentBy: user.userId,
    };
  }

  function mapSpells(spell) {
    return {
      id: uuidv4(),
      gameId: spell.id,
      usesRemaining: spell.usesRemaining,
      sentBy: user.userId,
    };
  }

  function mapFlasks(val) {
    return {
      id: uuidv4(),
      isChest: val.isChest,
      color: {
        r: (val.color & 0xff) / 193,
        g: ((val.color >> 8) & 0xff) / 193.5,
        b: ((val.color >> 16) & 0xff) / 193,
      },
      content: val.content,
      sentBy: user.userId,
    };
  }

  function mapObjects(val) {
    return {
      id: uuidv4(),
      path: val.path,
      sprite: val.sprite,
      sentBy: user.userId,
    };
  }

  function toCamel(str: string) {
    return str.replace(/([_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace("_", "");
    });
  }

  function keysToCamel(obj: { [key: string]: any }) {
    const n: { [key: string]: any } = {};
    for (const key of Object.keys(obj)) {
      n[toCamel(key)] = obj[key];
    }
    return n;
  }
};
