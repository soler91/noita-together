<template>
    <div class="footer">
        <span id="app-version">v{{version}}</span>
        <div class="donate" @click="OpenKofi">
            <span>Support me on ko-fi <i slot="icon" class="fas fa-heart"></i></span>
        </div>
    </div>
</template>

<script>
import { shell, remote } from "electron";
export default {
    name: "vFooter",
    beforeMount() {
        this.version = remote.app.getVersion()
    },
    data() {
        return {
            kofiUrl: "https://ko-fi.com/soler91",
            version: "0"
        }
    },
    methods: {
        OpenKofi() {
            shell.openExternal(this.kofiUrl);
        },
    }
};
</script>

<style>
.footer {
    display: flex;
    align-items: center;
    min-height: 32px;
    max-height: 32px;
    background-color: #2d2d2d;
}

#app-version {
    color: rgba(255, 255, 255, 0.4);
    margin-left: 0.5em;
    margin-right: auto;
}

.donate {
    cursor: pointer;
    margin-left: auto;
    margin-right: 0.5em;
}

.donate span, .donate span > i {
    color: rgba(255, 255, 255, 0.4);
}

.donate:hover *{
    color:white;
    transform: scale(1.2, 1.2);
    transition: all 0.2s;
}
</style>