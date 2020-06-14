<template>
  <div style="height: 100vh">
    <div class="top-bg">
      <img src="../../images/通知.png" class="my-icon" style="margin: 17px 15px 15px 0;" @click="goToNotice">
      <div class="center-cell">
        <div class="second-cell my">
          <div class="my-cell">
            <img :src="user_image_path" class="portrait">
            <div>
              <p class="username">{{user_name}}</p>
              <div class="phone">{{mobile_phone}}</div>
            </div>
          </div>
          <div class="score-cell" style="display: flex;align-items: center;justify-content: flex-end;margin-top: 12px">
            <img src="../../images/积分.png" class="my-icon" style="margin-right: 0">
            <p style="margin: 0 39px 0 7px">{{value_count}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="center-cell" style="margin-top: 70px">
      <div class="second-cell" style="height: auto;padding-top: 0;padding-bottom: 0">
        <div class="info-cell">
          <img src="../../images/信息.png" class="my-icon">
          <p class="my-info">个人信息</p>
        </div>
        <div class="info-cell">
          <img src="../../images/钱包.png" class="my-icon">
          <p class="my-info">钱包</p>
        </div>
        <div class="info-cell">
          <img src="../../images/订单管理.png" class="my-icon">
          <p class="my-info">订单</p>
        </div>
        <div class="info-cell">
          <img src="../../images/帮助.png" class="my-icon">
          <p class="my-info" @click="goToHelp">帮助</p>
        </div>
        <div class="info-cell">
          <img src="../../images/aj_设置.png" class="my-icon">
          <p class="my-info">设置</p>
        </div>
      </div>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import { getUserById, getValueById } from '../api/user'
  import TabBar from '../components/TabBar'
    export default {
        name: "Person",
      components:{
        TabBar
      },
      data(){
          return{
            user_name:"骗你是小猪",
            mobile_phone:"13588809876",
            value_count:'99',
            user_id:10005
          }
      },
      created(){
          getUserById(this.user_id)
            .then((res) => {
              console.log("222",res[0].user_name)
              this.user_name=res[0].user_name;
              this.mobile_phone=res[0].mobile_phone
              this.user_image_path=require('../../images/' + res[0].user_image_path)

            })
        getValueById(this.user_id)
          .then((res) => {
            this.value_count=res[0].value_count;
          })
      },
      methods:{

        goToHelp(){
          this.$router.push('/search')
        },
        goToNotice(){
          this.$router.push('/notice')
        }
      }
    }
</script>

<style scoped>
  .center-cell{
    display: flex;
    justify-content: center;
  }
  .top-bg{
    text-align: right;
    width: 375px;
    height: 133px;
    background-color: #87c67d;
    position: relative;
  }
  .my{
    display: flex;
    flex-direction: column;
  }
  .my-cell{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

  }
  .portrait{
    width: 67px;
    height: 67px;
    border-radius: 50%;
    margin:  0 11px 0 25px;
  }
  .username{
    width: 87px;
    height: 18px;
    font-family: MicrosoftYaHei;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #000000;
    margin-top: 0;
  }
  .phone{
    margin-top: 11px;
    font-size: 13px;
    color: #ffffff;
    padding: 1px 7px 1px 7px;
    background-color: #a7db9f;
    border-radius: 15px;
  }

  .info-cell{
    padding: 21px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid  #aaaaaa59;
  }
  .my-icon{
    width: 16px;
    height: 19px;
    margin: 0 15px 0 15px;
  }
  .my-info{
    font-size: 13px;
    color: #646464;
  }

</style>
