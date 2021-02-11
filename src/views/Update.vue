<template>
    <div class="content">
        <vGamePath v-if="showPathModal" @setPath="setPathAndUpdate"></vGamePath>
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
import vGamePath from "@/components/vGamePath.vue";
export default {
    components: { vButton, vGamePath},
    data() {
        return {
            logs: [],
            success: false,
            showPathModal: false
        };
    },
    beforeCreate() {
        ipcRenderer.on("update_log", (event, data) => {
            this.logs.push(data);
        });

        ipcRenderer.once("update_done", (event, data) => {
            this.success = data;
        });

        ipcRenderer.on("GAME_PATH_NOT_FOUND", () => {
            this.showPathModal = true
        })
    },
    created() {
        ipcRenderer.send("update_mod")
    },
    methods: {
        ContinueLogin() {
            this.$router.replace({ path: "/login" });
        },
        setPathAndUpdate(path) {
            this.showPathModal = false
            ipcRenderer.send("update_mod", path)
        }
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