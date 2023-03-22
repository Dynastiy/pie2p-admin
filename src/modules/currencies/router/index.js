const Home = () => import("../views/IndexView.vue");

const routes = [
  {
    path: "/currencies",
    name: "Currencies",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "currencies",
    },
  },
];

export default routes;
