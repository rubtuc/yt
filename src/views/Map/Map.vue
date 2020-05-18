<template>
  <div>
    <div class="shop-nav">
      <p class="nav-side" style="text-align: left">返回</p>
      <p class="nav-center">易碳</p>
      <p class="nav-side" style="text-align: right;margin-right: 13px">签到</p>
    </div>
    <div></div>
    <div class="map" id="container">
      <div class="map-cell">
        <div>
          <div class="search-route">
            <div class="flex-row" >
              <div class="start-point"></div>
              <input class="input" placeholder="我的位置" id="tipinput" style="border-bottom: 2px solid #95959545">
            </div>
            <div class="flex-row">
              <div class="end-point"></div>
              <input class="input" placeholder="目的地" id="tipinput1" style="border-bottom: 2px solid #95959545;position: relative">
              <van-button type="primary" class="search" size="small">搜索</van-button>
              <img src="../../../images/cat.jpg" class="reverse-icon">

            </div>
          </div>
          <div class="btn-seek flex-row">
            <div>
              <img src="../../../images/cat.jpg" class="seek-icon">
              <p class="seek-text">站点查询</p>
            </div>
            <div>
              <img src="../../../images/cat.jpg" class="seek-icon">
              <p class="seek-text">车站信息</p>
            </div>
          </div>
      </div>
        <div></div>

      </div>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>

import TabBar from '../../components/TabBar'
    export default {
        name: "Map",
      components:{
          TabBar
      },
      data(){
          return{

          }
      }
    }
</script>

<style lang="less" scoped>
  #container {
    width: 100%;
    height: 28.7vh;
    /deep/.anchorBL{
      display:none;
    }
    /deep/.BMap_cpyCtrl
    {
      display:none;
    }
  }
</style>
<style scoped>
  #container {
    background-color: #42b983;
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  .search{
    z-index: 1;
    position: absolute;
    right: 75px;
  }
  .seek-icon{
    width: 24px;
    height: 24px;
  }
  .btn-seek{
    justify-content: space-around;
    margin:22px 0 18px 0
  }
  .seek-text{
    font-size: 14px;
    color: #000000;
    margin-top: 9px;

  }
  .flex-row{
    display: flex;
    align-items: center;
  }
  .input{
    width: 249px;
    margin: 22px 0 9px 13px;
    border:none;
    outline:medium
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
  .reverse-icon{
    width: 36px;
    height: 36px;
    border: solid 2px #000000;
    border-radius: 50%;
    margin: 0 0 12px 14px;
  }
.map{
  background-color: #42b983;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
}
p{
  margin: 0;
}
  .map-cell{
    z-index: 1;
    padding: 0 19px 0 19px ;
    background-color: #ffffff;
    box-shadow: inset 0px 1px 5px 0px
    rgba(36, 19, 16, 0.32);
    border-radius: 3px;
    margin-top: 315px;
    position: absolute;
  }
.nav-center{
  flex: 1;
  font-size: 17px;
  color: #626363;
}
.nav-side{
  font-size: 12px;
  margin: 17px 0 13px 13px;
  color: #4271dc;
  flex: 1
}
.shop-nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
