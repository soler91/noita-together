<template>
  <vModal>
    <template v-slot:header>
      <h1>Leave Room?</h1>
    </template>
    <template v-slot:body>
      <p v-if="isHost">
        The room will be deleted, and the item bank will be lost.
      </p>
      <p v-else>Are you sure you want to leave the room?</p>
    </template>
    <template v-slot:footer>
      <div class="centered">
        <vButton @click="leaveRoom">Leave</vButton>
        <vButton @click="close">Cancel</vButton>
      </div>
    </template>
  </vModal>
</template>

<script setup lang="ts">
import vModal from "../components/vModal.vue";
import vButton from "../components/vButton.vue";
import { ref, computed, onMounted, watch, nextTick } from "vue";
import useStore from "../store";
const store = useStore();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const isHost = computed(() => {
  return store.getters.isHost;
});

function leaveRoom() {
  store.actions.leaveRoom();
}
function close() {
  emit("close");
}
</script>

<style></style>
