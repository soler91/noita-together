<template>
  <div class="footer">
    <span id="app-version">v{{ version }}</span>
    <div class="donate" @click="openKofi">
      <span>Support me on ko-fi <i class="fas fa-heart"></i></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shell, ipcRenderer } from "electron";
import { ref } from "vue";

const version = ref("");
ipcRenderer.invoke("get-version").then((v) => (version.value = v));

const kofiUrl = ref("https://ko-fi.com/soler91");
function openKofi() {
  shell.openExternal(kofiUrl.value);
}
</script>

<style>
.footer {
  display: flex;
  align-items: center;
  min-height: 32px;
  max-height: 32px;
  background-color: #2d2d2d;
}

#app-version {
  color: rgba(255, 255, 255, 0.4);
  margin-left: 0.5em;
  margin-right: auto;
}

.donate {
  cursor: pointer;
  margin-left: auto;
  margin-right: 0.5em;
}

.donate span,
.donate span > i {
  color: rgba(255, 255, 255, 0.4);
}

.donate:hover * {
  color: white;
  transform: scale(1.2, 1.2);
  transition: all 0.2s;
}
</style>
