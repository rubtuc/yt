<template>
    <div style="background-color: #fefefe">
      <div class="nav-help">
        <span class="back" @click="goBack">返回</span>
        <span style="font-weight: bold">消息</span>
      </div>
      <div v-for="item in noticeList" :key="item.id">
        <p>{{item.time}}</p>
        <div class="flex-row">
          <img src="../../images/cat.jpg" class="notice-img">
          <div class="message">{{item.message}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Notice",
      data(){
          return{
            noticeList:[
              {id:1,message:"这里是一条信息",time:"14:56"},
              {id:2,message:"这里是一条信息",time:"14:56"},
            ]
          }
      },
      methods:{
          goBack(){
            this.$router.push("/person")
          }
      }

    }
</script>

<style scoped>
  p{
    margin: 0;
  }
  .message{
    padding: 15px;
    background-color: #ffffff;
    border-radius: 3px;
  }
  .notice-img{
    width: 41px;
    height: 39px;
    border-radius: 50%;
  }
  .back{
    font-size: 12px;
    margin: 0 0 0px 15px;
    color: #4271dc;
    position: absolute;
    left: 0;
  }
  .nav-help{
    font-size: 13px;
    color: #000000;
    margin: 17px 0 20px 0;
    text-align: center;

  }
  .flex-row{
    display: flex;
    margin-left: 15px;
    margin-bottom: 68px;
  }
</style>
