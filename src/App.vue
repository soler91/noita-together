<template>
    <div id="app" class="wrapper">
        <vHeader :title="title" />
        <router-view />
        <vFooter />

        <vLoading v-if="loading" />
        <vErrDialog v-if="showErrDialog">
            <h1 slot="header">{{ errDialog.title }}</h1>
            <p slot="body">{{ errDialog.body }}</p>
            <div slot="footer" class="centered">
                <vButton @click="closeErrDialog" v-if="errDialog.canClose"
                    >Close</vButton
                >
                <p v-else>App needs to be restarted.</p>
            </div>
        </vErrDialog>
    </div>
</template>

<script>
import vHeader from "@/components/vHeader.vue";
import vFooter from "@/components/vFooter.vue";
import vLoading from "@/components/vLoading.vue";
import vErrDialog from "@/components/vErrDialog.vue";
import vButton from "@/components/vButton.vue";
export default {
    components: { vHeader, vFooter, vLoading, vErrDialog, vButton },
    data() {
        return {
            title: "Noita Together",
        };
    },
    computed: {
        loading() {
            return this.$store.state.loading;
        },
        showErrDialog() {
            return this.$store.state.showErrDialog;
        },
        errDialog() {
            return this.$store.state.errDialog;
        },
    },
    methods: {
        closeErrDialog() {
            this.$store.commit("showErrDialog", false);
        },
    },
};
</script>

<style>
* {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    font-family: Helvetica, Arial, sans-serif;
}

body {
    overflow-y: hidden;
}

.wrapper {
    display: flex;
    flex-flow: column;
    height: 100vh;
}

.content {
    display: flex;
    flex-grow: 1;
    flex-flow: column;
    background-color: #1d1d1d;
    border-left: solid 2px #2d2d2d;
    border-right: solid 2px #2d2d2d;
    padding: 0.3em 0.6em;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 32px;
}

.centered {
    margin: auto;
}

.left-aligned {
    margin-left: 0;
    margin-right: auto;
}

.right-aligned {
    margin-left: auto;
    margin-right: 0;
}

table {
    border-collapse: collapse;
    width: 100%;
    user-select: none;
}

table td,
table th {
    padding: 8px;
}

table tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.3);
}

table tr:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

table td:nth-child(1n + 0) {
    width: 60%;
}

table td:nth-child(2n + 0) {
    width: 30%;
}

table td:nth-child(3n + 0) {
    width: 10%;
}

table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #2e2e2e;
    color: rgba(255, 255, 255, 0.8);
}

::-webkit-scrollbar {
    width: 0.6em; /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
    background: #111111; /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
    background-color: #696969; /* color of the scroll thumb */
}

.slot-selector {
    font-size: 16px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    margin: 0;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    background: rgb(40, 40, 40);
    transition: all 0.2s;
}

.slot-selector:focus {
    border-color: white;
    color: white;
    outline: none;
}

.slot-selector::after {
    content: "";
    display: block;
    border: solid white;
    border-width: 0 3px 3px 0;
    padding: 3px;
    width: 0.1rem;
    height: 0.1rem;
    transform: rotate(45deg);
}

/* Set options to normal weight */
.slot-selector option {
    color: rgba(255, 255, 255, 0.5);
    font-weight: normal;
}

.slot-selector:disabled,
.slot-selector[aria-disabled="true"] {
    color: graytext;
}

.slot-selector:disabled:hover,
.slot-selector[aria-disabled="true"] {
    border-color: #aaa;
}
</style>
