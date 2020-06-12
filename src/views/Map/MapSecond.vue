<template>
    <div class="body">
      <div style="display: flex;margin-top: 8px">
        <img src="../../../images/返 回.png" class="back" @click="backToMap">
        <div class="second-search">
          <div>
            <div class="flex-row" >
              <div class="start-point"></div>
              <input class="input" placeholder="我的位置" id="tipinput" style="border-bottom: 2px solid #95959545">
            </div>
            <div class="flex-row">
              <div class="end-point"></div>
              <input class="input" placeholder="目的地" id="tipinput1" style="position: relative">
            </div>
          </div>
          <img src="../../../images/交换.png" class="reverse-icon">
        </div>

      </div>
      <div class="route-section">
        <div v-for="item in recomendList" :key="item.id" style="height: 75px">
          <div class="station">
            <div class="station-num">{{item.from}}号线</div>
            <img src="../../../images/右.png" style="width: 9px;
	height: 13px;margin: 0 7px">
            <div class="station-num">{{item.to}}号线</div>
          </div>
          <p class="recomend-info">{{item.time}}*{{item.price}}*{{item.meter}}</p>
        </div>
      </div>
    </div>
</template>

<script>
  import { Trip } from '@/api/trip';
    export default {
      name: "MapSecond",
      created(){
        const Buttons = this.$refs.recordNavButton.getElementsByTagName('button');
      },
      data() {
        return {
          recomendList: [{
            id: 0,
            from: "1",
            to: "2",
            time: "1.5h",
            meter: "10.9km",
            price: "6元"
          },
            {
              id: 1,
              from: "1",
              to: "2",
              time: "1.5h",
              meter: "10.9km",
              price: "6元"
            },
            {
              id: 1,
              from: "1",
              to: "2",
              time: "1.5h",
              meter: "10.9km",
              price: "6元"
            }],
        }
      },
      methods:{
        backToMap(){
          this.$router.push('/map')
        }
      }
    }
</script>

<style scoped>
  .back{
    width: 8px;
    height: 12px;margin-left: 4%;margin-right:11px;margin-top:19px;
  }
  .recomend-info{
    text-align: left;
    font-size: 12px;
    color: #818181;
  }
  .station-num{
    width: 55px;
    height: 25px;
    border-radius: 13px;
    font-size: 13px;
    color: #ffffff;
    background-color: #00c62f;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .station{
    display: flex;
    align-items: center;
    margin: 0;
  }
  .route-section{
    margin-top: 11px;
    margin-left: 8.2%;
    height: 75px;
    padding: 15px 0 15px 0;
  }
  .body{
    width: 92%;
  }
  .second-search{
    flex: 1;
    background-color: #ebe7e7;
    border-radius: 10px;
    opacity: 0.43;
    display: flex;
    padding: 0 22px 0 12px;
    justify-content: center;
    align-items: center;
  }
  .flex-row{
    display: flex;
    align-items: center;
  }
  .search{
    z-index: 1;
    position: absolute;
    right: 75px;
  }
  .start-point{
    width: 8px;
    height: 8px;
    background-color: #87c67d;
    border-radius: 50%;
  }
  .end-point{
    width: 8px;
    height: 8px;
    background-color: #f2404d;
    border-radius: 50%;
  }
  .input{
    width: 249px;
    margin: 10px 0px 0px 13px;
    border:none;
    outline:medium;
    padding: 0 0 10px 0;
    background-color: transparent;
  }
  .reverse-icon{
    width: 17px;
    height: 16px;
    border-radius: 50%;
    margin: 0 0 12px 14px;
  }
</style>
