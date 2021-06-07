import Vue from "vue";
import Home from "../components/home.vue"
import Search from "../components/search.vue"
import Order from "../components/order.vue"
import My from "../components/my.vue"
import Vuerouter from "vue-router"
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"

Vue.use(Vuerouter);

const routes=[
    {
        path:"/",
        redirect:'/home'
    },
    {path:"/home",
     component:Home,
     props:true
    },
    {path:"/search",
     component:Search
    },
    {path:"/order",
     component:Order
    },
    {path:"/my",
     component:My
    },
    {path:"/login",
     component:Login
    },
    {path:"/register",
     component:Register
    },
]

const router=new Vuerouter({
    routes
})

export default router;
