<template>
    <vModal>
        <h1 slot="header">Game not found</h1>
        <template slot="body">
            <p>Please select the game folder where noita.exe is located</p>
            <div class="game-path">
                <vInput v-model="nothing" :label="gamePath" :disabled="true" />
                <vButton @click="browseDialog" >
                    browse
                </vButton>
            </div>
        </template>
        <div slot="footer" class="centered">
            <vButton @click="setPath" :disabled="!canUpdate">Update</vButton>
        </div>
    </vModal>
</template>

<script>
import vModal from "../components/vModal.vue";
import vButton from "../components/vButton.vue";
import vInput from "../components/vInput.vue";
import { remote } from "electron";
import path from "path";
import fs from "fs";

export default {
    name: "vGamePath",
    components: {
        vButton,
        vModal,
        vInput,
    },
    data() {
        return {
            nothing: "",
            gamePath: "game path",
            canUpdate: false,
        };
    },
    methods: {
        setPath() {
            this.$emit("setPath", this.gamePath);
        },
        browseDialog() {
            remote.dialog
                .showOpenDialog({ properties: ["openDirectory"] })
                .then((res) => {
                    if (res.filePaths.length > 0) {
                        const gamePath = res.filePaths.shift();
                        if (fs.existsSync(path.join(gamePath, "/noita.exe"))) {
                            this.gamePath = gamePath;
                            this.canUpdate = true;
                        } else {
                            this.canUpdate = false;
                            this.gamePath = "Noita.exe not found";
                        }
                    } else {
                        this.canUpdate = false;
                        this.gamePath = "No folder selected(?)";
                    }
                });
        },
    },
};
</script>

<style>
.game-path {
    width: 100%;
    display: flex;
}

.game-path .labeled-input{
    width: 90%;
    margin-top: auto;
    padding: 0;
    margin-right: 0;
}

</style>