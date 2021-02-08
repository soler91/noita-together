<template>
    <div class="tooltip-wrapper">
        <slot name="content">
            <!-- TODO show personal alert for user -->
            <vTooltip v-if="isHost && host.ready && matches.length > 0">
                <i class="fas fa-exclamation-triangle" slot="content"></i>
                <div>
                    <p v-for="entry in matches" :key="entry">{{ entry }}</p>
                </div>
            </vTooltip>

            <span :class="user.ready ? 'user-ready' : 'user-not-ready'">
                {{ user.ready ? "Ready" : "Not Ready" }}
            </span>
        </slot>
        <div class="tooltip" ref="tooltip">
            <div v-if="isReady">
                <p>Seed: {{ user.seed }}</p>
                <p>Branch: {{branch}}</p>
                <p>Mod version: {{ version }}</p>
                <p>Mods:</p>
                <p v-for="mod in user.mods" :key="mod">{{ mod }}</p>
            </div>
            <div v-else>
                <p>Waiting for game...</p>
            </div>
        </div>
    </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
import vTooltip from "@/components/vTooltip.vue";
export default {
    components: {
        vTooltip,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            tooltip: null,
            matches: {
                version: {
                    hostMsg: "User is not on the same mod version.",
                    userMsg:
                        "You are not in the samge game branch as the host.",
                },
                beta: {
                    hostMsg: "User is not in the same game branch.",
                    userMsg: "You are not in the same game branch as the host.",
                },
            },
        };
    },
    computed: {
        isHost() {
            return this.$store.getters.isHost;
        },
        isReady() {
            return this.user.ready || false;
        },
        host() {
            const users = this.$store.state.room.users;
            for (const user of users) {
                if (user.owner) {
                    return user;
                }
            }
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
                if (this.user[key] != host[key]) {
                    messages.push(this.matches[key][msg]);
                }
            }
            return messages;
        },
    },
    mounted() {
        if (this.$refs.tooltip) {
            const content = this.$slots.content && this.$slots.content[0];
            const def = this.$refs.icon;
            const elm = content && content.elm;
            this.tooltip = createPopper(elm || def, this.$refs.tooltip, {
                placement: "left",
                modifiers: [{ name: "offset", options: { offset: [0, 15] } }],
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
.tooltip-wrapper {
    display: inline;
}

.tooltip-wrapper .tooltip {
    visibility: hidden;
    background-color: #0e0e0e;
    color: rgba(255, 255, 255, 0.8);
    padding: 1em;
    border-radius: 3px;
}

.tooltip-wrapper:hover .tooltip {
    visibility: visible;
    opacity: 1;
}
</style>