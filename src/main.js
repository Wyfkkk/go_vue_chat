import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import reset from '../src/assets/style/reset.css'
import router from './router'
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});