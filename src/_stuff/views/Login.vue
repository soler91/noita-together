<template>
    <div class="content">
        <div id="twitch-login" @click="OpenLoginPage">
            <div id="twitch-logo">
                <i class="fab fa-twitch"></i>
            </div>
            <span id="twitch-login-text"> Login with Twitch.tv </span>
        </div>
    </div>
</template>

<script>
import {shell} from "electron"
export default {
    data(){
        return {
            loginUrl: "https://nt.unicast.link:42069/auth/login"
        }
    },
    beforeCreate() {
        const unsub = this.$store.subscribe((mutation, state) => {
            console.log(mutation)
            if (mutation.type == "setUser" && state.user.id > 0) {
                unsub()
                this.$router.replace({path: "/lobby"})
            }
        })
    },
    methods: {
        OpenLoginPage() {
            shell.openExternal(this.loginUrl)
        }
    }
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