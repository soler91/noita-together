<template>
  <div class="content">
    <vGamePath v-if="showPathModal" @setPath="setPathAndUpdate"></vGamePath>
    <div class="update-log">
      <div>
        <p v-for="(msg, index) in logs" :key="index">{{ msg }}</p>
      </div>
    </div>
    <vButton :disabled="!success" @click="continueLogin">Continue</vButton>
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from "electron";
import vButton from "../components/vButton.vue";
import vGamePath from "../components/vGamePath.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const logs = ref<string[]>([]);
const success = ref(false);
const showPathModal = ref(false);

ipcRenderer.on("update_log", (event, data) => {
  logs.value.push(data);
});

ipcRenderer.once("update_done", (event, data) => {
  success.value = data;
});

ipcRenderer.on("GAME_PATH_NOT_FOUND", () => {
  showPathModal.value = true;
});

onMounted(() => {
  ipcRenderer.send("update_mod");
});

function continueLogin() {
  router.replace({ path: "/login" });
}
function setPathAndUpdate(path: string) {
  showPathModal.value = false;
  ipcRenderer.send("update_mod", path);
}
</script>

<style>
.update-log {
  min-height: 90%;
  max-height: 90%;
  overflow: auto;
  overflow-x: hidden;
}
.update-log > p {
  margin: 0.4em 0;
}
</style>
