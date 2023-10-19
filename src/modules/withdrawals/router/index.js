const WithdrawalDetailsVue = () => import("../views/_id.vue");

const Home = () => import("../views/IndexView.vue");

const routes = [
  {
    path: "/withdrawals",
    name: "Withdrawals",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "withdrawals",
    },
  },

  {
    path: "/withdrawal/:id",
    name: "Withdrawal-details",
    component: WithdrawalDetailsVue,
    meta: {
      layout: "DashboardLayout",
      parent: "withdrawals",
    },
  },
];

export default routes;
