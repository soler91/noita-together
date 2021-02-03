<template>
    <div class="labeled-input">
        <input placeholder="idk" ref="input" :type="inputType" @input="handleInput" :value="content"/>
        <label v-if="label">{{ label }}</label>
        <span v-if="errMsg" class="input-validation-err">{{ errMsg }}</span>
    </div>
</template>

<script>
export default {
    name: "vInput",
    props: {
        value: {
            type: [String, Number],
            required: true,
        },
        type: {
            type: String,
            required: false,
        },
        validate: {
            type: Function,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            content: this.value,
            errMsg: "",
        };
    },
    computed: {
        inputType() {
            return this.type || "text";
        },
    },
    methods: {
        handleInput() {
            this.content = this.$refs.input.value
            if (typeof this.validate == "function") {
                const validated = this.validate(this.content);
                if (typeof validated == "string") {
                    this.errMsg = validated;
                    this.$emit("valid", false)
                    return;
                }
            }
            this.$emit("valid", true)
            this.$emit("input", this.content);
            this.errMsg = "";
        },
    },
};
</script>

<style>
.labeled-input {
    display: flex;
    position: relative;
    padding: 1em 0;
    min-width: 15em;
    margin-right: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
}

.labeled-input > label {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    pointer-events: none;
    transform-origin: left bottom;
    transform: translate(0, 0.3em);
    transition: all 0.2s;
}

.labeled-input > input {
    width: 100%;
    display: block;
    border: none;
    border-bottom: solid 1px rgba(255, 255, 255, 0.3);
    -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
    transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
    background: transparent;
}

.labeled-input > input::placeholder {
    color: transparent;
}

.labeled-input > input:focus {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
    border-bottom: solid 1px white;
}

.labeled-input > input:focus + label {
    color: white;
    transform: translate(0, -1em) scale(0.7);
}

.labeled-input > input:not(:placeholder-shown) + label {
    color: white;
    transform: translate(0, -1em) scale(0.7);
}

.labeled-input > .input-validation-err {
    color: tomato;
    position: absolute;
    transform: translate(0, 1.8em);
    font-size: 0.8em;
    transition: all 0.2s;
}
</style>