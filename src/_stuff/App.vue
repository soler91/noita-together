<template>
    <div id="app" class="wrapper">
        <AppHeader :title="title" />
        <router-view />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
    components: { AppHeader, AppFooter },
    data() {
        return {
            title: "Noita Together"
        }
    }
};
</script>