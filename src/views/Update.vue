<template>
    <div class="content">
        <div class="update-log">
            <div>
                <p v-for="(msg, index) in logs" :key="index">{{ msg }}</p>
            </div>
        </div>
        <vButton :disabled="!success" @click="ContinueLogin">Continue</vButton>
    </div>
</template>

<script>
import { ipcRenderer } from "electron";
import vButton from "@/components/vButton.vue";
export default {
    components: { vButton },
    data() {
        return {
            logs: [],
            success: false,
        };
    },
    beforeCreate() {
        ipcRenderer.on("update_log", (event, data) => {
            this.logs.push(data);
        });

        ipcRenderer.once("update_done", (event, data) => {
            this.success = data;
        });
    },
    created() {
        ipcRenderer.send("update_mod")
    },
    methods: {
        ContinueLogin() {
            this.$router.replace({ path: "/login" });
        },
    },
};
</script>

<style>
.update-log {
    min-height: 90%;
    max-height: 90%;
    overflow: auto;
    overflow-x: hidden;
}
.update-log > p {
    margin: 0.4em 0;
}
</style>