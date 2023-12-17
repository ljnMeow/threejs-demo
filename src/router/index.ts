import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
  {
    path: "/raining",
    name: "raining",
    component: () => import(/* webpackChunkName: "raining" */ '../views/raining.vue'),
  },
  {
    path: "/earth",
    name: "earth",
    component: () => import(/* webpackChunkName: "earth" */ '../views/earth.vue'),
  },
  {
    path: "/3dWebsite",
    name: "3dWebsite",
    component: () => import(/* webpackChunkName: "3dWebsite" */ '../views/3dWebsite.vue'),
  },
  {
    path: "/modelDecomposition",
    name: "modelDecomposition",
    component: () => import(/* webpackChunkName: "modelDecomposition" */ '../views/modelDecomposition.vue'),
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
