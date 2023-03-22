const Home = () => import("../views/IndexView.vue");
const Details = () => import("../views/_id");

const routes = [
  {
    path: "/transactions",
    name: "Transactions",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "transactions",
    },
  },
  {
    path: "/transactions/:id",
    name: "TransactionDetails",
    component: Details,
    meta: {
      layout: "DashboardLayout",
      parent: "transactions",
    },
  },
];

export default routes;
