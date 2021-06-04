import Vue from "vue";
import Home from "../components/home.vue"
import Search from "../components/search.vue"
import Order from "../components/order.vue"
import My from "../components/my.vue"
import Vuerouter from "vue-router"

Vue.use(Vuerouter);

const routes=[
    {
        path:"/",
        redirect:'/home'
    },
    {path:"/home",
     component:Home
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
]

const router=new Vuerouter({
    routes
})

export default router;
