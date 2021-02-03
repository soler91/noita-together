<template>
    <div class="content">
        <div class="scroll-y">
            <p v-for="(msg, index) in logs" :key="index">{{ msg }}</p>
        </div>
    </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
    data() {
        return {
            logs: [],
        };
    },
    beforeCreate() {
        ipcRenderer.on("update_log", (event, data) => {
            this.logs.push(data);
        });

        ipcRenderer.once("update_done", () => {
            setTimeout(() => {
                this.$router.replace({path: "/login"})
            }, 1000);
        });
    },
};
</script>

<style>
</style>