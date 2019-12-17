import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Icon } from 'vant';
import NavBar from './components/NavBar';

Vue.component('vanIcon', Icon);
Vue.component('topNavBar', NavBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
