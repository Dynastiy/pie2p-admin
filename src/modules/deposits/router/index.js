const DepositDetailsVue = () => import("../views/_id.vue");

const Home = () => import("../views/IndexView.vue");

const routes = [
  {
    path: "/deposits",
    name: "Deposits",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "deposits",
    },
  },

  {
    path: "/deposit/:id",
    name: "deposit-details",
    component: DepositDetailsVue,
    meta: {
      layout: "DashboardLayout",
      parent: "deposits",
    },
  },
];

export default routes;
