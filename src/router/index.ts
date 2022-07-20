import { createRouter, createWebHistory } from "vue-router";
import { ipcRenderer as ipc } from "electron-better-ipc";

import Update from "../views/UpdatePage.vue";
import Login from "../views/LoginPage.vue";
import Lobby from "../views/LobbyPage.vue";
import Room from "../views/RoomPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Update",
      component: Update,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/lobby",
      name: "Lobby",
      component: Lobby,
    },
    {
      path: "/room",
      name: "Room",
      component: Room,
    },
  ],
});

export default router;
