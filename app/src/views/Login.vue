<template>
    <div class="content">
        <div class="login">
            <h1 class="centered">Login</h1>
            <label for="username">Username</label>
            <input v-model="username" type="text" id="username" placeholder="Twitch username" />

            <label for="oauthToken">
                Oauth token
                <a @click="openTMI">(Obtain)</a>
            </label>
            <input
                v-model="oauth"
                type="password"
                id="oauthToken"
                placeholder="oauth:dwiaj91j1KKappaa9j9d1420"
            />
            <div class="centered">
                <a class="btn" @click.prevent="twitchLogin">
                    <span v-if="!loading">Log In</span>
                    <i v-else class="fas fa-spinner fa-pulse"></i>
                </a>
                <div class="labeled-checkbox">
                    <label for="hostname">Remember</label>
                    <input type="checkbox" v-model="save" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { shell } from "electron";
export default {
    name: "Login",
    data() {
        return {
            username: "",
            oauth: "",
            save: false,
            loading: false,
        };
    },
    mounted() {
        let info = localStorage.getItem("savedInfo")
        if (info) {
            info = JSON.parse(info)
            this.username = info.username
            this.oauth = info.oauth
        }
    },
    methods: {
        openTMI() {
            shell.openExternal("https://twitchapps.com/tmi/");
        },
        saveInfo() {
            const info = {
                username: this.username,
                oauth: this.oauth
            }
            localStorage.setItem("savedInfo", JSON.stringify(info))
        },
        async twitchLogin() {
            if (!this.username || !this.oauth) {
                alert("Please fill all the fields");
                return;
            }
            this.loading = true;
            await this.$store.dispatch("logIn", {
                username: this.username,
                oauth: this.oauth,
            });
            this.loading = false;
            if (this.save) {
                this.saveInfo()
            }
            this.$router.push({ name: "Home", path: "/home" }, () => {
                console.log("DONE?");
            });
        },
    },
};
</script>
