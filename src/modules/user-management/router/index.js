const Home = () => import("../views/IndexView.vue");
const UserID = () => import("../views/_id.vue");

const routes = [
  {
    path: "/user-management",
    name: "User Management",
    component: Home,
    meta: {
      layout: "DashboardLayout",
      parent: "user-management",
    },
  },

  {
    path: "/users/:id",
    name: "single-user",
    component: UserID,
    meta: {
      layout: "DashboardLayout",
      parent: "user-management",
    },
  },
];

export default routes;
