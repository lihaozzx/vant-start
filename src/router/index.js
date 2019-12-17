import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
const constantRoutes = [
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

/**
 * asyncRoutes
 * 只有登录后才可以跳转的路由
 */
const asyncRoutes = [];

export const roleRoute = getRoolRoute();
function getRoolRoute() {
  let out = [];
  asyncRoutes.forEach(r => {
    out.push(r.name);
  });
  return out;
}

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

router.beforeEach((to, from, next) => {
  if (to.name != 'Login') {
    console.log(1);
  }

  //路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
