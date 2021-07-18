<template>
    <vModal>
        <h1 slot="header">Leave Room?</h1>
        <template slot="body">
            <p v-if="isHost">
                The room will be deleted, and the item bank will be lost.
            </p>
            <p v-else>Are you sure you want to leave the room?</p>
        </template>
        <div slot="footer" class="right-aligned">
            <vButton @click="close">Cancel</vButton>
            <vButton @click="leaveRoom">Leave</vButton>
        </div>
    </vModal>
</template>

<script>
import vModal from "../components/vModal.vue";
import vButton from "../components/vButton.vue";
export default {
    name: "vRoomCreation",
    components: {
        vButton,
        vModal,
    },
    computed: {
        isHost() {
            return this.$store.getters.isHost;
        },
    },
    methods: {
        leaveRoom() {
            this.$store.dispatch("leaveRoom");
        },
        close() {
            this.$emit("close");
        },
    },
};
</script>

<style></style>
