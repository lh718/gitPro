<template>
    <div>
       <van-nav-bar style="background:rgb(0,166,124)" title="正在定位..." >
           <template #left>
               <van-icon name="search" size="18" color="white"/>
           </template>
        <template #right>
            <div class="div">
              <a href="" @click.prevent="login">登录</a>|<a href="" @click.prevent="register">注册</a>
            </div>
        </template>
      </van-nav-bar>

          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in 2" :key="index">
            <van-grid>
            <van-grid-item v-for="(item,index) in merchants" :key="index" :icon="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo" :text="item.name" />
          </van-grid>
          </van-swipe-item>
          </van-swipe>
          
          <van-card v-for="(item,index) in allShops" :key="index"
            :num="2"
            :price="item.minPrice+'起送'+' / 配送费约'+'￥'+item.transportationPrice"
            :title="item.name"
            :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"
             >
             <template #tags>
            
              <van-rate v-model="value" />
              <span>{{item.score}}</span>
              <span style="color:orange">月销量{{item.sales}}单</span>
               <div class="tag">
              <van-tag  color="orange" plain>联想教育</van-tag>
               </div>
            </template>
           
          </van-card>
         

    </div>
</template>
<script>

import { Swipe, SwipeItem, Grid, GridItem , Card  } from 'vant'
export default {
    name:"home",
    props:["name"],
    data() {
        return {
          merchants:null,
          allShops:null,//所有商家
          value:4,
        }
    },
    components:{
       Swipe, SwipeItem ,
        Grid, GridItem ,
        Card 
    },
    computed:{
  
    },
    methods: {
      //登录
      login:function(){
         console.log("登录")
      },
      //注册
      register:function(){
        console.log("注册")
      },
      //首页顶部九宫格信息
      fetchData:function(){
        var that =this;
        this.$http.post('/biz/queryBigCategory').then(function(res){
          // console.log(res.data);
          that.merchants=res.data
        })
      },
      //所有商家信息
      infoData:function(){
        var app=this;
        this.$http.get('/biz/queryAllShopsInfo').then(function(res){
          console.log(res.data)
          app.allShops=res.data
        })
      }
     },

    created:function(){
      this.fetchData();
      this.infoData();
    }

}
</script>
<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .div,.div a{
      color: #fff;
  }
  .tag{
    float: right;
  }
</style>