<template>
    <div>
       <van-nav-bar style="background:rgb(0,166,124)" title="正在定位..." >
           <template #left>
               <van-icon name="search" size="18" color="white"/>
           </template>
        <template #right>
            <div class="div">
            <span>登录</span>|<span>注册</span>
            </div>
        </template>
      </van-nav-bar>

        <van-grid :column-num="4">
           <van-grid-item v-for="item in topiclists" :key="item.id" icon="photo-o" :text="item.desc" />
        </van-grid>
          
          <div>
                <van-swipe-cell>
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    class="goods-card"
                    thumb="1"
                  />
                </van-swipe-cell>
          </div>
         

    </div>
</template>
<script>
import { NavBar ,Swipe,Grid, GridItem,SwipeCell} from 'vant';
import { mapState , } from 'vuex';

export default {
    name:"home",
    data() {
        return {
        //    topiclists:""
        }
    },
    components:{
        NavBar,
        Swipe,
        Grid, 
        GridItem,
        SwipeCell
    },
    computed:{
        ...mapState(['topiclists']),

    },
    methods: {
       
         beforeRouteEnter:function(to, from, next) {
            next(function(vm){
            vm.$http.post("/biz/queryBigCategory").then(function(res){
                console.log(res.data)
                vm.topiclists=res.data
            })
        })
         },
          beforeRouteUpdate:function(to, from, next){
                 var app=this;
                   this.$http.post("/biz/queryBigCategory").then(function(res){
                    app.topiclists=res.data
                
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
  .div{
      color: #fff;
  }
</style>