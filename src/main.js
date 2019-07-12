import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/utils/directives';
import '@/utils/registerIcons';
import '@/scss/base.scss';


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
