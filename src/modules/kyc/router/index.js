const Home = () => import("../views/IndexView.vue");
// const Details = () => import("../views/_id.vue");

const routes = [
  {
    path: "/kyc",
    name: "KYC",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "kyc",
    },
  },

//   {
//     path: "/trade/:id",
//     name: "TradeDetail",
//     component: Details,
//     meta: {
//       layout: "DashboardLayout",
//       parent: "trades",
//     },
//   },
];

export default routes;
