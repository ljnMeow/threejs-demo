import { createRouter, createWebHashHistory } from "vue-router";
import raining from "../views/raining.vue"
import earth from "../views/earth.vue"
import website from "../views/3dWebsite.vue"

let routes = [
  {
    path: "/raining",
    name: "raining",
    component: raining,
  },
  {
    path: "/earth",
    name: "earth",
    component: earth,
  },
  {
    path: "/3dWebsite",
    name: "3dWebsite",
    component: website,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 }
  }
});

export default router
