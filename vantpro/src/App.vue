<template>
  <div id="app">
    <van-tabbar route v-model="active">
  <van-tabbar-item replace to="/home" icon="home-o">外卖</van-tabbar-item>
  <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
  <van-tabbar-item replace to="/order" icon="friends-o">订单</van-tabbar-item>
  <van-tabbar-item replace to="/my" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'app',
  data () {
    return {
      active:0
    }
  },
  components:{
    Tabbar, TabbarItem
  }
}
</script>

<style>

</style>
