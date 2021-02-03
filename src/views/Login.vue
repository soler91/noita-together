<template>
    <div class="content">
        <div id="twitch-login" @click="OpenLoginPage">
            <div id="twitch-logo">
                <i class="fas fa-spinner fa-spin fa-pulse" v-if="clicked"></i>
                <i class="fab fa-twitch" v-else></i>
            </div>
            <span id="twitch-login-text"> Login with Twitch.tv </span>
        </div>
    </div>
</template>

<script>
import { shell } from "electron";
export default {
    data() {
        return {
            loginUrl: "https://nt.unicast.link:42069/auth/login",
            clicked: false
        };
    },
    beforeCreate() {
        const unsub = this.$store.subscribe((mutation, state) => {
            if (mutation.type == "setUser" && state.user.id > 0) {
                unsub();
                this.clicked = false
                this.$router.replace({ path: "/lobby" });
            }
        });
    },
    methods: {
        OpenLoginPage() {
            this.clicked = true
            shell.openExternal(this.loginUrl);
        },
    },
};
</script>

<style>
#twitch-login {
    display: flex;
    min-width: 300px;
    background-color: #6441a5;

    align-self: center;
    margin: auto;
    cursor: pointer;
}

#twitch-login:hover {
    background-color: #503484;
}

#twitch-login > div > i {
    font-size: 1.5rem;
}

#twitch-logo {
    padding: 1rem;
    background-color: #503484;
}

#twitch-login-text {
    margin: auto;
    align-self: center;
}
</style>