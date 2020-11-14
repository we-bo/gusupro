<template>
    <div>
        <div >
            <img class="info_imgs"
            @click="addEvent" src="../assets/gs_zjt.png" >
            <img class="div_slort" :src="info.images" alt="">
        </div>
        <div>
            <span>
                <img class="span_img" :src="info.avatar" alt="">
            </span>
            <span class="span_info">{{info.nickname}}</span>
        </div>
        <div class="sort">
            <router-link to="javascript:;">聊天</router-link>
            <p>¥2400</p>
            <button>立即预约</button>
        </div>
    </div>
</template>
<style>
.div_slort{
    width: 375px;
}
.div_slort>img{
    width: 100%;
    height: 150px;
}
.span_img{
    margin-top: 12px;
    margin-left: 20px;
    border-radius: 25px;
    float: left;
}
.span_info{
    margin-top: 25px;
    margin-left: 15px;
    border-radius: 25px;
    float: left;
}
.info_imgs{
    position: absolute;
    top: -2px;
    left: -4px;
    display: block;
    width: 50px;

}
.sort{
    width: 100%;
    background-color: blueviolet;
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

<script>
export default {
    data(){
        return{
            info:{},
        }
    },
    methods:{
        addEvent(){
            this.$router.push('/');
        }
    },
    mounted(){
        //获取地址栏中的ID，然后再向WEB服务器发送请求
        let id=this.$route.params.id;
        console.log(id);
        //向web服务器发送请求
        this.axios.get('/article?id=' + id).then(res=>{
            this.info=res.data.results;
            console.log(this.info);
        })
    }
}
</script>
