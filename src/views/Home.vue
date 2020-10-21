<template>
  <div>
    <div class="div_first">
    <h3>发现</h3>
    <router-link to="javascript:;">全部城市</router-link>
    <img src="../assets/gs_icon6.png" alt="">

    <!-- 轮播图 -->
    </div>
    <div class="swipe">
      <mt-swipe 
      :showIndicators="true"
      :auto="2000"
      :spend="2000"
      :continuous="true"
      >
        <mt-swipe-item v-for="(item,index) of category" :key="index">
          <img :src="item.imgs" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 顶部选项卡 -->
    <div>
      <mt-navbar v-model="active">
        <mt-tab-item  v-for="(item,index) of classify" :key="index" :id="item.id.toString()">
          {{item.category}}
        </mt-tab-item>
      </mt-navbar>
    </div>

    <!-- 页面详情 -->
    <!-- <div>
        <mt-tab-container v-model="active">
          <mt-tab-container-item :id="active.toString()">
            <router-link to="/article/ + item.id" v-for="(item,index) of lists" :key="index">
            <img :src="item.images" alt="">
            <p>{{item.title}}</p>
            </router-link>
          </mt-tab-container-item>
        </mt-tab-container>
      </div> -->
      
    <!-- 底部选项卡开始 -->
     <bottom></bottom>
  </div>
</template>
<style spoced>
.div_first{
  display: flex; 
}
.div_first>a{
  color: rgba(50, 55, 70, 0.8);
  margin-top: 7px;
  font-size: 14px;
  padding-left: 4px;
}
.div_first>h3{
  font-size: 24px;
}
.div_first>img{
  width: 2%;
  height: 4%;
  margin-top: 15px;
  margin-left: 2px;
}
.swipe{
  width: 400px;
  height: 190px;
}
.swipe img{
  width: 100%;
  height: 100%;
}
</style>
<style>
.mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background:#000;
    opacity: 0.7 !important;
    margin: 0 3px;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #ff9645 !important;
    color: #000 !important;
    border-bottom-left-radius: px !important;
    border-bottom-right-radius:2px !important;
    margin-bottom: -3px;
}

</style>

<script>
import Bottom from '../components/Footer'
export default {
  data(){
    return{
      category:[],
      classify:[],
      lists:[],
      active:"4",
      tabbar:'index',
    }
  },
  methods:{

  },
  mounted(){
    this.axios.get('/category').then(result=>{
      this.category=result.data.results;
      console.log(this.category);
      // let data = result.data.results;
      // console.log(data);
      // data.forEach(item=>{
      //   if(item.imgs!=null){
      //     item.imgs=require('../assets/lbimg/'+item.imgs);
      //     console.log(item)
      //     console.log(item.imgs)
      //   }
      //   this.category.push(item);
      // })
    });
    this.axios.get('/classify').then(result=>{
      this.classify=result.data.results;
      console.log(this.classify);
    });
    this.axios.get('/list').then(result=>{
      this.lists=result.data.results;
      console.log(this.lists);
    })
  },
  watch:{
    
  },
  components:{Bottom},
}
</script>
