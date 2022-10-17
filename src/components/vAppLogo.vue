<template>
    <div class="app-logo">
        <img v-bind:src="'./icon.png'" />
    </div>
</template>

<script>
export default {
    name: "vAppLogo",
};
</script>

<style>
.app-logo {
    text-align: center;
}
.app-logo > img {
    height: auto;
    max-width: 10rem;
}
</style>