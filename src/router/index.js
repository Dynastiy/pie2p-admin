import Vue from "vue";
import VueRouter from "vue-router";
import Cookies from "js-cookie";
import config from "@/config";
// Module Routes
import Auth from "@/modules/auth/router";
import Currencies from "@/modules/currencies/router";
import Dashboard from "@/modules/dashboard/router";
import Orders from "@/modules/orders/router";
import Trades from "@/modules/trades/router";
import Transactions from "@/modules/transactions/router";
import User from "@/modules/user-management/router";
import Withdrawals from "@/modules/withdrawals/router";

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(
    Auth,
    Currencies,
    Dashboard,
    Orders,
    Trades,
    Transactions,
    User,
    Withdrawals
  ),
});

router.beforeEach((to, from, next) => {
  const accessToken = Cookies.get(config.accessTokenStorageKey);
  if (to.name !== "login" && !accessToken) {
    if (to.name === "dashboard") {
      next({ name: "login" });
    } else {
      next({ name: "login", query: { redirectFrom: to.fullPath } });
    }
  } else {
    next();
  }
});

export default router;
