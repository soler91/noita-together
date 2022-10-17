<template>
    <vModal>
        <h1 slot="header">Create Room</h1>
        <template slot="body">
            <div class="create-ui-body">
                <select class="slot-selector" v-model="toCreate.gamemode">
                    <option>Co-op</option>
                    <option>Nemesis PROTOTYPE</option>
                </select>
                <select class="slot-selector" v-model="toCreate.maxUsers">
                    <option v-for="(slot, index) in slots" :key="index">{{ slot }} slots</option>
                </select>
                <vInput v-if="userExtra > 0" v-model="toCreate.name" label="room name" :validate="validateLength"
                    @valid="isValid" />
                <vInput v-model="toCreate.password" label="room password" />
            </div>
        </template>
        <div slot="footer" class="centered">
            <vButton @click="createRoom" :disabled="!canCreate">Create</vButton>
            <vButton @click="close">Cancel</vButton>
        </div>
    </vModal>
</template>

<script>
import vModal from "../components/vModal.vue";
import vButton from "../components/vButton.vue";
import vInput from "../components/vInput.vue";
export default {
    name: "vRoomCreation",
    components: {
        vButton,
        vModal,
        vInput,
    },
    data() {
        return {
            canCreate: true,
            toCreate: {
                name: "",
                gamemode: "Co-op",
                password: "",
                maxUsers: "5 slots",
            },
        };
    },
    computed: {
        userExtra() {
            return this.$store.getters.userExtra;
        },
        slots() {
            const slots = [5, 10, 15, 20, 25, 30]
            if (this.userExtra > 1) {
                return slots.concat([45, 60, 75, 90])
            }
            return slots
        }
    },
    methods: {
        createRoom() {
            const payload = { ...this.toCreate };
            let maxUsers = payload.maxUsers.split(" ")[0];
            payload.maxUsers = Number(maxUsers);
            if (!payload.name) { payload.name = "eeeeeee" }
            if (payload.gamemode == "Co-op") { payload.gamemode = 0 }
            if (payload.gamemode == "Nemesis PROTOTYPE") { payload.gamemode = 2 }
            this.$emit("createRoom", payload);
        },
        close() {
            this.toCreate = {
                name: "",
                gamemode: 0,
                password: "",
                maxUsers: "5 slots",
            };
            this.$emit("close");
        },
        validateLength(e) {
            if (e.length && e.length > 32) {
                return "length should be less than 32 characters.";
            }
            return true;
        },
        isValid(val) {
            this.canCreate = val;
        },
    },
};
</script>

<style>
.create-ui-body {
    width: 100%;
}

.create-ui-body > * {
    margin: 1rem 0;
}
</style>