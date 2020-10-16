<template>
  <div>
    <div class="div_first">
    <h3>发现</h3>
    <router-link to="javascript:;">全部城市</router-link>
    <img src="../assets/gs_icon6.png" alt="">
    </div>
    <div>
      <mt-swipe 
      :showIndicators="true"
      :auto="2000"
      :spend="2000"
      :continuous="true"
      >
        <mt-swipe-item></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<style>
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
</style>

<script>

export default {
  data(){
    return{
      pics:[],
    }
  },
  methods:{

  },
  mounted(){
    this.axios.get('/category').then(result=>{
      this.category = result.data.results;
    })
  }
}
</script>
