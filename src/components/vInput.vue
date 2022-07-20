<template>
  <div class="labeled-input">
    <input
      placeholder="idk"
      :type="inputType"
      @input="handleInput"
      :value="modelValue"
      :disabled="isDisabled"
    />
    <label v-if="label">{{ label }}</label>
    <span v-if="errMsg" class="input-validation-err">{{ errMsg }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  modelValue: string | number;
  type?: "text" | "password" | "number";
  disabled?: boolean;
  validate?: (value: string | number) => boolean | string;
  label?: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
  (e: "valid", value: boolean): void;
}>();

const isDisabled = computed(() => props.disabled ?? false);

const errMsg = ref("");

const inputType = computed(() => {
  return props.type || "text";
});

function handleInput(ev: Event) {
  const content = (ev.target as HTMLInputElement).value;
  if (typeof props.validate == "function") {
    const validated = props?.validate?.(content);
    if (typeof validated == "string") {
      errMsg.value = validated;
      emit("valid", false);
      return;
    }
  }
  emit("valid", true);
  emit("update:modelValue", content);
  errMsg.value = "";
}
</script>

<style>
.labeled-input {
  display: flex;
  position: relative;
  padding: 1em 0;
  min-width: 15em;
  margin-right: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.labeled-input > label {
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  pointer-events: none;
  transform-origin: left bottom;
  transform: translate(0, 0.3em);
  transition: all 0.2s;
}

.labeled-input > input {
  width: 100%;
  display: block;
  border: none;
  border-bottom: solid 1px rgba(255, 255, 255, 0.3);
  -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: transparent;
}

.labeled-input > input::placeholder {
  color: transparent;
}

.labeled-input > input:focus {
  box-shadow: none;
  outline: none;
  background-position: 0 0;
  border-bottom: solid 1px white;
}

.labeled-input > input:focus + label {
  color: white;
  transform: translate(0, -1em) scale(0.7);
}

.labeled-input > input:not(:placeholder-shown) + label {
  color: white;
  transform: translate(0, -1em) scale(0.7);
}

.labeled-input > .input-validation-err {
  color: tomato;
  position: absolute;
  transform: translate(0, 1.8em);
  font-size: 0.8em;
  transition: all 0.2s;
}
</style>
