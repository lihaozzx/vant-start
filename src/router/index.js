import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("@/view/login"),
      meta: {
        title: '登陆'
      }
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/view/err/404")
    }
  ],
});
