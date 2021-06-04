import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import request from "./ajax";
import router from "./router/index";
import store from "./store";

Vue.use(Vant);
Vue.prototype.$http=request;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
