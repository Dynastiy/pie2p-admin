const Login = () => import("../views/LoginView.vue");
const ResetPassword = () => import("../views/ResetPassword");
const ForgotPassword = () => import("../views/ForgotPassword");

// import Vuex store logics
// import store from "@/store";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "AppAuthLayout",
    },
  },

  {
    path: "/reset-password",
    name: "reset-password",
    component: ResetPassword,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "AppAuthLayout",
    },
  },

  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "AppAuthLayout",
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
