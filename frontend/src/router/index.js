import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import Cart from "@/components/Cart.vue";
import { compile } from "vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
