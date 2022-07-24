<template>
  <vModal>
    <template v-slot:header>
      <h1>Game Options</h1>
    </template>
    <template v-slot:body>
      <div class="flags-body">
        <h2>
          Death Penalty
          <Popper :content="deathTooltip" :hover="true" :interactive="true">
            <i class="far fa-question-circle"></i>
          </Popper>
        </h2>
        <select class="slot-selector" :disabled="!isHost" v-model="deathFlagId">
          <option
            v-for="option in payload.death"
            :key="option.id"
            :value="option.id"
          >
            {{ option.name }}
          </option>
        </select>

        <h2>Run Options</h2>
        <div class="switches">
          <vSwitch
            v-for="entry in payload.game"
            :key="entry.id"
            v-model="payload.game[entry.id].value"
            :disabled="!isHost"
          >
            <span>{{ entry.name }}</span>
            <Popper :content="entry.tooltip" :hover="true" :interactive="true">
              <i class="far fa-question-circle"></i>
            </Popper>
          </vSwitch>
        </div>

        <h2>
          World seed
          <Popper
            :content="payload.world.sync_world_seed.tooltip"
            :hover="true"
            :interactive="true"
          >
            <i class="far fa-question-circle"></i>
          </Popper>
        </h2>
        <div class="world-seed">
          {{ payload?.world }}
          <vInput v-model="payload.world.sync_world_seed.value"></vInput>
          <vButton @click="randomizeSeed">Random</vButton>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="centered">
        <vButton @click="applyFlags">Apply</vButton>
        <vButton @click="close">Cancel</vButton>
      </div>
    </template>
  </vModal>
</template>

<script setup lang="ts">
import vSwitch from "../components/vSwitch.vue";
import vModal from "../components/vModal.vue";
import vButton from "../components/vButton.vue";
import Popper from "vue3-popper";
import vInput from "../components/vInput.vue";
import { ref, computed } from "vue";
import useStore, { type GameFlag } from "../store";
const store = useStore();

const emit = defineEmits<{
  (e: "applyFlags", value: GameFlag[]): void;
  (e: "close"): void;
}>();

const flagValues = ref(new Map<string, GameFlag>());

const deathFlagId = ref("");

const isHost = computed(() => {
  return store.getters.isHost;
});

const defaultFlags = computed(() => store.defaultFlags);

const payload = ref(getFlags());

function getFlags() {
  const flags = store.roomFlags;
  const game = {};
  const world = {};
  const death = {};
  for (const flag of flags) {
    if (flag.id.startsWith("death_penalty")) {
      death[flag.id] = { ...flag };
    } else if (flag.id == "sync_world_seed") {
      world[flag.id] = { ...flag };
    } else {
      game[flag.id] = { ...flag };
    }
  }
  return { game, death, world };
}
const deathTooltip = computed(() => {
  const deathFlags = payload.value.death;
  return deathFlags[deathFlagId.value]?.tooltip ?? "";
});

deathFlagId.value = store.roomFlags.find(
  (v) => v.id.startsWith("death_penalty") && v.value
).id;

function applyFlags() {
  const allFlags = payload.value;
  const flagsPayload = [];

  flagsPayload.push({ flag: deathFlagId.value });

  for (const flagId in allFlags.game) {
    if (
      allFlags.game[flagId].type == "boolean" &&
      allFlags.game[flagId].value
    ) {
      flagsPayload.push({ flag: allFlags.game[flagId].id });
    }
  }
  for (const flag in allFlags.world) {
    let val = Number(allFlags.world[flag].value);
    if (isNaN(val)) {
      val = 0;
    }
    flagsPayload.push({
      flag: allFlags.world[flag].id,
      value: Math.min(val, 4294967295),
    });
  }
  //console.log({ flags: payload })
  emit("applyFlags", { flags: flagsPayload });
}

function randomizeSeed() {
  const seed = Math.floor(Math.random() * 4294967295) + 1;
  payload.value.world.sync_world_seed.value = seed;
}
function close() {
  emit("close");
}
</script>

<style>
.flags-body {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}

.switches {
  display: flex;
  flex-flow: row wrap;
}

.switches > div {
  padding: 0.2em;
  min-width: 180px;
}

.world-seed {
  display: flex;
  width: 100%;
}

.world-seed .labeled-input {
  margin-top: auto;
  padding-bottom: 0;
  margin-right: 0;
}
</style>
