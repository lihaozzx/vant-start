import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login'),
    meta: {
      title: '登陆'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/err/404')
  }
];

const router = new VueRouter({
  routes
});

export default router;
