<template>
    <vModal>
        <h1 slot="header">Create Room</h1>
        <template slot="body">
            <select class="slot-selector" v-model="toCreate.maxUsers">
                <option v-for="slot in slots" :key="slot">
                    {{ slot }} slots
                </option>
            </select>
            <vInput
                v-model="toCreate.name"
                label="room name"
                :validate="validateLength"
                @valid="isValid"
            />
            <vInput v-model="toCreate.password" label="room password" />
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
            slots: [5, 10, 15, 20, 25, 30],
            canCreate: true,
            toCreate: {
                name: "",
                gamemode: 0,
                password: "",
                maxUsers: "5 slots",
            },
        };
    },
    methods: {
        createRoom() {
            const payload = { ...this.toCreate };
            let maxUsers = payload.maxUsers.split(" ")[0];
            payload.maxUsers = Number(maxUsers);
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
</style>