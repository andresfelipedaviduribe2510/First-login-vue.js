
import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "@/views/LoginVue.vue";

const routes = [
    {path: "/", component: LoginVue},
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});