<template>
  <vModal>
    <template v-slot:header>
      <h1>Game not found</h1>
    </template>
    <template v-slot:body>
      <p>Please select the game folder where noita.exe is located</p>
      <div class="game-path">
        <vInput v-model="nothing" :label="gamePath" :disabled="true" />
        <vButton @click="browseDialog"> browse </vButton>
      </div>
    </template>
    <template v-slot:footer>
      <div class="centered">
        <vButton @click="setPath" :disabled="!canUpdate">Update</vButton>
      </div>
    </template>
  </vModal>
</template>

<script setup lang="ts">
import vModal from "../components/vModal.vue";
import vButton from "../components/vButton.vue";
import vInput from "../components/vInput.vue";
import { ipcRenderer } from "electron";
import path from "path";
import fs from "fs";
import { ref, computed } from "vue";

const emit = defineEmits<{
  (e: "setPath", value: string): void;
}>();

const nothing = ref("");
const gamePath = ref("game path");
const canUpdate = ref(false);

function setPath() {
  emit("setPath", gamePath.value);
}

function browseDialog() {
  ipcRenderer.invoke("open-directory-dialog").then((res) => {
    if (res.filePaths.length > 0) {
      const gamePathX = res.filePaths.shift();
      if (fs.existsSync(path.join(gamePathX, "/noita.exe"))) {
        gamePath.value = gamePathX;
        canUpdate.value = true;
      } else {
        canUpdate.value = false;
        gamePath.value = "Noita.exe not found";
      }
    } else {
      canUpdate.value = false;
      gamePath.value = "No folder selected(?)";
    }
  });
}
</script>

<style>
.game-path {
  width: 100%;
  display: flex;
}

.game-path .labeled-input {
  width: 90%;
  margin-top: auto;
  padding: 0;
  margin-right: 0;
}
</style>
