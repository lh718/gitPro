import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store =new Vuex.Store({
    state:{
       //是否登录
       isLogin:false,
       //用户名
       UserName:'',
    },
    //状态数据的计算属性
    getters:{
    },
    mutations,
    actions
});
export default store;