<template>
  <vModal>
    <template v-slot:header>
      <h1>Create Room</h1>
    </template>
    <template v-slot:body>
      <select class="slot-selector" v-model="toCreate.gamemode">
        <option>Co-op</option>
        <option>Nemesis PROTOTYPE</option>
      </select>
      <select class="slot-selector" v-model="toCreate.maxUsers">
        <option v-for="(slot, index) in slots" :key="index">
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
import useStore from "../store";
const store = useStore();

const emit = defineEmits<{
  (e: "createRoom", value: any): void;
  (e: "close"): void;
}>();

const canCreate = ref(true);
const toCreate = ref({
  name: "",
  gamemode: "Co-op",
  password: "",
  maxUsers: "5 slots",
});
const userExtra = computed(() => {
  return store.getters.userExtra;
});
const slots = computed(() => {
  const slots = [5, 10, 15, 20, 25, 30];
  if (userExtra.value > 1) {
    return slots.concat([45, 60, 75, 90]);
  }
  return slots;
});
function createRoom() {
  const payload = { ...toCreate.value };
  let maxUsers = payload.maxUsers.split(" ")[0];
  payload.maxUsers = Number(maxUsers);
  if (!payload.name) {
    payload.name = "eeeeeee";
  }
  if (payload.gamemode == "Co-op") {
    payload.gamemode = 0;
  }
  if (payload.gamemode == "Nemesis PROTOTYPE") {
    payload.gamemode = 2;
  }
  emit("createRoom", payload);
}
function close() {
  toCreate.value = {
    name: "",
    gamemode: 0,
    password: "",
    maxUsers: "5 slots",
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
