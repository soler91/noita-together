<template>
    <div class="content" id="room">
        <vRoomFlags v-if="showRoomFlags" @applyFlags="sendFlags" @close="closeRoomFlags" />
        <vLeaveRoom v-if="showLeaveModal" @close="closeLeaveModal" />
        <div class="room-header">
            <vButton @click="openLeaveRoom">
                <i class="fas fa-arrow-left" slot="icon"></i>
            </vButton>
            <h1>[{{ users.length }}/{{ room.maxUsers }}] {{ room.name }}</h1>
            <div class="room-edit">
                <vButton @click="lockRoom" :disabled="!isHost">
                    <i class="fas fa-lock" slot="icon" v-if="room.locked"></i>
                    <i class="fas fa-lock-open" slot="icon" v-else></i>
                </vButton>
                <vButton @click="openRoomFlags">
                    <template>
                        <i class="fas fa-edit" slot="icon" v-if="isHost"></i>
                        <i class="far fa-question-circle" slot="icon" v-else></i>
                    </template>
                </vButton>
            </div>
        </div>
        <!-- <div class="row-wrapper"> -->
        <div class="users-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>State</th>
                        <th v-if="isHost">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.userId">
                        <td>{{ user.name }}</td>
                        <td>
                            <vUserTooltip :userId="user.userId"></vUserTooltip>
                        </td>
                        <td v-if="isHost && user.userId != userId">
                            <vButton @click="kick(user.userId)" size="btn-small">
                                <i class="fas fa-times" slot="icon"></i>
                                kick
                            </vButton>
                            <vButton @click="ban(user.userId)" size="btn-small">
                                <i class="fas fa-ban" slot="icon"></i>
                                ban
                            </vButton>
                        </td>
                        <td v-else-if="isHost">
                            <vButton @click="startRun(false)" size="btn-small">Start Run</vButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="chat-wrapper">
            <div class="chatbox" @keydown="sendChat">
                <input type="text" v-model="chatMsg" placeholder="Send Message" />
            </div>
            <div class="room-chat" ref="chat">
                <template v-if="chat.length > 0">
                    <div class="chat-entry" v-for="(entry, index) in chat" :key="index">
                        <span class="chat-time">[{{ entry.time }}]</span>
                        <span class="chat-name" :style="{ color: entry.color }">{{ entry.name }}</span>
                        <span class="chat-message">{{ entry.message }}</span>
                    </div>
                </template>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>

<script>
import { ipcRenderer } from "electron"
import vButton from "@/components/vButton.vue"
import vRoomFlags from "@/components/vRoomFlags.vue"
import vLeaveRoom from "@/components/vLeaveRoom.vue"
//import vTooltip from "@/components/vTooltip.vue"
import vUserTooltip from "@/components/vUserTooltip.vue"
export default {
    components: {
        vButton,
        vRoomFlags,
        //vTooltip,
        vUserTooltip,
        vLeaveRoom
    },
    data() {
        return {
            showRoomFlags: false,
            showLeaveModal: false,
            chatMsg: "",
            lastMsg: Date.now(),
            locked: false
        }
    },
    beforeCreate() {
        const unsub = this.$store.subscribe((mutation) => {
            if (mutation.type == "resetRoom") {
                unsub()
                this.$router.replace({ path: "/lobby" })
            }
        })
    },
    created() {
        ipcRenderer.send("game_listen")
    },
    watch: {
        chat() {
            this.$nextTick(() => {
                const container = this.$refs.chat
                if (container) {
                    if (container.scrollHeight - container.scrollTop < 700) {
                        container.scrollTop = container.scrollHeight
                    }
                }
            })
        },
    },
    computed: {
        room() {
            return this.$store.state.room
        },
        flags() {
            return this.$store.state.roomFlags
        },
        chat() {
            return this.$store.state.roomChat
        },
        userId() {
            return this.$store.getters.userId
        },
        isHost() {
            return this.$store.getters.isHost
        },
        users() {
            return this.$store.state.room.users
        },
    },
    methods: {
        lockRoom() {
            this.$store.dispatch("updateRoom", { locked: !this.room.locked })
        },
        sendChat(e) {
            if (e.key != "Enter" || !this.chatMsg.trim()) {
                return
            }
            if (Date.now() - this.lastMsg < 400) {
                console.log("TOO FAST MANG")
                return
            }
            this.$store.dispatch("sendChat", { message: this.chatMsg.trim() })
            this.lastMsg = Date.now()
            this.chatMsg = ""
        },
        sendFlags(payload) {
            this.$store.commit("roomFlagsUpdated", payload)
            this.$store.dispatch("sendFlags")
            this.closeRoomFlags()
        },
        openRoomFlags() {
            this.showRoomFlags = true
        },
        closeRoomFlags() {
            this.showRoomFlags = false
        },
        openLeaveRoom() {
            this.showLeaveModal = true
        },
        closeLeaveModal() {
            this.showLeaveModal = false
        },
        kick(userId) {
            this.$store.dispatch("kickUser", { userId })
        },
        ban(userId) {
            this.$store.dispatch("banUser", { userId })
        },
        startRun(forced) {
            this.$store.dispatch("startRun", { forced })
        }
    },
}
</script>

<style>
.room-header {
    display: flex;
    width: 100%;
    height: 3em;
    margin-bottom: 0.5em;
}

.users-wrapper {
    width: 100%;
    margin-bottom: 1em;
    overflow: auto;
    overflow-x: hidden;
}

.room-header > h1 {
    padding: 0.2em;
    margin: 0;
    margin-left: auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.room-edit {
    margin-left: auto;
}

.chatbox {
    display: flex;
    width: 100%;
}

.chatbox > input {
    margin: 0;
    padding: 0.5em;
    width: 100%;
    background: transparent;
    border: none;
    background: rgb(34, 34, 34);
    transition: all 0.2s;
}

.chatbox > input:focus {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
    background: rgb(14, 14, 14);
}

.chat-wrapper {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    max-height: 40%;
    min-height: 40%;
    margin-top: auto;
}
.room-chat {
    padding: 0.5em;
    background: rgb(40, 40, 40);
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
    overflow: auto;
    overflow-x: hidden;
    height: 100%;
}

.chat-entry {
    padding-bottom: 0.5em;
}

.chat-entry:hover {
    background: rgba(58, 58, 58, 0.5);
}

.chat-entry > p {
    display: inline-block;
}

.chat-time {
    font-weight: 500;
    margin-right: 0.3em;
}

.chat-name {
    font-weight: 600;
    margin-right: 0.3em;
}
.chat-name::after {
    content: ":";
}

@media only screen and (min-width: 900px) {
    .room-header {
        flex-shrink: 0;
    }
    .chat-wrapper {
        display: flex;
        margin: 0;
        flex-direction: column-reverse;
        width: 50%;
        max-height: 90%;
        height: 90%;
        margin-left: auto;
    }

    .users-wrapper {
        width: 50%;
        max-height: 90%;
        margin-bottom: 0;
    }

    #room {
        flex-flow: row wrap;
    }
}

.user-ready {
    color: #acff2f;
}

.user-not-ready {
    color: #ff2f2f;
}

.users-wrapper table td:nth-child(1n + 0) {
    width: 50%;
}

.users-wrapper table td:nth-child(2n + 0) {
    width: 20%;
}

.users-wrapper table td:nth-child(3n + 0) {
    width: 30%;
}
</style>