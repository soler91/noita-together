<template>
  <div>
    <label class="switch">
      <input
        type="checkbox"
        :disabled="isDisabled"
        @change="updateValue"
        :checked="modelValue"
      />
      <span class="slider round"></span>
    </label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  modelValue: boolean;
  disabled?: boolean;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const isDisabled = computed(() => props.disabled ?? false);

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).checked);
};
</script>

<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  margin: 0.2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
