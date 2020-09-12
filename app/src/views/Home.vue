<template>
    <div class="content">
        <div class="filler"></div>
        <label for="hostname">Host name</label>
        <div class="input-btn">
            <input
                v-model="hostUsername"
                type="text"
                id="hostname"
                placeholder="Run host username"
                :disabled="isHost"
            />
            <div class="labeled-checkbox">
                <label for="hostname">Host</label>
                <input type="checkbox" v-model="isHost" />
            </div>
        </div>

        <label for="channel">Channel name</label>
        <div class="input-btn">
            <input
                v-model="hostChannel"
                type="text"
                id="channel"
                placeholder="Channel name to send IRC messages"
            />
            <a class="btn" @click.prevent="joinChannel">
                <span v-if="!joining">Join</span>
                <i v-else class="fas fa-spinner fa-pulse"></i>
            </a>
        </div>

        <div v-if="isHost" class="game-flags">
            <div v-for="(flag, idx) in flags" :key="flag.u">
                <div>
                    <label class="switch">
                        <input type="checkbox" :for="flag.u" v-model="flags[idx].enabled" />
                        <span class="slider round" :for="flag.u"></span>
                    </label>
                    <span>{{flag.name}}</span>
                </div>
            </div>
        </div>

        <table class="user-states" v-if="isHost && users.length > 0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>State</th>
                    <th>Mod</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="user in users" :key="user.name">
                    <td>
                        <span>{{user.name}}</span>
                    </td>
                    <td>
                        <span
                            :class="{'is-ready': user.state, 'not-ready': !user.state}"
                        >{{user.state ? "Ready" : "Not Ready"}}</span>
                    </td>
                    <td>
                        <a class="btn" @click="kickUser(user.name)">Kick</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <!--
        <div class="user-states" v-if="isHost">
            <div v-for="user in users" :key="user.name">
                
                
                
            </div>
        </div>
        
        <a v-if="!isHost" class="btn centered" @click.prevent="toggleReady">
            <span v-if="!waiting">{{!ready ? "Ready" : "Unready"}}</span>
            <i v-else class="fas fa-spinner fa-pulse"></i>
        </a>
        -->
        <a v-if="isHost" class="btn centered" @click.prevent="startRun">Start run</a>
        <p v-if="joined">Game status: {{ready ? "Ready" : "Not Ready"}}</p>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import { ipcRenderer, dialog } from "electron";
export default {
    name: "Home",
    mounted() {
        ipcRenderer.on("USER_ADD", (event, data) => {
            let exist = false;
            for (const user of this.users) {
                if (user.name == data.name) {
                    exist = true;
                }
            }
            if (!exist) {
                this.users.push(data);
            }
        });
        ipcRenderer.on("GAME_STATUS", (event, data) => {
            this.ready = data.state;
        });
        ipcRenderer.on("USER_REMOVE", (event, data) => {
            this.users = this.users.filter((user) => user.name != data.name);
        });
        ipcRenderer.on("USER_READYSTATE", (event, data) => {
            for (const user of this.users) {
                if (user.name == data.name) {
                    user.state = data.state;
                }
            }
        });
    },
    watch: {
        flags: {
            handler() {
                this.sendFlags();
            },
            deep: true,
        },
    },
    data() {
        return {
            flags: [
                { id: "1", u: "sync_orbs", name: "Sync Orbs", enabled: false },
                {
                    id: "2",
                    u: "can_send_gold",
                    name: "Send gold",
                    enabled: false,
                },
                {
                    id: "0",
                    u: "sync_gods_mood",
                    name: "Sync Steve",
                    enabled: false,
                },
                {
                    id: "3",
                    u: "can_send_items",
                    name: "Send flasks",
                    enabled: false,
                },

                {
                    id: "5",
                    u: "share_hp_plus",
                    name: "Sync hearts",
                    enabled: false,
                },
                {
                    id: "4",
                    u: "can_send_wands",
                    name: "Send wands",
                    enabled: false,
                },
            ],
            loggedIn: false,
            joining: false,
            joined: false,
            isHost: false,
            ready: false,
            waiting: false,
            gamemode: "6",
            gamePath: "",
            hostChannel: "",
            hostUsername: "",
            oauth: "",
            users: [],
        };
    },
    computed: {
        username() {
            return this.$store.state.username;
        },
    },
    methods: {
        async joinChannel() {
            try {
                if (this.joining) {
                    return;
                }
                if (!this.hostUsername && !this.isHost) {
                    alert("Please specify a host username to join");
                    return;
                } else if (!this.hostChannel) {
                    alert("Please specify a channel to join");
                    return;
                }
                this.joining = true;
                const host = this.isHost ? this.username : this.hostUsername;
                await this.$store.dispatch("join", {
                    channel: this.hostChannel,
                    host,
                });
                this.joining = false;
                this.joined = true;
            } catch (err) {
                alert("Failed to join, try again");
                this.joining = false;
                console.log(err);
            }
        },
        async toggleReady() {
            //unused
            if (this.waiting) {
                return;
            }
            this.waiting = true;
            await new Promise((res) => {
                const state = !this.ready; //TODO
                ipcRenderer.on("TWITCH_READYSTATE_REPLY", () => {
                    this.ready = state;
                    this.waiting = false;
                    res();
                });
                ipcRenderer.send("TWITCH_READYSTATE", { state });
            });
        },
        sendFlags() {
            const flags = this.flags.filter((v) => v.enabled).map((v) => v.id);
            flags.push(this.gamemode);

            ipcRenderer.send("GAME_FLAGS", flags);
        },
        startRun() {
            this.sendFlags();
            ipcRenderer.send("START_RUN");
        },
        kickUser(name) {
            ipcRenderer.send("TWITCH_KICK", { name });
        },
        selectGameFolder() {
            dialog
                .showOpenDialog({ properties: ["openDirectory"] })
                .then((res) => {
                    if (res.filePaths.length > 0) {
                        this.gamePath = res.filePaths[0];
                    }
                });
        },
    },
};
</script>
