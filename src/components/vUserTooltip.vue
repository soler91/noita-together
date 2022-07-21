<template>
  <div class="info-wrapper" v-if="user">
    <!-- TODO show personal alert for user -->
    <Popper :hover="true" :interactive="true" class="info">
      <div>
        <span :class="user.ready ? 'user-ready' : 'user-not-ready'">
          <i
            v-if="host.ready && user.ready && matchHost.length > 0"
            class="fas fa-exclamation-triangle"
          ></i>
          {{ user.ready ? "Ready" : "Not Ready" }}
        </span>
      </div>
      <template #content>
        <div>
          <div v-if="user.ready">
            <template v-if="host.ready && matchHost.length > 0">
              <p v-for="entry in matchHost" :key="entry">{{ entry }}</p>
            </template>
            <p>Seed: {{ user.seed }}</p>
            <p>Branch: {{ branch }}</p>
            <p>Mod version: {{ version }}</p>
            <p>Mods:</p>
            <p v-for="mod in user.mods" :key="mod">{{ mod }}</p>
          </div>
          <div v-else>
            <p>
              Waiting for game (make sure noita-together mod is enabled in
              game)...
            </p>
          </div>
        </div>
      </template>
    </Popper>
  </div>
</template>

<script setup lang="ts">
import Popper from "vue3-popper";
import { ref, computed, onMounted, onUnmounted } from "vue";
import useStore from "../store";
const store = useStore();

const props = defineProps<{
  userId: string;
}>();

const user = computed(() => {
  const users = store.state.room.users;
  let found = undefined;
  for (const user of users) {
    if (user.userId == props.userId) {
      found = user;
    }
  }
  return found;
});
const isHost = computed(() => {
  return store.getters.isHost;
});
const mode = computed(() => {
  return store.getters.roomGamemode;
});
const seed = computed(() => {
  const flags = store.getters.flags;
  let seed = 0;
  for (const flag of flags) {
    if (flag.id == "sync_world_seed") {
      seed = flag.value;
    }
  }
  return seed;
});
const host = computed(() => {
  const users = store.state.room.users;
  let host = {};
  for (const user of users) {
    if (user.owner) {
      host = user;
    }
  }
  return host;
});
const mods = computed(() => {
  let list = user.value.mods || [];
  return list;
});
const version = computed(() => {
  return user.value.version || "too old";
});
const branch = computed(() => {
  return user.value.beta ? "Beta" : "Main";
});
const matchHost = computed(() => {
  const messages = [];
  const msg = isHost.value ? "hostMsg" : "userMsg";
  for (const key in errorMessages) {
    if (key == "seed") {
      continue;
    }
    if (user.value[key] != host.value[key]) {
      messages.push(errorMessages[key][msg]);
    }
  }
  if (seed.value > 0 && host.value.seed != user.value.seed) {
    messages.push(errorMessages.seed[msg]);
  }
  if (mode.value == 2) {
    let found = false;
    let order = false;
    for (const mod of mods.value) {
      if (mod == "noita-nemesis") {
        found = true;
      }
      if (found && mod == "noita-together") {
        order = true;
      }
    }

    if (!found) {
      messages.push(errorMessages.nemesis_notfound[msg]);
    }
    if (!order) {
      messages.push(errorMessages.nemesis_order[msg]);
    }
  }
  return messages;
});

const errorMessages = {
  version: {
    hostMsg: "User is not on the same mod version.",
    userMsg: "You are not in the samge game branch as the host.",
  },
  beta: {
    hostMsg: "User is not in the same game branch.",
    userMsg: "You are not in the same game branch as the host.",
  },
  seed: {
    hostMsg: "User is not in the same seed.",
    userMsg: "You are not in the same seed as the host.",
  },
  nemesis_notfound: {
    hostMsg: "noita-nemesis mod needs to be enabled",
    userMsg: "noita-nemesis mod needs to be enabled",
  },
  nemesis_order: {
    hostMsg:
      "noita-nemesis needs to be above noita-together in the game's mod list order",
    userMsg:
      "noita-nemesis needs to be above noita-together in the game's mod list order",
  },
};
</script>

<style>
.info {
  --popper-theme-background-color: #0e0e0e;
  --popper-theme-text-color: rgba(255, 255, 255, 0.8);
}
</style>
