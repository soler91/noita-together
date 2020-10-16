<template>
    <div class="wrapper" id="app">
        <AppHeader :title="title" />
        <router-view />
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
    components: { AppHeader },
    data() {
        return {
            title: "Noita Together"
        };
    }
};
</script>