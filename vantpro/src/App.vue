<template>
  <div id="app">
    <van-tabbar route v-model="active">
  <van-tabbar-item replace to="/home" icon="home-o">外卖</van-tabbar-item>
  <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
  <van-tabbar-item replace to="/order" icon="orders-o">订单</van-tabbar-item>
  <van-tabbar-item replace to="/my" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
// import { Tabbar, TabbarItem } from 'vant';
import {mapMutations} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      active:0
    }
  },
 components:{
    // Tabbar,
    // TabbarItem
  },
  methods: {
    ...mapMutations(['mutationslogin']),
  },
  computed:{

  },
  created() {
    var user = window.localStorage.getItem('name');
    var uid =window.localStorage.getItem('id');
    if(user&&uid){
      this.mutationslogin(user);
    }
  },
}
</script>

<style>

</style>
