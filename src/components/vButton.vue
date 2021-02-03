<template>
    <button class="btn" @click="clickM" :class="cSize">
        <slot name="icon"></slot>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "vButton",
    props: {
        size: {
            type: String,
            required: false
        }
    },
    computed: {
        cSize() {
            return this.size || "btn-normal"
        }
    },
    methods: {
        clickM(e) {
            this.$emit("click", e)
        }
    }
};
</script>

<style>
.btn-normal {
    font-size: 1.2em;
    padding: 0.625em 1em;
}

.btn-big {
    font-size: 1.6em;
    padding: 0.625em 1em;
}

.btn-small {
    font-size: 1em;
    padding: 0.325em 0.625em;
}

.btn {
    cursor: pointer;
    background-color: #696969;
    border: none;
    text-align: center;
    text-decoration: none;
    transition-duration: 0.3s;
}

.btn:hover {
    background-color: #808080;
    border: none;
}

.btn:focus {
    outline: none;
}

.btn:active {
    transform: scale(0.9);
}

.btn:disabled {
    cursor: not-allowed;
    background-color: #a5a5a5;
}
</style>