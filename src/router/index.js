import Vue from "vue";
import VueRouter from "vue-router";

// Module Routes
import AuthRoutes from "@/modules/auth/router";
import DashboardRoutes from "@/modules/dashboard/router";

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(AuthRoutes, DashboardRoutes),
});

export default router;
