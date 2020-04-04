import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ShardsVue from 'shards-vue'

// Import base styles (Bootstrap and Shards)
import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'


// Styles
// import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

import Default from '@/layouts/Default.vue';

ShardsVue.install(Vue);

Vue.component('default-layout', Default);

// Vue.use(ShardsVue);
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')