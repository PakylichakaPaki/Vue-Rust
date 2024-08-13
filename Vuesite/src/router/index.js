import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "news",
      component: () => import("../views/News.vue"),
    },
    {
      path: "/weapon",
      name: "weapon",
      component: () => import("../views/Weapon.vue"),
    },
    {
      path: "/ammo",
      name: "ammo",
      component: () => import("../views/Ammo.vue"),
    },
    {
      path: "/attire",
      name: "attire",
      component: () => import("../views/Attire.vue"),
    },
    {
      path: "/constraction",
      name: "constraction",
      component: () => import("../views/Constraction.vue"),
    },
  ],
});

export default router;
