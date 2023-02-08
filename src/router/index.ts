import { createRouter, createWebHashHistory } from "vue-router";
import raining from "../views/raining.vue"
import earth from "../views/earth.vue"

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
