<template>
    <div class="header">
        <div id="app-icon">
            <i class="fab fa-twitch"></i>
        </div>
        
        <div id="app-title">{{ title }}</div>

        <div class="no-select" id="app-header-btns">
            <i class="fas fa-minus app-header-btn" @click="minimizeApp"></i>
            <i class="fas fa-times app-header-btn" @click="closeApp"></i>
        </div>
    </div>
</template>

<script>
import { remote } from "electron";
export default {
    props: {
        title: String,
    },
    methods: {
        minimizeApp() {
            let w = remote.getCurrentWindow();
            w.minimize();
        },
        closeApp() {
            window.close();
        },
    },
};
</script>