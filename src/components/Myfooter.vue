<template>
    <div>
      <mt-tabbar v-model="tabbar" fixed>
        <mt-tab-item id="index">
          首页
          <img src="../assets/sy_enabled.png" slot="icon" v-if="tabbar == 'index'" alt="">
          <img src="../assets/sy_disabled.png" slot="icon" v-else alt="">
        </mt-tab-item>
        <mt-tab-item id="collect">
          收藏
          <img src="../assets/sc_enabled.png" slot="icon" v-if="tabbar == 'collect'" alt="">
          <img src="../assets/sc_disabled.png" slot="icon" v-else alt="">
        </mt-tab-item>
        <mt-tab-item id="message">
          消息
          <img src="../assets/xx_enabled.png" slot="icon" v-if="tabbar == 'message'" alt="">
          <img src="../assets/xx_disabled.png" slot="icon" v-else alt="">
        </mt-tab-item>
        <mt-tab-item id="me">
          我的
          <img src="../assets/wd_enabled.png" slot="icon" v-if="tabbar == 'me'" alt="">
          <img src="../assets/wd_disabled.png" slot="icon" v-else alt="">
        </mt-tab-item>
      </mt-tabbar>
      </div>
</template>
<style>
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: #ff9645 !important;
}
</style>
<script>
export default {
    data(){
        return{
            tabbar:'index'
        }
    },
    mounted(){
        //this.$router=this.tabbar;
        //console.log(this.$route.path)
        if(this.$route.path=="/collect"){
            this.tabbar="collect";
        }else if(this.$route.path=="/message"){
             this.tabbar="message";
        }else if(this.$route.path=="/me"){
             this.tabbar="me";
        }else{
              this.tabbar="index";
        }
    },
    watch:{
        tabbar(value){
            // let max= window.loaction.href.split('/')[1];
            //console.log(value)
            //console.log(this.tabbar)
            if(value=='index'){
                this.$router.push('/');
            }
            if(value=='collect'){
                this.tabbar=value;
                this.$router.push('/collect');
            }
            if(value=='message'){
                this.tabbar=value;
                this.$router.push('/message');
            }
            if(value=='me'){
                this.tabbar=value;
                this.$router.push('/me');
            }
        },
        '$route': {
		deep: true,
		handler(to,from) {
			if(to.path != from.path){
				this.$router.push(to.path);
			}
		}
	}
    }
}
</script>
