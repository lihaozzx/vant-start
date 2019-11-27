import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Icon } from 'vant';

Vue.component('vanIcon', Icon);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.name != 'Login') {
    console.log(1);

  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
