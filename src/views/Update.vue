<template>
    <div class="content">
        <div class="update-ui">
            <div class="update-ui-logo">
                <vAppLogo />
            </div>
            <vGamePath
                v-if="showPathModal"
                @setPath="setPathAndUpdate"
            ></vGamePath>
            <div class="console">
                <div class="update-ui-text">
                    <i
                        class="fas fa-spinner fa-spin fa-pulse"
                        v-if="!success"
                    ></i>
                    <span v-if="!success">Updating Noita Together...</span>
                </div>
                <div class="update-log">
                    <div>
                        <p v-for="(msg, index) in logs" :key="index">
                            {{ msg }}
                        </p>
                    </div>
                </div>
                <vButton v-if="success" @click="ContinueLogin"
                    >Continue</vButton
                >
            </div>
        </div>
    </div>
</template>

<script>
import { ipcRenderer } from "electron";
import vButton from "@/components/vButton.vue";
import vGamePath from "@/components/vGamePath.vue";
import vAppLogo from "../components/vAppLogo.vue";
export default {
    components: { vButton, vGamePath, vAppLogo },
    data() {
        return {
            logs: [],
            success: false,
            showPathModal: false,
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
            this.showPathModal = true;
        });
    },
    created() {
        ipcRenderer.send("update_mod");
    },
    methods: {
        ContinueLogin() {
            this.$router.replace({ path: "/login" });
        },
        setPathAndUpdate(path) {
            this.showPathModal = false;
            ipcRenderer.send("update_mod", path);
        },
    },
};
</script>

<style>
.update-ui {
    height: 100%;
    width: 100%;
    position: relative;
}

.update-ui-logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 50%;
}

.update-ui-text {
    margin: 0.5rem;
}

.update-ui-text > span {
    margin: 0.5rem;
}

.console {
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 100%;
    padding: 0.4rem;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
}

.update-log {
    flex: 1 1 auto;
    background-color: rgb(16, 16, 16);
    height: auto;
    overflow: auto;
    overflow-x: hidden;
}

.update-log p {
    margin: 0.4em;
}

.disabled {
    display: none;
}
</style>