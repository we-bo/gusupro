import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'

import moment from 'moment'
//导入MintUi
import MintUI from 'mint-ui'
//导入样式文件
import 'mint-ui/lib/style.css';
//注册Vue插件
import Myfooter from './components/Myfooter.vue'
Vue.component("my-footer",Myfooter);

Vue.use(MintUI)
Vue.prototype.qs=qs;


Vue.prototype.moment = moment;
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
