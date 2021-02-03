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
    name: "vHeader",
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

<style>
.header {
    position: absolute;
    display: flex;
    min-height: 32px;
    max-height: 32px;
    width: 100%;
    z-index: 99999;
    background-color: #2d2d2d;
    -webkit-app-region: drag;
}

#app-icon {
    padding: 8px;
}

#app-title {
    display: flex;
    font-size: 1.2rem;
    align-items: center;
}

.no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
}

#app-header-btns {
    -webkit-app-region: no-drag;
    margin-left: auto;
}

.app-header-btn {
    color: rgba(255, 255, 255, 0.5);
    padding: 8px;
    cursor: pointer;
}

.app-header-btn:hover {
    color: white;
}
</style>