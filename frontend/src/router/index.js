import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import Cart from "@/components/Cart.vue";
import Login from "@/components/Login.vue";
import AdminDashboard from "@/components/AdminDashboard.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/cart", component: Cart },
  { path: "/login", component: Login },
  { path: "/adminDashboard", component: AdminDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
