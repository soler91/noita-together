<template>
    <div class="info-wrapper">
        <!-- TODO show personal alert for user -->
        <div ref="content">
            <span :class="user.ready ? 'user-ready' : 'user-not-ready'">
                <i
                    v-if="host.ready && user.ready && matchHost.length > 0"
                    class="fas fa-exclamation-triangle"
                    slot="content"
                ></i>
                {{ user.ready ? "Ready" : "Not Ready" }}
            </span>
        </div>
        <div class="info" ref="info">
            <div v-if="user.ready">
                <template v-if="host.ready && matchHost.length > 0">
                    <p v-for="entry in matchHost" :key="entry">{{ entry }}</p>
                </template>
                <p>Seed: {{ user.seed }}</p>
                <p>Branch: {{ branch }}</p>
                <p>Mod version: {{ version }}</p>
                <p>Mods:</p>
                <p v-for="mod in user.mods" :key="mod">{{ mod }}</p>
            </div>
            <div v-else>
                <p>Waiting for game (make sure noita-together mod is enabled in game)...</p>
            </div>
        </div>
    </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
export default {
    props: {
        userId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            tooltip: null,
            matches: {
                version: {
                    hostMsg: "User is not on the same mod version.",
                    userMsg: "You are not in the samge game branch as the host.",
                },
                beta: {
                    hostMsg: "User is not in the same game branch.",
                    userMsg: "You are not in the same game branch as the host.",
                },
                seed: {
                    hostMsg: "User is not in the same seed.",
                    userMsg: "You are not in the same seed as the host."
                },
                nemesis_notfound: {
                    hostMsg: "noita-nemesis mod needs to be enabled",
                    userMsg: "noita-nemesis mod needs to be enabled"
                },
                nemesis_order: {
                    hostMsg: "noita-nemesis needs to be above noita-together in the game's mod list order",
                    userMsg: "noita-nemesis needs to be above noita-together in the game's mod list order"
                }
            },
        };
    },
    computed: {
        user() {
            const users = this.$store.state.room.users;
            let found = undefined
            for (const user of users) {
                if (user.userId == this.userId) {
                    found = user
                }
            }
            return found
        },
        isHost() {
            return this.$store.getters.isHost;
        },
        mode() {
            return this.$store.getters.roomGamemode;
        },
        seed() {
            const flags = this.$store.getters.flags
            let seed = 0
            for (const flag of flags) {
                if (flag.id == "sync_world_seed") {
                    seed = flag.value
                }
            }
            return seed
        },
        host() {
            const users = this.$store.state.room.users;
            let host = {};
            for (const user of users) {
                if (user.owner) {
                    host = user;
                }
            }
            return host;
        },
        mods() {
            let list = this.user.mods || [];
            return list;
        },
        version() {
            return this.user.version || "too old";
        },
        branch() {
            return this.user.beta ? "Beta" : "Main";
        },
        matchHost() {
            const messages = [];
            const msg = this.isHost ? "hostMsg" : "userMsg";
            for (const key in this.matches) {
                if (key == "seed") { continue }
                if (this.user[key] != this.host[key]) {
                    messages.push(this.matches[key][msg]);
                }
            }
            if (this.seed > 0 && this.host.seed != this.user.seed) {
                messages.push(this.matches.seed[msg])
            }
            if (this.mode == 2) {
                let found = false
                let order = false
                for (const mod of this.mods) {
                    if (mod == "noita-nemesis") { found = true }
                    if (found && mod == "noita-together") {
                        order = true
                    }
                }

                if (!found) {
                    messages.push(this.matches.nemesis_notfound[msg])
                }
                if (!order) {
                    messages.push(this.matches.nemesis_order[msg])
                }
            }
            return messages;
        },
    },
    mounted() {
        if (this.$refs.info) {
            const content = this.$refs.content;
            this.tooltip = createPopper(content, this.$refs.info, {
                placement: "auto",
                modifiers: [{ name: "offset", options: { offset: [0, 20] } }],
            });
        }
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    },
};
</script>

<style>
.info-wrapper {
    display: inline;
}

.info-wrapper .info {
    visibility: hidden;
    background-color: #0e0e0e;
    color: rgba(255, 255, 255, 0.8);
    padding: 1em;
    border-radius: 3px;
}

.info-wrapper:hover .info {
    visibility: visible;
    opacity: 1;
}
</style>