<template>
  <vModal>
    <template v-slot:header>
      <h1>Game Options</h1>
    </template>
    <template v-slot:body>
      <div class="flags-body">
        <h2>
          Death Penalty
          <Popper
            :content="defaultModeFlags.get(deathFlagId)?.tooltip"
            :hover="true"
            :interactive="true"
          >
            <i class="far fa-question-circle"></i>
          </Popper>
        </h2>
        <select class="slot-selector" :disabled="!isHost" v-model="deathFlagId">
          <option
            v-for="flagId in deathFlagCategory"
            :key="flagId"
            :value="flagId"
          >
            {{ defaultModeFlags.get(flagId)?.name ?? "Unknown" }}
          </option>
        </select>

        <h2>Run Options</h2>
        <div class="switches">
          <vSwitch
            v-for="flagId in gameFlagCategory"
            :key="flagId"
            :modelValue="!!flagValues.get(flagId)?.value"
            @update:modelValue="
              (value) =>
                flagValues.set(flagId, {
                  id: flagId,
                  type: 'boolean',
                  value: value,
                })
            "
            :disabled="!isHost"
          >
            <span>{{ defaultModeFlags.get(flagId)?.name ?? flagId }}</span>
            <Popper
              :content="defaultModeFlags.get(flagId)?.tooltip"
              :hover="true"
              :interactive="true"
            >
              <i class="far fa-question-circle"></i>
            </Popper>
          </vSwitch>
        </div>

        <h2>
          World seed
          <Popper
            :content="defaultModeFlags.get(seedFlagId)?.tooltip"
            :hover="true"
            :interactive="true"
          >
            <i class="far fa-question-circle"></i>
          </Popper>
        </h2>
        <div class="world-seed">
          <vInput
            type="number"
            :modelValue="(flagValues.get(seedFlagId)?.value as number ?? 0)"
            @update:modelValue="
              (value) =>
                flagValues.set(seedFlagId, {
                  id: seedFlagId,
                  type: 'number',
                  value: +value,
                })
            "
          ></vInput>
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
import useStore, { Gamemode, type GameFlag } from "../store";
const store = useStore();

const emit = defineEmits<{
  (e: "applyFlags", value: GameFlag[]): void;
  (e: "close"): void;
}>();

const flagValues = ref(
  new Map<string, GameFlag>(
    store.roomFlags.map((flag) => [flag.id, { ...flag }])
  )
);

const isHost = computed(() => {
  return store.getters.isHost;
});

const defaultModeFlags = computed(
  () =>
    new Map(
      store.defaultFlags[store.state.room.gamemode as Gamemode].map((flag) => [
        flag.id,
        flag,
      ])
    )
);

const seedFlagId = computed(() => "sync_world_seed");
const deathFlagCategory = computed(() =>
  store.roomFlags
    .filter((flag) => flag.id.startsWith("death_penalty"))
    .map((flag) => flag.id)
);
const gameFlagCategory = computed(() =>
  store.roomFlags
    .filter(
      (flag) =>
        flag.id !== seedFlagId.value &&
        !deathFlagCategory.value.includes(flag.id)
    )
    .map((flag) => flag.id)
);

const deathFlagId = ref(
  store.roomFlags.find(
    (flag) => deathFlagCategory.value.includes(flag.id) && flag.value
  )?.id ?? ""
);

function applyFlags() {
  emit("applyFlags", [...flagValues.value.values()]);
}

function randomizeSeed() {
  const seed = Math.floor(Math.random() * 4294967295) + 1;
  flagValues.value.set(seedFlagId.value, {
    id: seedFlagId.value,
    type: "number",
    value: seed,
  });
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
