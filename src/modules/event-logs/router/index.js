const UserLogs = () => import("../views/UserLogs.vue");
const TrainerLogs = () => import("../views/TrainerLogs.vue");
const AdminLogs = () => import("../views/AdminLogs.vue");
const AffiliateLogs = () => import("../views/AffiliateLogs.vue");

// import Vuex store logics
// import store from "@/store";

const routes = [
  {
    path: "/user-logs",
    name: "user-logs",
    component: UserLogs,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "event-logs",
    },
  },

  {
    path: "/trainer-logs",
    name: "trainer-logs",
    component: TrainerLogs,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "event-logs",
    },
  },

  {
    path: "/admin-logs",
    name: "admin-logs",
    component: AdminLogs,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "event-logs",
    },
  },

  {
    path: "/affiliate-logs",
    name: "affiliate-logs",
    component: AffiliateLogs,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "event-logs",
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
