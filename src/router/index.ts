import { createRouter, createWebHashHistory } from "vue-router";
import raining from "../views/raining.vue"

let routes = [
  {
    path: "/raining",
    name: "raining",
    component: raining,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
