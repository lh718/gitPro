import Vue from "vue";
import Vuerouter from "vue-router"
import Home from "../components/home.vue"
import Search from "../components/search.vue"
import Order from "../components/order.vue"
import My from "../components/my.vue"
import Login from "../components/Login.vue"
import Goodsdetails from "../components/Goodsdetails.vue"

Vue.use(Vuerouter);

const routes=[
    {
     path:"/",
     redirect:'/home'
    },
    {path:"/home",//首页
     component:Home,
     props:true
    },
    {path:"/search",//搜索
     component:Search,
     props:true
    },
    {path:"/order",//订单
     component:Order,
     props:true
    },
    {path:"/my",//我的
     component:My,
     props:true
    },
    {path:"/login",//登录
     component:Login
    },
    {path:"/goodsdetails/:id",//商品详情
     component:Goodsdetails,
     props:true
    },
]

const router=new Vuerouter({
    routes
})

export default router;
