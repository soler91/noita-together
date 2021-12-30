<template>
  <div class="content">
    <div class="twitch-login" :class="{ hax: !savedUser }" @click="OpenLoginPage">
      <div class="twitch-logo">
        <i class="fas fa-spinner fa-spin fa-pulse" v-if="clicked"></i>
        <i class="fab fa-twitch" v-else></i>
      </div>
      <span class="twitch-login-text">Login with Twitch.tv</span>
    </div>
    <div class="remember-login">
      <input type="checkbox" id="remember-user" name="remember-user" v-model="reeemember" />
      <label for="remember-user">Remember me</label>
    </div>

    <div class="twitch-login remembered-login" @click="ContinueSavedUser" v-if="savedUser">
      <div class="twitch-logo">
        <i class="fab fa-twitch"></i>
      </div>
      <span class="twitch-login-text">Continue as {{ savedUserName }}</span>
    </div>
  </div>
</template>

<script>
import { shell, ipcRenderer } from "electron"
export default {
  data() {
    return {
      loginUrl: `https://${process.env.VUE_APP_HOSTNAME}/auth/login`,
      reeemember: false,
      clicked: false,
    }
  },
  beforeCreate() {
    const unsub = this.$store.subscribe((mutation, state) => {
      if (mutation.type == "setUser" && state.user.id > 0) {
        unsub()
        this.clicked = false
        this.$router.replace({ path: "/lobby" })
        this.$store.commit("setLoading", false)
      }
    })
  },
  computed: {
    savedUser() {
      return this.$store.state.savedUser
    },
    savedUserName() {
      return this.$store.state.savedUserName
    },
  },
  methods: {
    OpenLoginPage() {
      this.clicked = true
      shell.openExternal(this.loginUrl)
    },
    ContinueSavedUser() {
      this.$store.dispatch("continueSavedUser")
    },
  },
  watch: {
    reeemember(oldVal, newVal) {
      ipcRenderer.send("remember_user", !newVal)
    },
  },
}
</script>

<style>
.twitch-login.hax {
  margin-top: 40vh;
}
.twitch-login.remembered-login {
  margin-top: auto;
  align-self: stretch;
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

.twitch-login > div > i {
  font-size: 1.5rem;
}

.twitch-logo {
  padding: 1rem;
  background-color: #503484;
}

.twitch-login-text {
  margin: auto;
  align-self: center;
}

.remember-login {
  padding: 0.5rem;
  align-self: center;
}
</style>