<template>
    <div class="content">
        <div class="login-ui">
            <div class="intro">
                <vAppLogo />
            </div>
            <div class="login-button" v-if="savedUser">
                <div class="twitch-login" @click="ContinueSavedUser">
                    <div class="twitch-logo">
                        <i class="fab fa-twitch"></i>
                    </div>
                    <span class="twitch-login-text">
                        Continue as {{ savedUserName }}
                    </span>
                </div>
                <div class="delete-saved-user" @click="DeleteSavedUser">
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </div>
            <div class="login-button">
                <div class="twitch-login" @click="OpenLoginPage">
                    <div class="twitch-logo">
                        <i
                            class="fas fa-spinner fa-spin fa-pulse"
                            v-if="clicked"
                        ></i>
                        <i class="fab fa-twitch" v-else></i>
                    </div>
                    <span class="twitch-login-text">
                        Login with Twitch.tv
                    </span>
                </div>
            </div>
            <div class="remember-login">
                <input
                    type="checkbox"
                    id="remember-user"
                    name="remember-user"
                    v-model="reeemember"
                />
                <label for="remember-user">Remember me</label>
            </div>
        </div>
    </div>
</template>

<script>
import { shell, ipcRenderer } from "electron";
import vAppLogo from "../components/vAppLogo.vue";
export default {
    components: { vAppLogo },
    data() {
        return {
            loginUrl: "https://nt.unicast.link:42069/auth/login",
            reeemember: false,
            clicked: false,
        };
    },
    beforeCreate() {
        const unsub = this.$store.subscribe((mutation, state) => {
            if (mutation.type == "setUser" && state.user.id > 0) {
                unsub();
                this.clicked = false;
                this.$router.replace({ path: "/lobby" });
                this.$store.commit("setLoading", false);
            }
        });
    },
    computed: {
        savedUser() {
            return this.$store.state.savedUser;
        },
        savedUserName() {
            return this.$store.state.savedUserName;
        },
    },
    methods: {
        OpenLoginPage() {
            this.clicked = true;
            shell.openExternal(this.loginUrl);
        },
        ContinueSavedUser() {
            this.$store.dispatch("continueSavedUser");
        },
        DeleteSavedUser() {
            this.$store.dispatch("deleteSavedUser");
        },
    },
    watch: {
        reeemember(oldVal, newVal) {
            ipcRenderer.send("remember_user", !newVal);
        },
    },
};
</script>

<style>
.login-ui {
    margin: auto;
}

.login-ui i {
    font-size: 1.5rem;
}

.login-button {
    display: flex;
    margin-top: auto;
    align-self: center;
    cursor: pointer;
    margin: 1em;
}

.intro {
    margin-bottom: 2rem;
}

.twitch-login {
    display: flex;
    min-width: 300px;
    background-color: #6441a5;
    margin-top: auto;
    align-self: center;
    cursor: pointer;
}

.twitch-login:hover {
    background-color: #503484;
}

.twitch-logo {
    padding: 1rem;
    background-color: #503484;
}

.twitch-login-text {
    margin: auto;
    align-self: center;
}

.saved-user {
    display: flex;
}

.delete-saved-user {
    padding: 1rem;
    background-color: #843434;
}

.delete-saved-user:hover {
    padding: 1rem;
    background-color: #9e3434;
}

.remember-login {
    text-align: center;
}

.remember-login > label {
    margin: 0.5rem;
}

input[type="checkbox"] {
    vertical-align: middle;
    position: relative;
    bottom: 0.1rem;
}
</style>
