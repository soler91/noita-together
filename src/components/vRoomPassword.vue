<template>
    <vModal>
        <h1 slot="header">Room Password</h1>
        <template slot="body">
            <vInput v-model="password" label="room password" />
        </template>
        <div slot="footer" class="centered">
            <vButton @click="join">Join</vButton>
            <vButton @click="close">Cancel</vButton>
        </div>
    </vModal>
</template>

<script>
import vModal from "../components/vModal.vue";
import vButton from "../components/vButton.vue";
import vInput from "../components/vInput.vue";
export default {
    name: "vRoomPassword",
    components: {
        vButton,
        vModal,
        vInput,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            password: "",
        };
    },
    methods: {
        join() {
            this.$emit("join", this.id, this.password);
        },
        close() {
            this.password = "";
            this.$emit("close");
        },
    },
};
</script>

<style>
</style>