<template>
    <button @click="onClick" class="btn">
        <slot name="icon"></slot>
        <slot>Reee</slot>
    </button>
</template>

<script>
export default {
    props: {
        onClick: {
            type: Function,
            required: true,
        },
    },
};
</script>

<style>
</style>