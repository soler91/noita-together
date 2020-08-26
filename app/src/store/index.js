import Vue from 'vue'
import Vuex from 'vuex'
import { msgTypes } from '../enums'
import { ipcRenderer } from 'electron'
Vue.use(Vuex)
console.log(typeof msgTypes, typeof ipcRenderer)
export default new Vuex.Store({
    state: {
        isLogged: false,
        isAdded: false,
        isReady: false,
        username: "",

        //host
        channel: "",
        hostUsername: ""
    },
    getters: {
        isHost(state) {
            return state.username.toLowerCase() === state.hostUsername.toLowerCase()
        }
    },
    mutations: {
        logIn(state, payload) {
            state.username = payload.username
            state.isLogged = true
        },
        joined(state, payload) {
            state.isAdded = true
            state.channel = payload.channel
        },
        hostMode(state, payload) {
            state.isHost = payload.value
            if (state.isHost) {
                state.hostUsername = state.username
            }
            else {
                state.hostUsername = ""
            }
        }
    },
    actions: {
        logIn({ commit }, payload) {
            return new Promise((resolve) => {
                ipcRenderer.once("TWITCH_CONNECTED", () => {
                    commit("logIn", { username: payload.username })
                    resolve()
                });
                ipcRenderer.send("TWITCH_CONNECT", {
                    username: payload.username,
                    oauth: payload.oauth
                })
            })
        },
        join({ commit }, payload) {
            return new Promise((resolve) => {
                ipcRenderer.once("TWITCH_JOINED", () => {
                    commit("joined", { channel: payload.channel, host: payload.host })
                    resolve()
                })

                ipcRenderer.send("TWITCH_JOIN", { channel: payload.channel, host: payload.host })
            })
        }
    }
})
