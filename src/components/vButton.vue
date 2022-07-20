<template>
  <button class="btn" @click="clickM" :class="cSize">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  size?: string;
}>();

const emit = defineEmits<{
  (e: "click", value: Event): void;
}>();

const cSize = computed(() => {
  return props.size || "btn-normal";
});

function clickM(e: Event) {
  emit("click", e);
}
</script>

<style>
.btn-normal {
  font-size: 1.2em;
  padding: 0.625em 1em;
}

.btn-big {
  font-size: 1.6em;
  padding: 0.625em 1em;
}

.btn-small {
  font-size: 1em;
  padding: 0.325em 0.625em;
}

.btn {
  cursor: pointer;
  background-color: #696969;
  border: none;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.3s;
}

.btn:hover {
  background-color: #808080;
  border: none;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.9);
}

.btn:disabled {
  cursor: not-allowed;
  background-color: #a5a5a5;
}
</style>
