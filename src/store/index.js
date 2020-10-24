import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import router from '../router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //标识用户是否已经登录
    isLogined:localStorage.getItem('isLogined') ? localStorage.getItem('isLogined') : 0,
    username:localStorage.getItem('username') ? localStorage.getItem('username') : ''
    //isLogined:0
  },
  mutations: {
    // logined(state){
    //   state.isLogined=1;
    // }
    logined(state,payload){
      state.isLogined = 1;
      console.log(state.isLogined);
      state.username = payload.username;
      localStorage.setItem('username',payload.username);
    },
    logout(state){
      state.isLogined = 0;
      state.username = '';
      localStorage.removeItem('isLogined');
      localStorage.removeItem('username');      
    }
  },
  actions: {
    login(context,payload){
      axios.post('/login',this.qs.stringify(obj)).then(res=>{
        //用户登录成功
        if(res.data.code==1){
          //提交Autations
          context.commit(logined,res.data.results);
          localStorage.setItem('isLogined','1');
          router.push('/');
        }
      });
    }
  },
  modules: {
  }
})
