<template>
    <div>验证码：  
    <input type = "text" v-model="inputCode"/>  
    <input type="button" id="codes"  @click="createCode()" v-model="code" style="width:60px" title='点击更换验证码' /> 
    <button @click = "validate()">验证</button>
  </div>
</template>
<style>
    #codes{ 
        /* font-family:Arial,宋体; */
        font-style:italic; 
        color:green; 
        border:0; 
        padding:2px 3px; 
        letter-spacing:3px; 
        font-weight:bolder; 
    } 
</style>
<script>
export default {
    data(){
        return {
            code:"",
            inputCode:"",
        }
    },
    methods:{ 
            
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
                alert("请输入验证码！"); //则弹出请输入验证码  
                }else if(inputCode != this.code ) { //若输入的验证码与产生的验证码不一致时 
                console.log(inputCode) 
                console.log(this.code)
                alert("验证码输入错误！@_@"); //则弹出验证码输入错误  
                createCode();//刷新验证码  
                inputCode= "";//清空文本框  
                }else { //输入正确时  
                alert("合格！^-^"); 
                } 
            } 
        },
        mounted(){
            this.createCode();
        }
    }
</script>
