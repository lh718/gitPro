const mutations={
       //修改登录的值
       mutationslogin:function(state,playload){
        state.isLogin=true;
        state.UserName=playload
       }
    
 }
 export default mutations;