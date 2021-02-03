import Vue from 'vue'
import VueRouter from 'vue-router'

import Update from '../views/Update.vue'
import Login from '../views/Login.vue'
import Lobby from '../views/Lobby.vue'
import Room from '../views/Room.vue'
/*
import Room from '../views/Room.vue'
*/
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Update',
        component: Update
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/lobby',
        name: 'Lobby',
        component: Lobby
    },
    {
        path: '/room',
        name: 'Room',
        component: Room
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    document.title = "Noita Together"
    next()
})

export default router
