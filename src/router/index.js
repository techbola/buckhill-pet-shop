import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

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
      {
        path: "/product/:id",
        component: () => import("../views/ProductDetails.vue"),
        name: "ProductDetails",
      },
      {
        path: "/forgot-password",
        component: () => import("../views/ForgotPassword.vue"),
        name: "ForgotPassword",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
