<template>
       <div class="container">
        <div class="first ml-2 mr-2 pt-3">
            <div class="h6 float-left mb-0">是Lisa啊</div>
            <span class="float-right">
                <img src="../assets/img/set_icon.png" alt="">
            </span>
        </div>
        <div>
            <ul class=" cb1 breadcrumb bg-transparent  ml-2">
              <li class="breadcrumb-item">普通会员</li>
              <li class="breadcrumb-item">通过信用认证，可享信用免押金</li>  
            </ul>
        </div>
        <div>
             <div class="cb2 rounded-circle mt-3"><img class="diu" src="../assets/img/shenhebijijishibenxiezi.png" id="df1" alt=""></div>
        </div>
        <div>
            <div id="order" class="fle d-flex mt-4 "> 
                <ul class="list-unstyled d-flex justify-content-around fle mb-0 ">
                  <li><img class="rounded-circle" src="../assets/img/202002021.jpg"></li>
                  <li>
                    <p>红包</p>
                    <p>0个</p>
                  </li>
                  <li>
                    <p>积分商城</p>
                    <p>0</p>
                  </li>
                  <li>
                    <p>余额</p>
                    <p>￥0</p>
                  </li> 
                </ul> 
            </div> 
        </div>
        <div class="float pt-3 pb-4 ml-1">
            <div class="cb3 float-left font-weight-bold ml-2"><router-link to="javascript:;">我的订单</router-link></div>
            <div class="cb4 float-right font-weight-light mr-2 ">查看全部</div>
        </div>
        <div>
          <div >
            <img src="../assets/img/icon9.jpg" class="img mt-2 mb-3" alt="">
          </div> 
        </div>
        <div>
            <ul class="list-unstyled ul flex-wrap">
              <li>
                <img src="../assets/img/write-2.png" alt="">
                <router-link to="javascript:;"><p>内容管理</p></router-link>
              </li>
              <li>
                <img src="../assets/img/lishi.png" alt="">
                <router-link to="javascript:;"><p>浏览历史</p></router-link>
              </li>
              <li>
                <img src="../assets/img/changyongxinxi.png" alt="">
                <router-link to="javascript:;"><p>常用信息</p></router-link>
              </li>
              <li>
                <img src="../assets/img/kaijufapiao.png" alt="">
                <router-link to="javascript:;"><p>开具发票</p></router-link>
              </li>
              <li>
                <img src="../assets/img/yaoqinghaoyou.png" alt="">
               <router-link to="javascript:;"><p>邀请好友</p></router-link>
              </li>
              <li>
                <img src="../assets/img/zaixiankefu.png" alt="">
                <router-link to="javascript:;"><p>在线客服</p></router-link>
              </li>
              <li>
                <img src="../assets/img/qiabao.png" alt="">
                <router-link to="javascript:;"><p>卡包</p></router-link>
              </li>
              <li>
                <img src="../assets/img/anquanzhongxin.png" alt="">
                <router-link to="javascript:;"><p>安全中心</p></router-link>
              </li>
              
              <li>
                <img src="../assets/img/icon11.png" alt="">
                <router-link to="javascript:;"><p>托管加盟</p></router-link>
              </li> 
              <li>
                <img src="../assets/img/yijianfankui.png" alt="">
                <router-link to="javascript:;"><p>意见反馈</p></router-link>
              </li>
            </ul>
        </div>
        <div id="holder" class="d-flex">
            我想当房东赚钱
        </div> 
        <bottom>></bottom>
    </div>
</template>
<style>
*{margin:0;padding:0}
.container{
    /* background-color:#e9e9e9; */
}
a{
    color:#999; 
}
.breadcrumb-item + .breadcrumb-item::before{
    content:">"; 
} 
.breadcrumb,.breadcrumb-item{ 
    font-size:10px;
    color:#999;
    margin:0;
    padding:0;
}
.cb1{ 
    margin-top:28px;
}
.cb2{
    width:30px;height:30px;
    background-color: gray;
    margin-left: 260px;
}
#df1{
    margin-left:7px;
    z-index: 2;
}
.fle>li{
    font-size: 12px; 
    color:lightslategray; 
    display: block ;
    margin-right:46px
}
.fle>li:first-child{
    margin-top:-8px
}
.fle>li>p{
    text-align: center;margin-bottom: 0;
}
.cb3{
    font-size:14px;
}
.cb4{
    font-size:12px;
}
.ul{
    color:#666;
    font-size: 12px;
    text-align: center;
    list-style: none;
    display: flex; 
    justify-content: space-around; 
    align-items: center;     
}
.ul>li{
    width:33%
}
#holder{
    width:150px;
    height: 30px;
    font-size:14px;
    border-radius: 15px;
    background:lightgray;
    line-height: 30px;
    justify-content:center;
    margin:auto;
    
}
.img{
    width:100%;
    border-radius:8px
}
</style>
<script>
import Bottom from '../components/Footer'
export default {
    data(){
        return{

        }
    },
    components:{Bottom}
}
</script>
