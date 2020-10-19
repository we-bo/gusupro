<template>
    <div>
        <mt-header title="" class="head">
      <router-link to="/" slot="left">
	      <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/register" slot="right" class="shortcut">
        登录
      </router-link>
    </mt-header>
    <div class="header">
      <div></div><p>注册古宿</p>
    </div>
    <div class="in">
      <p>成为古宿会员以使用更多服务,注册既表示您已同意</p>
      <a href="#">《古宿网服务协议》</a>
      <a href="#">《隐私政策》</a>
    </div>
    <div class="uname">
      <mt-field 
            type="text" 
            label="用户名"
            placeholder="请输入用户名"
            :attr="{maxlength:15,autocomplete:'off'}"
            v-model="username"
            :state="usernameState"
            @blur.native.capture="checkUsername">
        </mt-field>
        <mt-field 
            type="password" 
            label="密码"
            placeholder="请输入密码"
            :attr="{maxlength:20,autocomplete:'off'}"
            v-model="password"
            :state="passwordState"
            @blur.native.capture="checkPassword"
            >
        </mt-field>
        <mt-field 
            type="password" 
            label="确认密码"
            placeholder="请再次输入密码"
            :attr="{maxlength:20,autocomplete:'off'}"
            v-model="conpassword"
            :state="conpasswordState"
            @blur.native.capture="checkConpassword">
        </mt-field>
        </div>
      <mt-button type="primary" size="large" class="button" @click="handle">注册账号</mt-button>
      <p class="bass">第三方登录</p>
      <div class="base">
        <a href="#"><img src="../assets/login_register/weixin.png" alt=""></a>
        <a href="#"><img src="../assets/login_register/qq-copy.png" alt=""></a>
        <a href="#"><img src="../assets/login_register/weibo1.png" alt=""></a>
      </div>
    </div>
      
</template>
<style>
    *{
      margin: 0;
      padding: 0;
      
    }
    .shortcut{
      text-decoration: none; 
    }
    .head{
      background-color: #ffffff !important;
    }
    .header div{
      width: 6px;
      height: 32px;
      background-color: #FD8238;
      margin-top: 20px;
    }
    .header p{
      font-size: 32px;
      font-weight: 400;
      margin-left: 30px;
      margin-top: -33px;
    }
    .in p{
      color: #666666;
      font-size: 14px;
      margin-left: 30px !important;
      margin-top: 20px;
      padding: 5px !important;
    }
    .in a{
      color: #001f24;
      text-decoration: none;
      margin-left: 30px ;
      margin-top: 20px;
      font-size: 15px;
      font-weight: 400;
     
    }
    .phone{
      width: 100px !important;
      margin-top: 30px;
      font-weight: 400;
    }
    .button{
      width: 80% !important;
      background-color: rgba(0, 0, 0, 0.15) !important;
      margin-left: 35px;
      margin-top: 30px ;
      border-radius: 6px !important;
    }
    .uname{
      margin-left: 25px !important;
      margin-top: 25px !important;
    }
    .bass{
      color: #666666;
      font-size: 14px;
      margin-left: 150px;
      margin-top: 110px;
    }
    .base{
      width: 180px;
      margin-left: 100px;
      display: flex;
      justify-content: space-between;
      margin-top: 13px;
    }
</style>
<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      conpassword:'',
      usernameState:'',
      passwordState:'',
      conpasswordState:''
    }
  },
  methods:{
    //校验用户名
    checkUsername(){  
      let usernameRegExp = /^[0-9a-zA-Z_]{6,20}$/;
      if(usernameRegExp.test(this.username)){
        this.usernameState = 'success';
        return true;
      } else {
        // console.log('用户名非法');
        this.usernameState='error';
        this.$toast({
          message:"用户名为必填项",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },
    //校验密码
    checkPassword(){
      //密码的正则表达式
      let passwordRegExp = /^[0-9A-Za-z]{8,20}$/;
      if(passwordRegExp.test(this.password)){
        this.passwordState = 'success';
        return true;
      } else {
        this.passwordState='error';
        this.$toast({
          message:"密码必须为字母、数字的组合体",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },
    //校验确认密码
    checkConpassword(){
      if(this.password !== this.conpassword){
        this.$toast({
          message:"两次密码不一致",
          position:"top",
          duration:"2000"
        });
        return false;
      } else {
        return true;
      }
    },
    handle(){
      if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){
        //该将获取到的信息提交web服务器
        this.axios.post('/register','username=' + this.username + '&password=' + this.password).then(res=>{
          if(res.data.code == 1){
            this.$router.push('/');
          } else {
            this.$messagebox('注册提示','用户名已经占用');
          }
        });
      }
    }
  }
}
</script>