<template>
    <div>
       <van-nav-bar style="background:rgb(0,166,124)" title="正在定位..." >
           <template #left>
               <van-icon name="search" size="18" color="white"/>
           </template>
        <template #right>
            <span>登录</span>|
            <span>注册</span>
        </template>
      </van-nav-bar>

        <van-swipe class="my-swipe" @change="onChange" indicator-color="white" touchable>
           <van-swipe-item v-for="(item,index) in topiclists" :key="index"> {{item.desc}}</van-swipe-item>
           <!-- <van-swipe-item>2</van-swipe-item> -->
        </van-swipe>
    </div>
</template>
<script>
import { NavBar ,Swipe, SwipeItem ,Toast } from 'vant';
import { mapState , } from 'vuex';

export default {
    name:"home",
    data() {
        return {
            page:1,//页码 默认第一页
            limit:8,//每页显示8条数据
        }
    },
    components:{
        NavBar,
        Swipe, 
        SwipeItem,
        Toast 
    },
    computed:{
        ...mapState(['topiclists']),

    },
    methods: {
    onChange(index) {
    //   Toast('当前 Swipe 索引：' + index);
    },

    beforeRouteEnter:function(to, from, next) {
        next(function(vm){
            vm.$http.post("/biz/queryBigCategory",{
                params:{
                    tab:to.params.name,
                    page:vm.page,
                    limit:vm.limit
                }
            }).then(function(response){
                console.log(response.data);
                
            })
        })
    },
    beforeRouteUpdate:function(to, from, next){
        var app=this;
        this.$http.post("/biz/queryBigCategory",{
                params:{
                    tab:to.params.name,
                    page:this.page,
                    limit:this.limit
                }
            }).then(function(response){
                // if(response.data.success){
                //     app.listData=response.data.data;
                // }
            });
            next();
    }
  },
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
</style>