const Dashboard = () => import("../views/AnalyticsPage.vue");

// import Vuex store logics
// import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "dashboard",
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
