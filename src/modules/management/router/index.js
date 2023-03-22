const AllUsers = () => import("../views/AllUsers.vue");
const AllAdmins = () => import("../views/AllAdmins.vue");
const TrainerActivities = () => import("../views/TrainerActivities.vue");
const WebsitePercentage = () => import("../views/WebsitePercentage.vue");

// import Vuex store logics
// import store from "@/store";

const routes = [
  {
    path: "/all-users",
    name: "all-users",
    component: AllUsers,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "management",
    },
  },

  {
    path: "/all-admins",
    name: "all-admins",
    component: AllAdmins,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "management",
    },
  },

  {
    path: "/trainer-activities",
    name: "trainer-activities",
    component: TrainerActivities,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "management",
    },
  },

  {
    path: "/website-percentage",
    name: "website-percentage",
    component: WebsitePercentage,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "DashboardLayout",
      parent: "management",
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
