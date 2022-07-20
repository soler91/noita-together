<template>
  <div id="app" class="wrapper">
    <vHeader :title="title" />
    <router-view />
    <vFooter />

    <vLoading v-if="loading" />
    <vErrDialog v-if="showErrDialog">
      <template v-slot:header>
        <h1>{{ errDialog.title }}</h1>
      </template>
      <template v-slot:body>
        <p>{{ errDialog.body }}</p>
      </template>
      <template v-slot:footer>
        <div class="centered">
          <vButton @click="closeErrDialog" v-if="errDialog.canClose"
            >Close</vButton
          >
          <p v-else>App needs to be restarted.</p>
        </div>
      </template>
    </vErrDialog>
  </div>
</template>

<script setup lang="ts">
import vHeader from "./components/vHeader.vue";
import vFooter from "./components/vFooter.vue";
import vLoading from "./components/vLoading.vue";
import vErrDialog from "./components/vErrDialog.vue";
import vButton from "./components/vButton.vue";
import { ref, computed } from "vue";
import useStore from "./store";
const store = useStore();

globalThis.postMessage({ payload: "removeLoading" }, "*");

const title = ref("Noita Together");
const loading = computed(() => {
  return store.state.loading;
});
const showErrDialog = computed(() => {
  return store.state.showErrDialog;
});
const errDialog = computed(() => {
  return store.state.errDialog;
});
function closeErrDialog() {
  store.commit("showErrDialog", false);
}
</script>

<style>
* {
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  font-family: Helvetica, Arial, sans-serif;
}

body {
  overflow-y: hidden;
}

.wrapper {
  display: flex;
  flex-flow: column;
  height: 100vh;
}

.content {
  display: flex;
  flex-grow: 1;
  flex-flow: column;
  background-color: #1d1d1d;
  border-left: solid 2px #2d2d2d;
  border-right: solid 2px #2d2d2d;
  padding: 0.3em 0.6em;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 32px;
}

.centered {
  margin: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
  user-select: none;
}

table td,
table th {
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.3);
}

table tr:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

table td:nth-child(1n + 0) {
  width: 60%;
}

table td:nth-child(2n + 0) {
  width: 30%;
}

table td:nth-child(3n + 0) {
  width: 10%;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #2e2e2e;
  color: rgba(255, 255, 255, 0.8);
}

::-webkit-scrollbar {
  width: 0.6em; /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: #111111; /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: #696969; /* color of the scroll thumb */
}

.slot-selector {
  font-size: 16px;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  transition: all 0.2s;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}

.slot-selector:focus {
  border-color: #aaa;
  color: #222;
  outline: none;
}

/* Set options to normal weight */
.slot-selector option {
  color: #444;
  font-weight: normal;
}

.slot-selector:disabled,
.slot-selector[aria-disabled="true"] {
  color: graytext;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
}

.slot-selector:disabled:hover,
.slot-selector[aria-disabled="true"] {
  border-color: #aaa;
}
</style>
