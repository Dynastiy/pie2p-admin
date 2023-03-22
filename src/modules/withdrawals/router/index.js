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
];

export default routes;
