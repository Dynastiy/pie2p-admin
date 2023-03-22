const Home = () => import("../views/IndexView.vue");

const routes = [
  {
    path: "/orders",
    name: "Orders",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "orders",
    },
  },
];

export default routes;
