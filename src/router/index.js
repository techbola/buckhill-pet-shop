import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Layout.vue"),
    redirect: {
      name: "Home",
    },
    children: [
      {
        path: "/",
        component: () => import("../views/Home.vue"),
        name: "Home",
      },
    ],
  },
  /*************************
   ** Admin routes ****
   *************************/
  {
    path: "/admin",
    // beforeEnter: isAdmin,
    component: () => import("../views/admin/Layout.vue"),
    redirect: {
      name: "AdminDashboard",
    },
    children: [
      {
        path: "dashboard",
        component: () => import("../views/admin/Dashboard.vue"),
        name: "AdminDashboard",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
