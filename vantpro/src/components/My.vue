<template>
    <div>
    <van-nav-bar title="我的" style="background-color:rgb(0,166,124)"/>
    <van-card
    style="background-color:rgb(0,166,124);margin-top:0px;font-size:14px"
    num="2"
    title="登录/注册"
    round
    >
    <template #thumb>
        <van-image
        round
        height="5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    </template>
    <template #desc>
        <div style="margin-top:25px;font-size:14px">
            <van-icon name="phone-o" color="white" />
            <span style="color:white">暂无绑定手机号</span>
        </div>
    </template>
    </van-card>
    <van-grid  column-num="3">
    <van-grid-item>
        <p><b style="color:rgb(247,157,57); font-size:30px">0.00</b> <span>元</span></p>
        <p style="color:gray">我的余额</p>
    </van-grid-item>
    <van-grid-item>
         <p><b style="color:rgb(237,119,120);font-size:30px">0</b> <span>个</span></p>
        <p style="color:gray">我的优惠</p>
    </van-grid-item>
     <van-grid-item>
         <p><b style="color:rgb(131,192,79);font-size:30px">0</b> <span>分</span></p>
        <p style="color:gray">我的积分</p>
    </van-grid-item>
    </van-grid>

        <van-cell-group>
            <van-cell>
                <van-icon name="bill-o"  color="#B6D6C4"/><b>我的订单</b>
            </van-cell>
            <van-cell>
                <van-icon name="points" color="#F4BDB7"/><b>积分商城</b>
            </van-cell>
            <van-cell>
                <van-icon name="bill-o"  color="#F6C99A"/><b>小zhang的外卖会员卡</b>
            </van-cell>
            <van-cell>
                <van-icon name="bill-o"  color="#5DAD89"/><b>服务中心</b>
            </van-cell>
        </van-cell-group>  

        <div style="text-align: center;margin-top: 70px;font-size: 14px;">
           <b>Let bygones be bygones and go to the future together.</b>  <br>
                <span style="color:gray">往事不再过问，未来共赴前程</span>    
        </div> 
    </div>
</template>
<script>
import {NavBar,Card,Image as VanImage,Icon , Grid, GridItem, Cell, CellGroup} from 'vant';
export default {
    name:'my',
    components:{
        // NavBar,
        // Card,
        // VanImage,
        // Icon ,
        // Grid,
        // GridItem,
        // Cell,
        // CellGroup
    }
}
</script>

<style lang="">
    .van-nav-bar__title{
         color: white;
         

         
         
     }
     
</style>