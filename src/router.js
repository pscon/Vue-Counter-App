import { createRouter, createWebHistory } from "vue-router";
import Counter from "../src/components/CounterApp.vue";
import ErrorPage from "../src/components/ErrorPage.vue";
import HomeApp from "../src/components/HomeApp.vue";

const routes = [
  {
    path: "/",
    name: "HomeApp",
    component: HomeApp,
  },
  {
    path: "/counter-app",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
