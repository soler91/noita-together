<template>
    <vModal>
        <h1 slot="header">Create Room</h1>
        <template slot="body">
            <div class="create-ui-body">
                <vInput
                    v-model="toCreate.name"
                    label="room name"
                    :validate="validateLength"
                    @valid="isValid"
                />
                <vInput v-model="toCreate.password" label="room password" />
                <select class="slot-selector" v-model="toCreate.maxUsers">
                    <option v-for="(slot, index) in slots" :key="index">
                        {{ slot }} slots
                    </option>
                </select>
            </div>
        </template>
        <div class="right-aligned" slot="footer">
            <vButton @click="close">Cancel</vButton>
            <vButton @click="createRoom" :disabled="!canCreate">Create</vButton>
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
                gamemode: 0,
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
            const slots = [5, 10, 15, 20, 25, 30];
            if (this.userExtra) {
                return slots.concat([45, 60, 75, 90]);
            }
            return slots;
        },
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
.create-ui-body {
    width: 100%;
}

.create-ui-body > select {
    margin: 1rem 0;
}
</style>
