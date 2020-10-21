<template>
    <div class="sort">
        <div class="first_div">
            <p>消息</p>
        </div>
        <div class="double_div">
            <img src="../assets/xiaoxi.png" alt="">
            <span class="first_span">系统通知</span>
            <span class="double_span">暂无系统通知</span>
        </div>
        <div class="double_div" id="dives">
            <img src="../assets/giftbag.png" alt="">
            <span class="first_span">优惠处销</span>
            <span class="double_span">暂无优惠处销</span>
        </div>
        <div class="close">
            <img src="../assets/gs_icon7.png" alt="">
            <span>暂无聊天信息</span>
        </div>
        <bottom></bottom>
    </div>  
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.sort{
    width: 100%;
    height: 666px;
    background-color: #f5f5f5;
    z-index: 2;
}
.first_div{
    width: 100%;
    height: 35px;
    background-color: #fff;
    border-bottom:1px solid rgba(50, 55, 70, 0.1); 
    line-height: 35px;
}
#dives{
    margin-top: 0px;
}
.double_div{
    width: 100%;
    height: 50px;
    margin-top: 8px;
    position: relative;
    border-bottom: 1px solid rgba(50, 55, 70, 0.1);
    background-color: #fff !important;
}
.double_div>img{
    width: 10%;
    height: 37px;
    margin-top: 7px;
    float: left;
    margin-left: 15px;
    
}
.first_span{
    position: absolute;
    top: 4px;
    left: 65px;
}
.double_span{
    position: absolute;
    top: 26px;
    left: 65px;
    color: rgba(50, 55, 70, 0.6);
    font-size: 12px;
}
.close img{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
.close>span{
    font-size: 14px;
    font-weight: bold !important;
    color: #000 !important;
}
</style>
<script>
import Bottom from '../components/Footer'
export default {
    data(){
        return{
         
        }
    },
    methods:{
        giao(){
           
        }
    },
    computed:{


    },
    mounted(){

    },
    components:{Bottom}
}
</script>