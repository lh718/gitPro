import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import request from "./ajax";
import router from "./router/index";
import store from "./store";

import VueAMap from 'vue-amap';


Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'b18f76f4b09b4f5ffaaba8ebc9c7f5eb',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

Vue.use(Vant);
Vue.prototype.$http=request;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
