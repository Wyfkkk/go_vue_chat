import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import reset from '../src/assets/style/reset.css'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL="http:///127.0.0.1:8084"
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});