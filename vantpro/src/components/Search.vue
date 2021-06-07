<template>
    <div>
       <van-nav-bar style="background:rgb(0,166,124)" title="搜索">
       </van-nav-bar>

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

        <van-card v-for="(item,index) in searchAll" :key="index"
                :num="2"
            :price="item.minPrice+'起送'+' / 配送费约'+'￥'+item.transportationPrice"
            :title="item.name"
            :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"
             >
             <template #tags>
            
              <van-rate v-model="rate" />
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
import { Card  } from 'vant'
export default {
    name:"search",
    data() {
    return {
      value: '',
      rate:4,
      searchAll:null,
    };
  },
  components:{
        Card 
    },
  methods: {
    onSearch(val) {
    //   Toast(val);
      this.$http.get("/biz/queryAllShopsInfoByName?").then(function(res){
          console.log(res)
      })
    },
    searchData:function(){
        var app=this;
        this.$http.get('/biz/queryAllShopsInfo').then(function(res){
            console.log(res.data)
            app.searchAll=res.data
        })        
        }

    
    // onCancel() {
    //   Toast('取消');
    // },
  },

  created:function(){
        this.searchData()
    }
    
}
</script>

<style>
.tag{
    float: right;
  }
</style>