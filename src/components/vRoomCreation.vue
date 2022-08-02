<template>
  <vModal>
    <template v-slot:header>
      <h1 v-if="loadSavedRoom">Load Saved Room</h1>
      <h1 v-else>Create Room</h1>
    </template>
    <template v-slot:body>
      <select class="slot-selector" v-model="loadSavedRoom">
        <option :value="false">New Room</option>
        <option :value="true">Load Saved</option>
      </select>

      <div v-if="loadSavedRoom">
        <select class="slot-selector" v-model="savedRoomId">
          <option v-for="room in savedRooms" :value="room.id" :key="room.id">
            <span v-if="room.name">{{ room.name }}</span>
            <span v-else>Missing room name</span>
            -
            {{ new Date(room.timestamp).toISOString() }}
          </option>
        </select>
      </div>
      <div v-else>
        <select class="slot-selector" v-model="toCreate.gamemode">
          <option :value="'coop'">Co-op</option>
          <option :value="'nemesis'">Nemesis PROTOTYPE</option>
        </select>
      </div>
      <select class="slot-selector" v-model="toCreate.maxUsers">
        <option v-for="slot in roomSizes" :key="slot" :value="slot">
          {{ slot }} slots
        </option>
      </select>
      <vInput
        v-if="userExtra > 0"
        v-model="toCreate.name"
        label="room name"
        :validate="validateLength"
        @valid="isValid"
      />
      <vInput v-model="toCreate.password" label="room password" />
    </template>
    <template v-slot:footer>
      <div class="centered">
        <vButton @click="createRoom" :disabled="!canCreate">Create</vButton>
        <vButton @click="close">Cancel</vButton>
      </div>
    </template>
  </vModal>
</template>

<script setup lang="ts">
import vModal from "../components/vModal.vue";
import vButton from "../components/vButton.vue";
import vInput from "../components/vInput.vue";
import { ref, computed } from "vue";
import useStore, { GamemodeToId } from "../store";
import NT from "../messages";
import { ipc } from "../ipc-renderer";
import type { Gamemode } from "../../electron/main/database";
const store = useStore();

const emit = defineEmits<{
  (e: "createRoom", value: NT.IClientRoomCreate): void;
  (
    e: "loadRoom",
    value: {
      id: string;
      room: NT.IClientRoomCreate;
    }
  ): void;
  (e: "close"): void;
}>();

const loadSavedRoom = ref(false);
const savedRoomId = ref<string | null>(null);
const savedRooms = ref<
  { id: string; name: string; gamemode: Gamemode; timestamp: number }[]
>([]);

ipc
  .callMain("getGameSaves")()
  .then((saves) => {
    savedRooms.value = saves;
  });

const canCreate = ref(true);
const toCreate = ref({
  name: "",
  gamemode: "coop" as Gamemode,
  password: "",
  maxUsers: 5,
});
const userExtra = computed(() => {
  return store.getters.userExtra;
});
const roomSizes = computed(() => {
  const sizes = [5, 10, 15, 20, 25, 30];
  if (userExtra.value > 1) {
    return sizes.concat([45, 60, 75, 90]);
  }
  return sizes;
});
function createRoom() {
  if (loadSavedRoom.value) {
    if (savedRoomId.value === null) {
      return;
    }

    const payload = {
      ...toCreate.value,
      gamemode:
        GamemodeToId[
          savedRooms.value.find((r) => r.id === savedRoomId.value)?.gamemode ??
            "coop"
        ],
    };

    if (!payload.name) {
      payload.name = "missing room name";
    }
    emit("loadRoom", {
      id: savedRoomId.value,
      room: payload,
    });
  } else {
    const payload = {
      ...toCreate.value,
      gamemode: GamemodeToId[toCreate.value.gamemode],
    };
    if (!payload.name) {
      payload.name = "missing room name";
    }
    emit("createRoom", payload);
  }
}
function close() {
  toCreate.value = {
    name: "",
    gamemode: "coop",
    password: "",
    maxUsers: 5,
  };
  emit("close");
}
function validateLength(e) {
  if (e.length && e.length > 32) {
    return "length should be less than 32 characters.";
  }
  return true;
}
function isValid(val) {
  canCreate.value = val;
}
</script>

<style></style>
