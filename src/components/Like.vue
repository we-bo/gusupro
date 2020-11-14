<template>
     <span class="span_first" @click="toggle_like()">
         <img src="../assets/dianzan.png" alt="" v-if="liked==false">
         <img src="../assets/dianzan1.png" alt="" v-else>
        {{like_count}}</span>
</template>
<style>
.span_first {
  position: relative;
  top: -25px;
}
.span_first > img {
  position: absolute;
  left: 40px;
  margin-top: -6px;
}
</style>
<script>
export default {
  data() {
    return {
      like_count: 10,
      liked: false
    };
  },
  methods: {
    toggle_like() {
      //如果liked为false则liked_count++并把liked取反
      if (!this.liked) {
        this.like_count++;
      } else {
        //liked为true时like_count--并把liked取反
        this.like_count--;
      }
      this.liked = !this.liked; //把liked取反
    }
  }
};
</script>
