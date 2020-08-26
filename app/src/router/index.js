import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
    {
        name: "Login",
        path: '/',
        component: Login,
        meta: { title: "Noita Together" }
    },
    {
        name: "Home",
        path: '/home',
        component: Home,
        meta: { title: "Noita Together" }
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router
