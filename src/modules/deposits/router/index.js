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
];

export default routes;
