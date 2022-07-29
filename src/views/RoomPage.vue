<template>
  <div class="content" id="room">
    <vRoomFlags
      v-if="showRoomFlags"
      @applyFlags="sendFlags"
      @close="closeRoomFlags"
    />
    <vLeaveRoom v-if="showLeaveModal" @close="closeLeaveModal" />
    <div class="room-header">
      <vButton @click="openLeaveRoom">
        <template v-slot:icon>
          <i class="fas fa-arrow-left"></i>
        </template>
      </vButton>
      <h1>[{{ users.length }}/{{ room.maxUsers }}]{{ room.name }}</h1>
      <div class="room-edit">
        <vButton @click="saveGame" :disabled="!isHost">
          <template v-slot:icon>
            <i class="fa-solid fa-floppy-disk"></i>
          </template>
        </vButton>
        <vButton @click="lockRoom" :disabled="!isHost">
          <template v-slot:icon>
            <i class="fas fa-lock" v-if="room.locked"></i>
            <i class="fas fa-lock-open" v-else></i>
          </template>
        </vButton>
        <vButton @click="openRoomFlags">
          <template v-slot:icon>
            <i class="fas fa-edit" v-if="isHost"></i>
            <i class="far fa-question-circle" v-else></i>
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
                <template v-slot:icon>
                  <i class="fas fa-times"></i>
                </template>
                kick
              </vButton>
              <vButton @click="ban(user.userId)" size="btn-small">
                <template v-slot:icon>
                  <i class="fas fa-ban"></i>
                </template>
                ban
              </vButton>
            </td>
            <td v-else-if="isHost">
              <vButton @click="startRun(false)" size="btn-small"
                >Start Run</vButton
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="chat-wrapper">
      <div class="chatbox" @keydown="sendChat">
        <input type="text" v-model="chatMsg" placeholder="Send Message" />
      </div>
      <div class="room-chat" ref="chatElement">
        <template v-if="chat.length > 0">
          <div class="chat-entry" v-for="(entry, index) in chat" :key="index">
            <span class="chat-time">[{{ entry.time }}]</span>
            <span class="chat-name" :style="{ color: entry.color }">{{
              entry.name
            }}</span>
            <span class="chat-message">{{ entry.message }}</span>
          </div>
        </template>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from "electron";
import vButton from "../components/vButton.vue";
import vRoomFlags from "../components/vRoomFlags.vue";
import vLeaveRoom from "../components/vLeaveRoom.vue";
import vUserTooltip from "../components/vUserTooltip.vue";
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import useStore, { type GameFlag } from "../store";
import { ipc } from "../ipc-renderer";
const router = useRouter();
const store = useStore();

const showRoomFlags = ref(false);
const showLeaveModal = ref(false);
const chatMsg = ref("");
const lastMsg = ref(Date.now());

watch(
  () => store.state.room.id,
  (id) => {
    if (!id) {
      router.replace({ path: "/lobby" });
    }
  }
);
onMounted(() => {
  ipcRenderer.send("game_listen");
});

const room = computed(() => {
  return store.state.room;
});
const chat = computed(() => {
  return store.state.roomChat;
});
const userId = computed(() => {
  return store.getters.userId;
});
const isHost = computed(() => {
  return store.getters.isHost;
});
const users = computed(() => {
  return store.state.room.users;
});

const chatElement = ref();
watch(chat, (chat) => {
  nextTick(() => {
    if (chatElement.value) {
      if (chatElement.value.scrollHeight - chatElement.value.scrollTop < 700) {
        chatElement.value.scrollTop = chatElement.value.scrollHeight;
      }
    }
  });
});
function lockRoom() {
  store.actions.updateRoom({
    locked: !room.value.locked,
  });
}
async function saveGame() {
  const gameSave = await ipc.callMain("saveGame")();
  if (gameSave.success) {
    store.dispatch("sendChat", { message: "Game saved" });
  } else {
    store.dispatch("sendChat", { message: "Game save failed" });
  }
}
function sendChat(e: KeyboardEvent) {
  if (e.key != "Enter" || !chatMsg.value.trim()) {
    return;
  }
  if (Date.now() - lastMsg.value < 400) {
    console.log("TOO FAST MANG");
    return;
  }
  store.dispatch("sendChat", { message: chatMsg.value.trim() });
  lastMsg.value = Date.now();
  chatMsg.value = "";
}
function sendFlags(payload: GameFlag[]) {
  store.actions.updateRoomFlags(payload);
  store.actions.sendFlags();
  closeRoomFlags();
}
function openRoomFlags() {
  showRoomFlags.value = true;
}
function closeRoomFlags() {
  showRoomFlags.value = false;
}
function openLeaveRoom() {
  showLeaveModal.value = true;
}
function closeLeaveModal() {
  showLeaveModal.value = false;
}
function kick(userId: string) {
  store.actions.kickUser({
    userId,
  });
}
function ban(userId: string) {
  store.actions.banUser({
    userId,
  });
}
function startRun(forced: boolean) {
  store.actions.startRun({
    forced,
  });
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
