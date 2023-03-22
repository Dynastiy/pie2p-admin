// const Reports = () => import("../views/indexView.vue");
const Reports = () => import("../views/indexView");

// import Vuex store logics
// import store from "@/store";

const routes = [
  {
    path: "/reports-and-stats",
    name: "reports-and-stats",
    component: Reports,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "reports-and-stats",
    },
  },
];

// function checkLoggedIn(to, from, next) {
//   var isAuthenticated = false;
//   if (store.getters["auth/isLoggedIn"]) isAuthenticated = true;
//   else isAuthenticated = false;
//   if (!isAuthenticated) {
//     next();
//   } else {
//     next({
//       query: { redirectFrom: to.fullPath },
//     });
//   }
// }

export default routes;
