import Vue from "vue";
import Vuex from "vuex";

// Modules
import drawer from "./drawer";

import auth from "@/modules/auth/store/index";
import transactions from "@/modules/transactions/store/index";
import trades from "@/modules/trades/store/index";
import orders from "@/modules/orders/store/index";
import users from "@/modules/user-management/store/index";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    drawer,
    auth,
    transactions,
    trades,
    orders,
    users,
  },
});
