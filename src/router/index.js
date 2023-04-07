import { createRouter, createWebHistory } from "vue-router";
import CurrencyConverter from "../components/CurrencyConverter.vue";
import NotFound from "../views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "CurrencyConverter",
      component: CurrencyConverter,
    },
    {
      path: "/:catchNotMatchPath(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
