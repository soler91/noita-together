import { defineStore, acceptHMRUpdate } from "pinia";
import { ipcRenderer } from "electron";
import { reactive, computed, ref, readonly } from "vue";

const colors = [
  "#698935",
  "#358969",
  "#356989",
  "#693589",
  "#893569",
  "#893535",
  "#896935",
];
const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export const Gamemodes = {
  Coop: 0,
  Race: 1,
  Nemesis: 2,
} as const;

export const GamemodeNames = {
  [Gamemodes.Coop]: "Co-op",
  [Gamemodes.Race]: "Race",
  [Gamemodes.Nemesis]: "Nemesis",
} as const;

export type Gamemode = typeof Gamemodes[keyof typeof Gamemodes];

export type GameFlag =
  | {
      id: string;
      name: string;
      tooltip: string;
      type: "boolean";
      value: boolean;
    }
  | {
      id: string;
      name: string;
      tooltip: string;
      type: "number";
      value: number;
    };

// callbacks for when IPC does stuff
const ipcPlugin = (ipc) => {
  return (store) => {
    ipc.on("CONNECTED", (event, data) => {
      store.commit("setUser", data);
    });

    ipc.on("USER_EXTRA", (event, data) => {
      store.commit("setUserExtra", data);
    });

    ipc.on("SAVED_USER", (event, data) => {
      store.commit("setSavedUserName", data);
    });
    /*
        ipc.on("DEBUG_EVT", (event, data) => {
            // eslint-disable-next-line no-console
            console.log(data)
        })
        */

    ipc.on("UPDATE_DOWNLOADED", () => {
      store.dispatch("errDialog", {
        title: "Update available",
        body: "App finished downloading an update and will apply the next time you launch.",
        canClose: false,
      });
    });

    ipc.on("CONNECTION_LOST", () => {
      store.dispatch("errDialog", {
        title: "Disconnected from server",
        body: "",
        canClose: false,
      });
    });

    ipc.on("sRoomUpdated", (event, data) => {
      store.commit("roomUpdated", data);
    });

    ipc.on("sRoomFlagsUpdated", (event, data) => {
      store.commit("roomFlagsUpdated", data);
    });

    ipc.on("sRoomDeleted", (event, data) => {
      store.commit("resetRoom", data);
    });

    ipc.on("sUserJoinedRoom", (event, data) => {
      store.commit("userJoinedRoom", data);
    });

    ipc.on("sUserLeftRoom", (event, data) => {
      //store.commit("chatMsg", `[System] ${store.state.rooms.users[data.userId]} has left the room.`)
      if (data.userId == store.state.user.id) {
        store.commit("resetRoom");
      } else {
        store.commit("userLeftRoom", data);
      }
    });

    ipc.on("sUserKicked", (event, data) => {
      //store.commit("chatMsg", `[System] ${store.state.rooms.users[data.userId]} has been kicked.`)
      if (data.userId == store.state.user.id) {
        store.commit("resetRoom");
      } else {
        store.commit("userLeftRoom", data);
      }
    });

    ipc.on("sUserBanned", (event, data) => {
      //store.commit("chatMsg", `[System] ${store.state.rooms.users[data.userId]} has been banned.`)
      if (data.userId == store.state.user.id) {
        store.commit("resetRoom");
      } else {
        store.commit("userLeftRoom", data);
      }
    });

    ipc.on("sUserReadyState", (event, data) => {
      //console.log({ gotready: data })
      store.commit("userReadyState", data);
    });

    ipc.on("sRoomAddToList", (event, data) => {
      store.commit("addRoom", data.room);
    });

    ipc.on("sRoomDeleted", (event, data) => {
      store.commit("deleteRoom", data.id);
    });

    ipc.on("sRoomList", (event, data) => {
      store.commit("setRooms", data.rooms);
    });

    ipc.on("sChat", (event, data) => {
      store.commit("pushChat", data);
    });

    /*
        ipc.on("sDisconnected", (e, reason) => {
            //Show disconnection msg ?
        })
        */
  };
};

const useStore = defineStore("store", () => {
  const defaultFlags = readonly<{ [key in Gamemode]: GameFlag[] }>({
    [Gamemodes.Coop]: [
      {
        id: "sync_perks",
        name: "Share all perks",
        tooltip: "When grabbing perks the whole team will also get them.",
        type: "boolean",
        value: false,
      },
      {
        id: "team_perks",
        name: "Team Perks",
        tooltip:
          "When grabbing certain perks (not all) the whole team will also get them.",
        type: "boolean",
        value: true,
      },
      {
        id: "sync_steve",
        name: "Sync Steve",
        tooltip: "Angers the gods for everyone.",
        type: "boolean",
        value: true,
      },
      {
        id: "sync_hearts",
        name: "Sync Hearts",
        tooltip: "When someone picks up a heart everyone else gets it too.",
        type: "boolean",
        value: true,
      },
      {
        id: "sync_orbs",
        name: "Sync Orbs",
        tooltip: "When someone picks up an orb everyone else gets it too.",
        type: "boolean",
        value: true,
      },
      {
        id: "sync_shift",
        name: "Sync Shifts",
        tooltip:
          "When someone fungal shifts everyone also gets the same shift, cooldown also applies.",
        type: "boolean",
        value: true,
      },
      {
        id: "send_wands",
        name: "Send Wands",
        tooltip: "Allow players to deposit/take wands.",
        type: "boolean",
        value: true,
      },
      {
        id: "send_flasks",
        name: "Send Flasks",
        tooltip: "Allow players to deposit/take flasks.",
        type: "boolean",
        value: true,
      },
      {
        id: "send_gold",
        name: "Send Gold",
        tooltip: "Allow players to deposit/take gold.",
        type: "boolean",
        value: true,
      },
      {
        id: "send_items",
        name: "Send Items",
        tooltip: "Allow players to deposit/take items.",
        type: "boolean",
        value: true,
      },
      {
        id: "world_randomize_loot",
        name: "Randomize loot",
        tooltip:
          "Only applies when playing on the same seed, makes it so everyone gets different loot.",
        type: "boolean",
        value: true,
      },
      {
        id: "sync_world_seed",
        name: "Sync Seed",
        tooltip:
          "All players play in the same world seed (requires everyone to start a new game) 0 means random seed.",
        type: "number",
        value: 0,
      },
      {
        id: "death_penalty_end",
        name: "End run",
        tooltip: "Run ends for all players when someone dies.",
        type: "boolean",
        value: true,
      },
      {
        id: "death_penalty_weak_respawn",
        name: "Respawn Penalty",
        tooltip:
          "Player respawns and everyone takes a % drop on their max hp, once it goes below certain threshold on the weakest player the run ends for everyone.",
        type: "boolean",
        value: true,
      },
      {
        id: "death_penalty_full_respawn",
        name: "Respawn",
        tooltip:
          "Player will respawn on their last checkpoint and no penalties.",
        type: "boolean",
        value: true,
      },
      {
        id: "_ondeath_kick",
        name: "Kick on death",
        tooltip: "Kicks whoever dies, more customisable soon™.",
        type: "boolean",
        value: false,
      },
    ],
    [Gamemodes.Race]: [],
    [Gamemodes.Nemesis]: [
      {
        id: "ban_ambrosia",
        name: "Ban Ambrosia",
        tooltip: "will shift ambrosia away.",
        type: "boolean",
        value: true,
      },
      {
        id: "ban_invis",
        name: "Ban Invisibility",
        tooltip: "will shift invisibility away and remove the perk.",
        type: "boolean",
        value: true,
      },
      {
        id: "nemesis_abilities",
        name: "Nemesis abilities",
        tooltip: "Abilities will appear in each holy mountain with an NP cost.",
        type: "boolean",
        value: true,
      },
      {
        id: "sync_steve",
        name: "Sync Steve",
        tooltip: "Angers the gods for everyone.",
        type: "boolean",
        value: false,
      },
      {
        id: "sync_orbs",
        name: "Sync Orbs",
        tooltip: "When someone picks up an orb everyone else gets it too.",
        type: "boolean",
        value: false,
      },
      {
        id: "world_randomize_loot",
        name: "Randomize loot",
        tooltip:
          "Only applies when playing on the same seed, makes it so everyone gets different loot.",
        type: "boolean",
        value: true,
      },
      {
        id: "sync_world_seed",
        name: "Sync Seed",
        tooltip:
          "All players play in the same world seed (requires everyone to start a new game) 0 means random seed.",
        type: "number",
        value: 0,
      },
      {
        id: "death_penalty_weak_respawn",
        name: "Last noita standing.",
        tooltip: "Run ends when there's only one player left.",
        type: "boolean",
        value: true,
      },
      {
        id: "_ondeath_kick",
        name: "Kick on death (do not disable)",
        tooltip: "Kicks whoever dies, more customisable soon™.",
        type: "boolean",
        value: true,
      },
    ],
  });

  const state = reactive({
    user: {
      name: "",
      id: 0,
      extra: 0,
    },
    savedUser: false,
    savedUserName: "",
    lobbies: [],
    room: {
      id: "",
      name: "",
      gamemode: 0,
      maxUsers: 0,
      password: "",
      //users[id]
      users: [
        /*{
                    userId: String,
                    name: String,
                    owner: Boolean,
                    readyState: {
                        ready: Boolean,
                        seed: String,
                        mods: [String]
                    }
                }*/
      ],
    },
    roomFlags: [],
    roomChat: [],
    loading: false,
    joining: false,
    errDialog: {
      title: "",
      body: "",
      canClose: true,
    },
    showErrDialog: false,
  });

  const getters = {
    isHost: computed(() => {
      const users = state.room.users;
      for (const user of users) {
        if (user.userId == state.user.id) {
          return user.owner ? true : false;
        }
      }
      return false;
    }),
    user: computed(() => state.user),
    userName: computed(() => {
      return state.user.name;
    }),
    userId: computed(() => {
      return state.user.id;
    }),
    userExtra: computed(() => {
      return state.user.extra;
    }),
    roomId: computed(() => {
      return state.room.id;
    }),
    roomName: computed(() => {
      return state.room.name;
    }),
    roomGamemode: computed(() => {
      return state.room.gamemode;
    }),
    roomMaxUsers: computed(() => {
      return state.room.maxUsers;
    }),
    roomHasPassword: computed(() => {
      return state.room.protected;
    }),
    flags: computed(() => {
      const mode = state.room.gamemode;
      const fDefaults = defaultFlags[mode];
      return fDefaults
        .map((flag) => {
          const found = state.roomFlags.find((f) => f.id == flag.id);
          if (!found && flag.type == "boolean") {
            return { ...flag, value: false };
          } else if (found) {
            return found;
          } else {
            return undefined;
          }
        })
        .filter((v) => typeof v !== "undefined");
    }),
  };

  const mutations = {
    setSavedUserName: (value) => {
      if (value) {
        state.savedUser = true;
      }
      state.savedUserName = value;
    },
    setLoading: (value) => {
      state.loading = value;
    },
    joinState: (payload) => {
      state.joining = payload;
    },
    userReadyState: (payload) => {
      state.room.users = state.room.users.map((user) => {
        if (user.userId == payload.userId) {
          user.ready = payload.ready;
          user.seed = payload.seed;
          user.mods = payload.mods;
          (user.version = payload.version), (user.beta = payload.beta);
        }
        return user;
      });
    },

    setUser: (payload) => {
      state.user.name = payload.display_name;
      state.user.id = payload.id;
    },
    setUserExtra: (payload) => {
      state.user.extra = payload;
    },
    addRoom: (payload) => {
      state.lobbies.push(payload);
    },
    deleteRoom: (id) => {
      state.lobbies = state.lobbies.filter((room) => room.id != id);
    },
    setRooms: (payload) => {
      state.lobbies = payload;
    },
    setRoom: (payload) => {
      state.room = payload;
      for (const user of state.room.users) {
        user.color = randomColor();
      }
    },
    roomUpdated: (payload) => {
      let room = Object.assign(state.room);
      state.room = Object.assign(room, payload);
    },
    roomFlagsUpdated: (payload) => {
      const mode = state.room.gamemode;
      const fDefaults = defaultFlags[mode];
      if (!fDefaults) {
        return;
      }
      state.roomFlags = payload.flags
        .map((val) => {
          const flag = { ...fDefaults.find((f) => f.id == val.flag) };
          if (!flag) {
            return;
          } else {
            if (typeof val.value == "number") {
              flag.value = val.value;
            }
            if (flag.type == "boolean") {
              flag.value = true;
            }
            return flag;
          }
        })
        .filter((v) => typeof v !== "undefined");
    },
    resetRoom: (state) => {
      state.room = {
        id: "",
        name: "",
        gamemode: 0,
        maxUsers: 0,
        password: "",
        users: [],
        locked: false,
      };
      state.roomFlags = [];
      state.roomChat = [];
    },
    userJoinedRoom: (payload) => {
      state.room.users.push({
        userId: payload.userId,
        name: payload.name,
        owner: false,
        color: randomColor(),
        readyState: {
          ready: false,
          seed: "",
          mods: [],
        },
      });
    },
    userLeftRoom: (payload) => {
      const users = state.room.users;
      for (const [i, user] of users.entries()) {
        if (user.userId == payload.userId) {
          users.splice(i, 1);
        }
      }
    },
    setErrDialog: (payload) => {
      state.errDialog = payload;
    },
    showErrDialog: (payload) => {
      state.showErrDialog = payload;
    },
    pushChat: (payload) => {
      const time = new Date();
      let timeStr =
        ("0" + time.getHours()).slice(-2) +
        ":" +
        ("0" + time.getMinutes()).slice(-2);
      const found = state.room.users.find(
        (user) => user.userId == payload.userId
      );
      let color = randomColor();
      color = (found && found.color) || color;

      if (payload.userId === "-1") {
        color = "#e69569";
      }
      state.roomChat.push({
        id: payload.id,
        time: timeStr,
        userId: payload.userId,
        name: payload.name.trim(),
        message: payload.message.trim(),
        color,
      });
      if (state.roomChat.length > 250) {
        state.roomChat.shift();
      }
    },
    setDefaultFlags: (mode) => {
      if (mode == 0 || mode == 2) {
        state.roomFlags = defaultFlags[mode].map((flag) => {
          return { ...flag };
        });
      }
    },
  };

  const actions = {
    continueSavedUser: () => {
      commit("setLoading", true);
      ipcRenderer.send("TRY_LOGIN", state.savedUserName);
      ipcRenderer.once("TRY_LOGIN_FAILED", () => {
        dispatch("errDialog", {
          title: "Failed to login",
          body: "Login manually with the remember me checkbox checked to refresh your login info.",
          canClose: true,
        });
        commit("setLoading", false);
      });
    },
    errDialog: (payload) => {
      commit("setErrDialog", payload);
      commit("showErrDialog", true);
    },
    joinRoom: (payload) => {
      commit("setLoading", true);
      ipcRenderer.send("CLIENT_MESSAGE", { key: "cJoinRoom", payload });

      ipcRenderer.once("sJoinRoomSuccess", (event, data) => {
        commit("setRoom", data);
        commit("setLoading", false);
      });

      ipcRenderer.once("sJoinRoomFailed", (event, data) => {
        dispatch("errDialog", {
          title: "Failed to join room",
          body: data.reason,
          canClose: true,
        });
        commit("setLoading", false);
      });
    },
    createRoom: async (payload) => {
      commit("setLoading", true);
      ipcRenderer.send("CLIENT_MESSAGE", { key: "cRoomCreate", payload });
      ipcRenderer.once("sRoomCreated", (event, data) => {
        commit("setDefaultFlags", data.gamemode);
        commit("setRoom", data);
        commit("setLoading", false);
        dispatch("sendFlags");
        return true;
      });

      ipcRenderer.once("sRoomCreateFailed", (event, data) => {
        dispatch("errDialog", {
          title: "Failed to create room",
          body: data.reason,
          canClose: true,
        });
        commit("setLoading", false);
        return false;
      });
    },
    updateRoom: async (payload) => {
      commit("setLoading", true);
      ipcRenderer.send("CLIENT_MESSAGE", { key: "cRoomUpdate", payload });
      ipcRenderer.once("sRoomUpdated", () => {
        commit("setLoading", false);
        return true;
      });

      ipcRenderer.once("sRoomUpdateFailed", (event, data) => {
        dispatch("errDialog", {
          title: "Failed to update room",
          body: data.reason,
          canClose: true,
        });
        commit("setLoading", false);
        return false;
      });
    },
    leaveRoom: async () => {
      commit("setLoading", true);
      const key = getters.isHost.value ? "cRoomDelete" : "cLeaveRoom";
      const payload = {
        id: getters.roomId.value,
        userId: getters.userId.value,
      };
      ipcRenderer.send("CLIENT_MESSAGE", { key, payload });
      const evt = getters.isHost.value ? "sRoomDeleted" : "sUserLeftRoom";
      ipcRenderer.once(evt, (event, data) => {
        if (evt == "sUserLeftRoom") {
          if (data.userId == getters.userId.value) {
            commit("setLoading", false);
            return true;
          }
        } else {
          commit("setLoading", false);
          return true;
        }
      });
    },
    kickUser: async (payload) => {
      commit("setLoading", true);
      ipcRenderer.send("CLIENT_MESSAGE", { key: "cKickUser", payload });
      ipcRenderer.on("sUserKicked", () => {
        commit("setLoading", false);
        return true;
      });
    },
    banUser: async (payload) => {
      commit("setLoading", true);
      ipcRenderer.send("CLIENT_MESSAGE", { key: "cBanUser", payload });
      ipcRenderer.on("sUserBanned", () => {
        commit("setLoading", false);
        return true;
      });
    },
    requestRooms: async (payload) => {
      ipcRenderer.send("CLIENT_MESSAGE", {
        key: "cRequestRoomList",
        payload: { page: payload && payload > 0 ? payload : 0 },
      });
    },
    sendChat: (payload) => {
      ipcRenderer.send("CLIENT_CHAT", {
        key: "cChat",
        payload,
      });
      commit("pushChat", {
        id: payload.id,
        userId: state.user.id,
        name: state.user.name.trim(),
        message: payload.message.trim(),
      });
    },
    sendFlags: () => {
      const flags = getters.flags.value
        .map((val) => {
          let flag = { flag: val.id };
          if (typeof val.value == "number") {
            flag.uIntVal = val.value;
          } //temp fix
          if (val.type == "boolean" && !val.value) {
            flag = undefined;
          }
          return flag;
        })
        .filter((v) => typeof v !== "undefined");
      ipcRenderer.send("CLIENT_MESSAGE", {
        key: "cRoomFlagsUpdate",
        payload: { flags },
      });
    },
    startRun: (payload) => {
      ipcRenderer.send("CLIENT_MESSAGE", {
        key: "cStartRun",
        payload,
      });
    },
  };

  function commit(type: keyof typeof mutations, payload) {
    return mutations[type](payload);
  }

  function dispatch(type: keyof typeof actions, payload) {
    return actions[type](payload);
  }

  ipcPlugin(ipcRenderer)({
    state,
    getters,
    mutations,
    actions,
    commit,
    dispatch,
  });

  return {
    state,
    getters,
    mutations,
    actions,
    commit,
    dispatch,
  };
});

export default useStore;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
