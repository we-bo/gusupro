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
    username:localStorage.getItem('username') ? localStorage.getItem('username') : '',
    avatar:localStorage.getItem('avatar') ? localStorage.getItem('avatar') : '',  
    temp:[]  
  },
  mutations: {
    logined(state,payload){
      state.isLogined = 1;
      console.log(state.isLogined);
      state.username = payload.username;
      state.avatar = payload.avatar;
      localStorage.setItem('username',payload.username);
      localStorage.setItem('avatar',payload.avatar);
      console.log(state.username)
    },
    logout(state){
      state.isLogined = 0;
      state.username = '';
      state.avatar = '';
      localStorage.removeItem('isLogined');
      localStorage.removeItem('username');
      localStorage.removeItem('avatar');   
    },
    addMessage(state,item){
      let flag=false;
      state.temp.forEach(i=>{
        if(i.id==item.id){
          flag=true;
          return flag
        }
      })
      if(flag==false){
        state.temp.push(item);
        console.log(state.temp);
      }
    },
    del(state,index){
      state.temp.splice(index,1)
    }
  },
  actions: {
    login(context,payload){
      axios.post('/login',qs.stringify(payload)).then(res=>{
        //用户登录成功
        if(res.data.code==1){
          console.log(res.data.results);
          //提交Autations
          context.commit('logined',res.data.info);
          console.log(res.data.results);          
          localStorage.setItem('isLogined','1');
          router.push('/');
        }
      });
    }
  },
  modules: {
  }
})
