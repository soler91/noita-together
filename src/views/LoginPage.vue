<template>
  <div class="content">
    <div
      class="twitch-login"
      :class="{ hax: !savedUser }"
      @click="openLoginPage"
    >
      <div class="twitch-logo">
        <i class="fas fa-spinner fa-spin fa-pulse" v-if="clicked"></i>
        <i class="fab fa-twitch" v-else></i>
      </div>
      <span class="twitch-login-text">Login with Twitch.tv</span>
    </div>
    <div class="remember-login">
      <input
        id="remember-user"
        type="checkbox"
        v-model="rememberUser"
        name="remember-user"
      />
      <label for="remember-user">Remember me</label>
    </div>

    <div
      class="twitch-login remembered-login"
      @click="continueSavedUser"
      v-if="savedUser"
    >
      <div class="twitch-logo">
        <i class="fab fa-twitch"></i>
      </div>
      <span class="twitch-login-text">Continue as {{ savedUserName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from "electron";
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import useStore from "../store";
const router = useRouter();
const store = useStore();
const rememberUser = ref(false);
const clicked = ref(false);

watch(
  () => store.state.user.id,
  (id) => {
    if (id > 0) {
      clicked.value = false;
      router.replace({ path: "/lobby" });
      store.commit("setLoading", false);
    }
  }
);

const savedUser = computed(() => {
  return store.state.savedUser;
});
const savedUserName = computed(() => {
  return store.state.savedUserName;
});
function openLoginPage() {
  clicked.value = true;
  ipcRenderer.send("open-login-twitch");
}
function continueSavedUser() {
  store.dispatch("continueSavedUser", undefined);
}

watch(rememberUser, (newVal) => {
  ipcRenderer.send("remember_user", newVal);
});
</script>

<style>
.twitch-login.hax {
  margin-top: 40vh;
}
.twitch-login.remembered-login {
  margin-top: auto;
  align-self: stretch;
}

.twitch-login {
  display: flex;
  min-width: 300px;
  background-color: #6441a5;
  margin-top: auto;
  align-self: center;
  cursor: pointer;
}

.twitch-login:hover {
  background-color: #503484;
}

.twitch-login > div > i {
  font-size: 1.5rem;
}

.twitch-logo {
  padding: 1rem;
  background-color: #503484;
}

.twitch-login-text {
  margin: auto;
  align-self: center;
}

.remember-login {
  padding: 0.5rem;
  align-self: center;
}
</style>
