<template>
    <div>
      <van-nav-bar :title="positionAddress ?positionAddress :'正在定位...'" :right-text=RightText right-arrow  @click-left="onSearch"
        @click-right="onLogin" style="background-color:rgb(0,166,124);color:white">
        <template #left>
        <van-icon name="search" size="18" color="white"/>
        </template>
        </van-nav-bar>

        

          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="rgb(0,166,124)">
          <van-swipe-item v-for="(item,index) in 2" :key="index" border>
              <van-grid>
              <van-grid-item v-for="(item,index) in merchants" :key="index" :icon="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo" :text="item.name" />
            </van-grid>
          </van-swipe-item>
          </van-swipe>

          <van-nav-bar>
            <template #left>
            <van-icon name="bars" size="18" color="black"/>
            <span>附近商家</span>
            </template>
          </van-nav-bar>
          
          <van-card v-for="(item,index) in allShops" :key="index" @click="Goodsdetails(item.id)"
            :num="2"
            :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"
           >

             <template #title>
                  <van-tag color="rgb(248,210,80)" text-color="#0D0D0D">品牌</van-tag>
                  <b>{{item.name}}</b>
                  <van-tag color="rgb(248,210,80)" text-color="#0D0D0D" style="float:right;margin-right: 5px;">票</van-tag>
                  <van-tag color="rgb(248,210,80)" text-color="#0D0D0D" style="float:right;margin-right: 5px;">准</van-tag>
                  <van-tag color="rgb(248,210,80)" text-color="#0D0D0D" style="float:right;margin-right: 5px;">保</van-tag>
             </template>

             <template slot="desc">
                <div style="margin-top:10px">
                    <span v-for="index in 5" :key="index">
                        <van-icon v-if="index<item.score" name="star" color="rgb(283,10,36)"/>
                        <van-icon v-else name="star-o" />
                    </span>
                    <span> {{item.score}} </span>
                    <span style="color:rgb(248,196,135)">月销{{item.sales}}单</span>
                    <van-tag color="rgb(248,196,135)" text-color="rgb(248,196,135)" style="float:right" plain>联想教育</van-tag>
                </div>
            </template>

             <template #bottom>
               <div>￥{{item.minPrice}}起送 / 配送费约￥{{item.transportationPrice}}</div>
             </template>

            
          </van-card>

          <div class="amap-page-container">
              <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
              </el-amap>
              <div class="toolbar">
                <!-- <span v-if="loaded">
                  location: lng = {{ lng }} lat = {{ lat }}
                </span>
                <span v-else>正在定位</span> -->
              </div>
        </div>
         

    </div>
</template>
<script>

import { Swipe, SwipeItem, Grid, GridItem , Card  } from 'vant'
import {mapState} from "vuex"
export default {
    name:"home",
    props:["name"],
    data() {
      let self=this;
        return {
          text:'登录|注册',
          merchants:null,
          allShops:null,//所有商家
          positionAddress:"",
          center: [121.59996, 31.197646],
          lng: 0,
          lat: 0,
          loaded: false,
          plugin: [
            {
              pName: "Geolocation",
              events: {
                init(o) {
                  // o 是高德地图定位插件实例
                  o.getCurrentPosition((status, result) => {
                    console.log(result);
                    // console.log(result.addressComponent.township);
                    if (result && result.position) {
                      var len = result.addressComponent.township.length;
                      var index = result.formattedAddress.indexOf(
                        result.addressComponent.township
                      );
                      self.positionAddress = result.formattedAddress.substring(
                        index + len
                      );
                      // self.lng = result.position.lng;
                      // self.lat = result.position.lat;
                      // self.center = [self.lng, self.lat];
                      self.loaded = true;
                      self.$nextTick();
                    }
                  });
                },
              },
            },
          ],

        }
    },
    components:{
      //  Swipe, SwipeItem ,
      //   Grid, GridItem ,
      //   Card 
    },
    computed:{
        ...mapState(['isLogin','UserName']),
        RightText:function(){
            if(this.isLogin==false){
                return this.text
            }else{
                return this.UserName
            }
        }
    },
    methods: {
       //跳转到搜索
        onSearch:function(){
            this.$router.push('/search')
        },
        onLogin:function(){
            if(this.isLogin==true){
                this.$router.push('/my')
            }else{
            this.$router.push('/login')
            }
        },
      //获取首页顶部九宫格信息
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
          // console.log(res.data)
          app.allShops=res.data
        })
      },
      //跳转到商品详情
      Goodsdetails:function(id){
            this.$router.push('/goodsdetails/' + id)
        }
     },

    created:function(){
      this.fetchData();
      this.infoData();
    }

}
</script>
<style lang="">

    .van-nav-bar__text{
       color: white;
    }
  /* .my-swipe .van-swipe-item {
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
  } */
</style>
