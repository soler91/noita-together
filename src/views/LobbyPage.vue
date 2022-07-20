<template>
  <div class="content">
    <vRoomCreation
      v-if="showRoomCreation"
      @createRoom="createRoom"
      @close="closeCreationModal"
    />
    <vRoomPassword
      v-if="showPasswordModal"
      :id="clickedRoom"
      @join="joinRoom"
      @close="closePasswordModal"
    />
    <div class="lobby-header">
      <h1>Rooms</h1>
      <div class="lobby-controls">
        <vInput v-model="roomFilter" label="filter" />
        <div>
          <vButton @click="openRoomCreation">
            <template v-slot:icon>
              <i class="fas fa-plus-square"></i>
            </template>
            Create
          </vButton>
          <vButton @click="refreshRooms">
            <template v-slot:icon>
              <i class="fas fa-spinner fa-spin fa-pulse" v-if="refreshing"></i>
              <i class="fas fa-sync" v-else></i>
            </template>
            Refresh
          </vButton>
        </div>
      </div>
    </div>

    <div class="lobbies-wrapper scroll-y">
      <table class="lobbies">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Mode</th>
            <th>Users</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="rooms.length == 0">
            <td id="no-rooms" colspan="4">No rooms</td>
          </tr>
          <tr
            v-else
            v-for="room in filteredRooms"
            :key="room.id"
            @dblclick="joinRoom(room.id, room.protected)"
          >
            <td>
              <i class="fas fa-ban" v-if="room.locked"> </i>
              <i class="fas fa-lock" v-if="room.protected"> </i>
              <span>{{ room.name }}</span>
            </td>
            <td>{{ room.owner }}</td>
            <td>{{ gamemode(room.gamemode) }}</td>
            <td>{{ room.curUsers }}/{{ room.maxUsers }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import vButton from "../components/vButton.vue";
import vInput from "../components/vInput.vue";
import vRoomCreation from "../components/vRoomCreation.vue";
import vRoomPassword from "../components/vRoomPassword.vue";
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import useStore from "../store";
const store = useStore();
const router = useRouter();
const showPasswordModal = ref(false);
const showRoomCreation = ref(false);
const refreshing = ref(false);
const clickedRoom = ref("");
const roomFilter = ref("");

try {
  watch(
    () => store.state.room.id,
    (id) => {
      if (id) {
        router.replace({ path: "/room" });
      }
    }
  );
  store.dispatch("requestRooms", undefined);
} catch (error) {
  console.log(error);
}

const rooms = computed(() => {
  return store.state.lobbies;
});

const filteredRooms = computed(() => {
  const filterKey = roomFilter.value && roomFilter.value.toLowerCase();
  return rooms.value.filter((room) => {
    return (
      room.name.toLowerCase().includes(filterKey) ||
      room.owner.toLowerCase().includes(filterKey)
    );
  });
});

function openRoomCreation() {
  showRoomCreation.value = true;
}
function closeCreationModal() {
  showRoomCreation.value = false;
}
function openPasswordModal() {
  showPasswordModal.value = true;
}
function closePasswordModal() {
  showPasswordModal.value = false;
}

function joinRoom(id, password) {
  if (typeof password == "boolean" && password) {
    clickedRoom.value = id;
    openPasswordModal();
    return;
  }
  try {
    store.dispatch("joinRoom", {
      id,
      password: password ? password : undefined,
    });
  } catch (error) {
    console.log(error);
  }
}
function gamemode(id) {
  return store.state.gamemodes[id];
}
function createRoom(payload) {
  store.dispatch("createRoom", payload);
}
function refreshRooms() {
  refreshing.value = true;
  try {
    const stopHandle = watch(
      () => store.state.lobbies,
      () => {
        refreshing.value = false;
        stopHandle();
      }
    );

    store.dispatch("requestRooms", undefined);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style>
.lobby-header {
  display: flex;
  align-items: center;
}

.lobby-controls {
  display: flex;
  flex-flow: row wrap;
  margin-left: auto;
}

.lobby-controls .labeled-input {
  min-width: 20%;
  margin-top: auto;
  padding-bottom: 0;
  margin-right: 0;
}

.lobbies-wrapper {
  max-height: 90%;
}

.lobbies-wrapper > thead {
  position: sticky;
}

#no-rooms {
  width: 100%;
  text-align: center;
}

.lobbies-wrapper table td:nth-child(1n + 0) {
  width: 50%;
}

.lobbies-wrapper table td:nth-child(2n + 0) {
  width: 25%;
}

.lobbies-wrapper table td:nth-child(3n + 0) {
  width: 25%;
}
</style>
