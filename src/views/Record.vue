<template>
  <div style="background-color: #f6f6f6;height: 100vh">
<!--    <div class="nav">-->
<!--      <p class="back" @click="backToMap"><返回</p>-->
<!--      <p class="nav-center">行程记录</p>-->
<!--    </div>-->
    <div class="shop-nav">
      <p class="back" @click="backToMap">返回</p>
      <p class="nav-center" @click="backToMap">行程记录</p>
    </div>
  <div v-for="item in HistoryList" :key="item.trip_no" style="background-color: white">
    <div style="display: flex;justify-content: flex-start;margin-left: 4%" >
      <div style="text-align: center;">
        <img src="../../images/进.png" style="width: 22px;height: 22px;margin: 20px 0;">
      </div>
      <van-cell :title="item.in_station_name"  size="large" :label="item.in_time" />
    </div>
    <div style="display: flex;justify-content: flex-start;margin-left: 4%" >
      <div style="text-align: center;">
        <img src="../../images/出.png" style="width: 22px;height: 22px;margin: 20px 0;">
      </div>
      <van-cell :title="item.out_station_name"  size="large" :label="item.out_time" />
    </div>
  </div>
  </div>
</template>

<script>
import { Trip } from '../api/trip'
    export default {
        name: "Record",
      data(){
          return{
            HistoryList:[
            //   {
            //   id:0,
            //   station_in: "杭州东站",
            //   routeInfo_in: "2019-10-23 17:54:23",
            //   station_out: "杭州东站",
            //   routeInfo_out: "2019-10-23 17:54:23",
            // },
              // {
              //   id:0,
              //   station: "杭州东站",
              //   routeInfo: "2019-10-23 17:54:23",
              //   url: require('../../images/出.png')
              // }
              ]
          }
      },
      created(){
          Trip().then((res)=>{
            console.log(res);
              this.HistoryList.push(...res);
          })
      },
      methods:{
        backToMap(){
          this.$router.push('/map')
        },
        goBack(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped lang="less">
  .van-cell--large .van-cell__title {
    font-size: 16px;
    text-align: left;
  }
  .van-icon__image {
    width: 22px;
    height: 22px;
    /* object-fit: contain; */
  }
  .van-cell__title, .van-cell__value {
     -webkit-box-flex: 1;
     -webkit-flex: 1;
     flex: none;
  }
  .back{
    font-size: 12px;
    margin: 17px 0 13px 13px;
    color: #4271dc;
  }
  .shop-nav{
    background-color: #f6f6f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .nav-center{
    position: absolute;
    text-align: center;
    width: 100%;
    font-size: 14px;
    color: #000000;
    font-weight: bold;
  }
</style>
