<template>
    <div>
       <van-nav-bar style="background:rgb(0,166,124)" title="搜索">
       </van-nav-bar>

<form action="/">
       <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            >
            <template #action>
                <button style="background:rgb(0,166,124);color:white;border: 0;" @click="onSearch">搜索</button>
            </template>
        </van-search>
        </form>

        <van-card v-for="(item,index) in searchAll" :key="index" @click="Goodsdetails(item.id)"
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
    </div>
</template>
<script>
import { Card  } from 'vant'
export default {
    name:"search",
    data() {
    return {
      value:'',
      searchAll:null,
    };
  },
  components:{
        Card 
    },
  methods: {
    //搜索商家信息
     onSearch:function(){
            var app = this ;
            this.$http.get('/biz/queryAllShopsInfoByName?name='+this.value).then(function(res){
                app.searchAll=res.data;
            })
     },
     //跳转到商品详情
      Goodsdetails:function(id){
            this.$router.push('/goodsdetails/' + id)
     },
     //获取所有商品
     searchData:function(){
        var app=this;
        this.$http.post('/biz/queryAllShopsInfo').then(function(res){
            app.searchAll=res.data
        })        
     },

  },

  created:function(){
        this.searchData()
    }
    
}
</script>

<style lang="">
    .van-nav-bar__title{
        color: white;
    }
</style>