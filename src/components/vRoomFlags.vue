<template>
    <vModal>
        <h1 slot="header">Game Options</h1>
        <template slot="body" class="flags-body">
            <h2>
                Death Penalty
                <vTooltip>
                    <span>{{ deathTooltip }}</span>
                </vTooltip>
            </h2>
            <select class="slot-selector" :disabled="!isHost" v-model="deathFlag">
                <option v-for="option in payload.death" :key="option.id">{{ option.name }}</option>
            </select>

            <h2>Run Options</h2>
            <div class="switches">
                <vSwitch
                    v-for="entry in payload.game"
                    :key="entry.id"
                    v-model="payload.game[entry.id].value"
                    :disabled="!isHost"
                >
                    <span>{{ entry.name }}</span>
                    <vTooltip>
                        <span>{{ entry.tooltip }}</span>
                    </vTooltip>
                </vSwitch>
            </div>

            <h2>
                World seed
                <vTooltip>
                    <span>{{ payload.world.sync_world_seed.tooltip }}</span>
                </vTooltip>
            </h2>
            <div class="world-seed">
                <vInput v-model="payload.world.sync_world_seed.value" ref="seedInput"></vInput>
                <vButton @click="randomizeSeed">Random</vButton>
            </div>
        </template>
        <div slot="footer" class="centered">
            <vButton @click="applyFlags">Apply</vButton>
            <vButton @click="close">Cancel</vButton>
        </div>
    </vModal>
</template>

<script>
import vSwitch from "../components/vSwitch.vue";
import vModal from "../components/vModal.vue";
import vButton from "../components/vButton.vue";
import vTooltip from "../components/vTooltip.vue";
import vInput from "../components/vInput.vue";
export default {//braincells where'd ya go
    name: "vRoomPassword",
    components: {
        vButton,
        vModal,
        vInput,
        vSwitch,
        vTooltip,
    },
    beforeMount() {
        this.payload = this.flags;
        const deathFlag = this.storeFlags.find(v => v.id.startsWith("death_penalty") && v.value)
        console.log({ f: this.storeFlags })
        this.deathFlag = deathFlag.name
    },
    data() {
        return {
            payload: null,
            deathFlag: ""
        };
    },
    computed: {
        isHost() {
            return this.$store.getters.isHost;
        },
        storeFlags() {
            return this.$store.getters.flags
        },
        flags() {
            const flags = this.storeFlags;
            const game = {};
            const world = {};
            const death = {};
            for (const flag of flags) {
                if (flag.id.startsWith("death_penalty")) {
                    death[flag.id] = flag;
                } else if (flag.id == "sync_world_seed") {
                    world[flag.id] = flag;
                } else {
                    game[flag.id] = flag;
                }
            }
            return { game, death, world };
        },
        deathTooltip() {
            const flags = this.flags.death;
            const flag = this.deathFlag;
            let tooltip = "";
            for (const key in flags) {
                if (flags[key].name == flag) {
                    tooltip = flags[key].tooltip;
                    break;
                }
            }
            return tooltip;
        },
    },
    methods: {
        //the whole flags things is a massive mess gotta rethink when braincells grow back
        applyFlags() {
            const flags = this.flags;
            const payload = [];
            //console.log({a: flags.death})
            for (const flag in flags.death) {
                if (flags.death[flag].name == this.deathFlag) {
                    flags.death[flag].value = true
                    payload.push({ flag: flags.death[flag].id });
                }
                else {
                    flags.death[flag].value = false
                }
            }
            for (const flag in flags.game) {
                if (
                    typeof flags.game[flag].value == "boolean" &&
                    flags.game[flag].value
                ) {
                    payload.push({ flag: flags.game[flag].id });
                }
            }
            for (const flag in flags.world) {
                let val = Number(flags.world[flag].value)
                if (isNaN(val)) { val = 0 }
                payload.push({ flag: flags.world[flag].id, value: Math.min(val, 4294967295) })
            }
            //console.log({ flags: payload })
            this.$emit("applyFlags", { flags: payload });
        },
        randomizeSeed() {
            const seed = Math.floor(Math.random() * 4294967295) + 1
            // not an amazing way to do it
            this.$refs.seedInput.$refs.input.value = seed
            this.$refs.seedInput.$refs.input.dispatchEvent(new Event('input'))
        },
        close() {
            this.$emit("close");
        },
    },
};
</script>

<style>
.flags-body {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
}

.switches {
    display: flex;
    flex-flow: row wrap;
}

.switches > div {
    padding: 0.2em;
    min-width: 180px;
}

.world-seed {
    display: flex;
    width: 100%;
}

.world-seed .labeled-input {
    margin-top: auto;
    padding-bottom: 0;
    margin-right: 0;
}
</style>