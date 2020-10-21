<template>
  <div id="one">
    <img src="../assets/icon12.png" alt="" @click="isShow">
      <h4>选择城市</h4>
       <ul class="list-unstyled d-flex flex-wrap ">
        <li>
          <img src="../assets/全部.png" alt="">
          <p>全部</p>
        </li>
        <li>
          <img src="../assets/北京.png" alt="">
          <p>北京</p>
        </li>
        <li>
          <img src="../assets/上海.png" alt="">
          <p>上海</p>
        </li>
        <li>
          <img src="../assets/成都.png" alt="">
          <p>成都</p>
        </li>
        <li>
          <img src="../assets/杭州.png" alt="">
          <p>杭州</p>
        </li>
        <li>
          <img src="../assets/广州.png" alt="">
          <p>广州</p>
        </li>
        <li>
          <img src="../assets/厦门.png" alt="">
          <p>厦门</p>
        </li>
        <li>
          <img src="../assets/重庆.png" alt="">
          <p>重庆</p>
        </li>
        <li>
          <img src="../assets/西安.png" alt="">
          <p>西安</p>
        </li>
        <li>
          <img src="../assets/三亚.png" alt="">
          <p>三亚</p>
        </li>
        <li>
          <img src="../assets/南京.png" alt="">
          <p>南京</p>
        </li>
        <li>
          <img src="../assets/丽江.png" alt="">
          <p>丽江</p>
        </li>
        <li>
          <img src="../assets/珠海.png" alt="">
          <p>深圳</p>
        </li>
        <li>
          <img src="../assets/大理州.png" alt="">
          <p>大理州</p>
        </li>
        <li>
          <img src="../assets/苏州.png" alt="">
          <p>苏州</p>
        </li>
        <li>
          <img src="../assets/武汉.png" alt="">
          <p>武汉</p>
        </li>
        <li>
          <img src="../assets/长沙.png" alt="">
          <p>长沙</p>
        </li>
        <li>
          <img src="../assets/湖州.png" alt="">
          <p>湖州</p>
        </li>
        <li>
          <img src="../assets/秦皇岛.png" alt="">
          <p>秦皇岛</p>
        </li>
        <li>
          <img src="../assets/昆明.png" alt="">
          <p>昆明</p>
        </li>
        <li>
          <img src="../assets/青岛.png" alt="">
          <p>青岛</p>
        </li>
        <li>
          <img src="../assets/桂林.png" alt="">
          <p>桂林</p>
        </li>
        <li>
          <img src="../assets/惠州.png" alt="">
          <p>惠州</p>
        </li> 
      </ul> 

    </div>
</template>

<style scoped>
  div>img{
    width: 8%;
    height: 10%;
    float: left;
    margin-left: 8px;
  }
  h4{
    margin-top: 5px;
  }
  ul{
    margin-top: 20px;
  }
  ul>li{width:25%;margin-bottom:15px}
  ul>li>img{width:42px}
  ul>li>p{font-size:14px;color:#333}
   
</style>
  


<script> 
  export default {
   data(){
     return{
     isShow:true,
     }
   },
   methods:{
     isShow(){
       this.isShow=false;
     }
   }
}
</script>
