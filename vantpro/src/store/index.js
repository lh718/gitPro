import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store =new Vuex.Store({
    state:{
        topiclists:[
            {name:"tp","desc":"甜品饮品"},
            {name:"sc","desc":"商超便利"},
            {name:"ms","desc":"美食"},
            {name:"jc","desc":"简餐"},
            {name:"xd","desc":"新店特惠"},
            {name:"zs","desc":"准时达"},
            {name:"yd","desc":"预订套餐"},
            {name:"th","desc":"土豪推荐"},

          ],  
    },
    //状态数据的计算属性
    getters:{
    },
    mutations,
    actions
});
export default store;