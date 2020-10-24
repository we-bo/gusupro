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
          <img class="swipe_img" v-lazy="item.imgs" alt="">
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
    <!-- 无限滚动解决从后台请求两次的问题 -->
    <div class="div_nav"
    infinite-scroll-distance="20"
    infinite-scroll-disabled="busy"
    infinite-scroll-immediate-check="true"
    >
        <mt-tab-container v-model="active" class="nav_container">
          <mt-tab-container-item :id="active.toString()" class="nav_tab">
            <router-link :to="`/article/${item.id}`" v-for="(item,index) of lists" :key="index" class="nav_a">
            <img class="nav_img" v-lazy="item.images" alt="">
            <p>{{item.title}}</p>
            </router-link>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      
    <!-- 底部选项卡开始 -->
    <my-footer></my-footer>
  </div>
</template>
<style spoced>
.div_first{
  display: flex;
  margin-left: 18px; 
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
  width: 90%;
  height: 190px;
  margin-left: 18px;
}
.swipe img{
  width: 100%;
  height: 100%;
}
.swipe_img{
  border-radius: 5px;
}
.div_nav{
  background-color: #f5f5f5;
  margin-top: 5px;
}
.nav_img{
  width: 100%;
  height: 100px;
}
.nav_tab{
  display: flex;
  flex-wrap: wrap;
}
.nav_a{
  float: left;
  width: 158px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 18px;
}
.nav_a>p{
  width: 158px;
  font-size: 14px;
  color: #000;
}
.nav_a>img{
  border-radius: 3px;
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
export default {
  data(){
    return{
      category:[],
      classify:[],
      lists:[],
      active:"1",
    }
  },
  methods:{
    
  },
  mounted(){
    
    //显示加载提示
    this.$indicator.open({
      text:'加载中....',
      spinnerType:'double-bounce'
    })
    //获取轮播图分类
    this.axios.get('/category').then(result=>{
      this.category=result.data.results;
      //console.log(this.category);
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
      this.$indicator.close();
    });


    this.$indicator.open({
      text:'加载中....',
      spinnerType:'double-bounce'
    })
    //获取顶部导航栏
    this.axios.get('/classify').then(result=>{
      this.classify=result.data.results;
      //console.log(this.classify);
      this.$indicator.close();
    });

    this.$indicator.open({
      text:'加载中....',
      spinnerType:'double-bounce'
    })
    //获取页面详情
    this.axios.get('/list?cid=' + this.active).then(result=>{
      this.lists=result.data.results;
      //console.log(this.lists);
      this.$indicator.close();
    });
    
  },
  watch:{
    //监听active变量当顶部导航栏切换时发送请求请求当前点击的分类里面的数据
    active(){
      //每切换到下一次分类之前先把数据清空要不然它会把后台请求的数据进行累加增加服务器负担
      this.lists=[];
      this.$indicator.open({
      text:'加载中....',
      spinnerType:'double-bounce'
    })
      this.axios.get('/list?cid=' + this.active).then(result=>{
        this.lists=result.data.results;
        //console.log(this.lists)
        this.$indicator.close();
      })
    }
  },
}
</script>
