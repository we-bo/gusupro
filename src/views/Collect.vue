<template>
<div>
  <ul class="ul_first">
    <li :class="index == status  ? 'bechoice' : ''" v-for="(item,index) of list" :key="index" @click="choice(index)">
        {{item.text}}
    </li>
  </ul>
  <ul class="ul_double">
      <li class="li_double" :class="cros == index ? 'sublist': '' " v-for="(item,index) of listes" :key="index" @click="clock(index)">{{item.subject}}</li>
  </ul>

  <div >
    <div v-if="this.$store.state.temp.length" class="store" >
      <div v-for="(item,index) of this.$store.state.temp" :key="index" class="state">
        <div class="images">
          <img :src="item.images" alt="" >
        </div>
        <p class="div_p">{{item.title}}</p>
        <button class="button" @click="del(index)">取消收藏</button>
      </div>


    </div>
    
  <div v-else>
    <div>
      <img class="img" src="../assets/gs_icon1.png" alt="">
    </div>
    <div id="slot">
      <h4>暂无收藏</h4>
      <p>点击
        <img class="imgs" src="../assets/shoucang1.png" alt="">
        即可收藏对应的房屋
      </p>
    </div>
    <div class="btn">
      <button>随便逛逛</button>
    </div>
  </div>
  </div>
  <my-footer></my-footer>
</div>
</template>

<script>
export default {
  data() {
    return {
      status: 0,
      cros: 0,
      list: [{ text: "我的收藏" }, { text: "浏览历史" }],
      listes: [
        { subject: "房屋" },
        { subject: "房东" },
        { subject: "榜单" },
        { subject: "发现" }
      ],
      // array:this.$store.state.temp
    };
  },
  methods: {
    choice(index) {
      this.status = index;
    },
    clock(index) {
      this.cros = index;
    },
    del(index){
      this.$store.commit('del',index)
    }
  },
  mounted(){
    console.log(this.$store.state.temp);
  }
  
};
</script>

<style scoped>
*{
  padding: 0;
}
.div_p{
  margin: 0px;
}
.store{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.store .button{
  border: 0;
  outline: none;
  background-color: #fff;
  margin-top: -4px;
}
.state{
  width: 50%;
}
.ul_first {
  width: 200px;
  margin-left: 87px;
  list-style: none;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(50, 55, 70, 0.6);
  border-radius: 5px;
}
li {
  width: 100px;
  height: 30px;
  background: #fff;
  color: rgba(50, 55, 70, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
.bechoice {
  background: #ff9645;
  color: #fff;
  border: 0px;
}
.ul_double {
  width: 100%;
  margin-top: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.li_double {
  width: 100px;
  color: rgba(50, 55, 70, 0.6);
}
.sublist{
  color: #000;
  border-bottom: 2px solid #ff9645;
  border-bottom-left-radius:4%;
  border-bottom-right-radius:4%; 
  font-weight: bold;
}
.img{
  width: 100%;
}
.imgs{
  width: 5%;
}
#slot{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#slot>p{
  width: 200px;
  margin-top: 5px;
  color: rgba(50, 55, 70, 0.6);
}
.btn{
  margin-top: 35px;
  display: flex;
  justify-content: center;
}
.btn>button{
    width: 130px;
    height: 40px;
    background-color: #ff9645;
    outline: none;
    border: 0;
    color: #fff;
    border-radius: 20px;
}

.images img{
  width: 80%;
}
</style>