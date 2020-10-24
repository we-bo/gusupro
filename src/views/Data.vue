<template>
    <div class="bj">
        <mt-header title="账号管理" class="head">
            <router-link to="/set" slot="left" >
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <br>
        <mt-button type="primary" size="large" class="header">个人资料<span>></span></mt-button>
        <mt-button type="primary" size="large" class="header">用户名<span>></span></mt-button>
        <div>
            <div class="inc">
                <p>账号绑定</p> 
            </div>
            <mt-button type="primary" size="large" class="header">手机<span>></span></mt-button>
            <mt-button type="primary" size="large" class="header">邮箱<span>></span></mt-button>
        </div>
        <div>
            <div class="inc">
                <p>安全设置</p> 
            </div>
            <mt-button type="primary" size="large" class="header">登录密码<span>></span></mt-button>
        </div>
        <div>
            <div class="inc">
                <p>权限设置</p>
            </div>
            <mt-button type="primary" size="large" class="header">消息通知设置<span>></span></mt-button>
        </div>
        <br>
        <router-link to="/register">
            <mt-button type="primary" size="large" class="button">注册账号</mt-button>
        </router-link>
    </div>   
</template>
<style>
.bj{
    background: #fafafa !important;
}
.head{
    background-color: #FFFFFF !important;
    color: black !important;
    font-size: 18px;
}
.header{
    background-color: #ffffff !important;
    color: black !important;
    font-size: 16px !important;
    border-radius:0 !important;
    margin-top: 2px !important;
    margin-bottom: 2px !important;
    text-align: left !important;
    /* box-shadow: #FAFAFA 5px !important; */
    padding-left: 10px;
    position: relative;
}
.header span{
   position: absolute;
   right: 10px;
}
.inc p{
    margin: 10px auto !important;
    padding-left: 10px !important;
    background-color: #fafafa !important;
    margin-right:300px !important;
    font-size: 16px !important;
}
.button{
    background-color: #ffffff !important;
    color: black !important;
}
</style>
<script>
export default {
    data(){
        return{
           
        }
    },
    mounted(){
        
    }
}
</script>
