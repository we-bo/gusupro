<template>
<div>
    <div class="image">
        <span ><img src="../assets/login_register/xhao.png"></span>
        <span class="register">注册预定返积分</span>
    </div>
    <h1 class="h1">登录古宿</h1>
    <mt-field type="text"
     label="用户名"
     placeholder="手机号/邮箱/用户名"
     :attr="{maxlength:15}"
     v-model="username"
     :state="usernameState"
     @blur.native.capture="checkUsername"
    ></mt-field>
    <hr class="password">
    <mt-field type="text"
     label="密码"
     placeholder="请输入密码"
     :attr="{maxlength:15}"
     v-model="password"
     :state="passwordState"
     @blur.native.capture="checkPassword"
    ></mt-field>
    <hr class="password">
    <div>验证码：  
    <input type = "text" v-model="inputCode" class="first_input"/>  
    <input type="button" id="codes"  @click="createCode()" v-model="code" style="width:60px" title='点击更换验证码' /> 
    <button @click = "validate()" class="nth_button">验证</button>
    </div>
    <mt-button type="default" class="button" @click="handle">登录</mt-button>
    <div class="code">
        <span>手机验证码登录</span>
        <span class="coded">忘记密码?</span>
    </div>
    <p class="icon">第三方登录</p>
    <div class="base">
        <img src="../assets/login_register/weixin.png">
        <img src="../assets/login_register/qq-copy.png">
        <img src="../assets/login_register/weibo1.png">
    </div>
    </div>
</template>
<style>
.image{
    margin-left:14px;
    margin-top:9px;
}
.register{
    margin-left:212px;
    margin-top:-15px;
}
 .h1{
    font-size:30px;
    margin-top: 25px;
    margin-left: -210px;
} 
.password{
 width:350px;
}
.button{
    width:300px;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.2) !important;
    margin-top:50px;
    line-height: 45px;
}
.code{
    margin-left:-115px;
    margin-top:20px;
}
.coded{
   float: right;
   margin-right: 22px;
}
.icon{
    font-size:10px;
    margin-top:150px;
}
.base{
    width:180px;
    margin-left:100px;
    display: flex;
    justify-content:space-between;
    margin-top:13px;
}
#codes{ 
    /* font-family:Arial,宋体; */
    font-style:italic; 
    color:green; 
    border:0; 
    padding:2px 3px; 
    letter-spacing:3px; 
    font-weight:bolder; 
    margin-left: 10px;
    margin-right: 10px;
}
.first_input{
    width: 30%;
}
.nth_button{
    outline: none;
    border: 0;
}
</style>
<script>

export default {
    data(){
        return{
            username:'',
            password:'',
            usernameState:'',
            passwordState:'',
            code:"",
            inputCode:"",
        }
    },
    methods:{
        checkUsername(){
            let usernameRegExp=/^[0-9a-zA-Z_]{6,20}$/;
            if(usernameRegExp.test(this.username)){
                this.usernameState='success';
                return true;
            }else{
                this.usernameState="error"
                this.$toast({
                    message:"请填写用户名",
                    position:"top",
                    duration:"2000"
                });
                return false;
            }
        },
        checkPassword(){
            let passwordRegExp=/^[0-9a-zA-Z_]{6,20}$/;
            if(passwordRegExp.test(this.password)){
                this.passwordState='success';
                return true
            }else{
                this.passwordState='error';
                this.$toast({
                    message:"密码必须为字母、数字的组合体",
                    position:"top",
                    duration:"2000"
                });
                return false
            }
        },
        handle(){
            if(this.checkUsername() && this.checkPassword() && this.validate){
                let obj={
                    username:this.username,
                    password:this.password
                }
                this.axios.post('/login',this.qs.stringify(obj)).then(res=>{
                    if(res.data.code==1){
                      this.$router.push('/');  
                    }else{
                        this.$messagebox("登录提示","用户名活密码错误")
                    }
                })
            }
        },

        createCode(){ 
            this.code="";
            let codeLength = 4;//验证码的长度    
            let random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//随机数  
            for(var i = 0; i < codeLength; i++) {//循环操作  
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
            this.code += random[index];//根据索引取得随机数加到code上  
            }  
            
        },
        //校验验证码  
        validate(){  
                let inputCode= this.inputCode.toUpperCase();   
                if(inputCode.length <= 0) { //若输入的验证码长度为0  
                    this.$messagebox("验证码提示","验证码不能为空");//则弹出请输入验证码  
                }else if(inputCode != this.code ) { //若输入的验证码与产生的验证码不一致时 
                    this.$messagebox("验证码提示","验证码错误"); //则弹出验证码输入错误  
                    createCode();//刷新验证码  
                    inputCode= "";//清空文本框  
                }else { //输入正确时  
                    this.$messagebox("验证码提示","验证成功"); 
                    this.$router.push('/');
                } 
            }

    },
    mounted(){
        this.createCode();
    }
}
</script>