<template>
  <vModal>
    <template v-slot:header>
      <h1>Room Password</h1>
    </template>
    <template v-slot:body>
      <vInput v-model="password" label="room password" />
    </template>
    <template v-slot:footer>
      <div class="centered">
        <vButton @click="join">Join</vButton>
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

const props = defineProps<{
  id: string;
}>();

const emit = defineEmits<{
  (e: "join", id: string, password: string): void;
  (e: "close"): void;
}>();

const password = ref("");

function join() {
  emit("join", props.id, password.value);
}
function close() {
  password.value = "";
  emit("close");
}
</script>

<style></style>
