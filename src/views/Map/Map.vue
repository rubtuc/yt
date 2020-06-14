<template>
  <div>
    <div class="shop-nav">
      <p class="nav-side" style="text-align: left"></p>
      <p class="nav-center">易碳</p>
      <p class="nav-side" style="text-align: right;margin-right: 13px"></p>
    </div>
    <div></div>
    <div class="map" id="container">
      <div class="map-cell">
        <div>
          <div class="search-route">
            <div class="flex-row" >
              <div class="start-point"></div>
              <input class="input" placeholder="我的位置" id="tipinput" style="border-bottom: 1px solid #95959545" v-model="from">
            </div>
            <div class="flex-row">
              <div class="end-point"></div>
              <input class="input" placeholder="目的地" id="tipinput1" style="border-bottom: 1px solid #95959545;position: relative" v-model="to">
              <van-button type="primary" class="search" size="small" @click="goToSecond">搜索</van-button>
              <img src="../../../images/交换.png" class="reverse-icon" @click="reverse">

            </div>
          </div>
          <div class="btn-seek flex-row">
            <div @click="goToStation">
              <img src="../../../images/车站.png" class="seek-icon">
              <p class="seek-text">站点查询</p>
            </div>
            <div @click="goToRecord">
              <img src="../../../images/线路.png" class="seek-icon">
              <p class="seek-text">行程记录</p>
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
      mounted(){
        var map = new AMap.Map("container", {
          resizeEnable: true,
          zoom: 13
        });
        //获取用户所在城市信息
        function showCityInfo() {
          //实例化城市查询类
          var citysearch = new AMap.CitySearch();
          //自动获取用户IP，返回当前城市
          citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.city && result.bounds) {
                var cityinfo = result.city;
                var citybounds = result.bounds;
                document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                //地图显示当前城市
                map.setBounds(citybounds);
              }
            } else {
              document.getElementById('info').innerHTML = result.info;
            }
          });
        }
        showCityInfo();
        //输入提示
        var autoOptions = {
          input: "tipinput"
        };
        var auto = new AMap.Autocomplete(autoOptions);
        var placeSearch = new AMap.PlaceSearch({
          map: map
        });  //构造地点查询类
        AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
        function select(e) {
          placeSearch.setCity(e.poi.adcode);
          placeSearch.search(e.poi.name);  //关键字查询查询
        }

        var autoOptions = {
          input: "tipinput1"
        };
        var auto = new AMap.Autocomplete(autoOptions);
        var placeSearch = new AMap.PlaceSearch({
          map: map
        });  //构造地点查询类
        AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
        function select(e) {
          placeSearch.setCity(e.poi.adcode);
          placeSearch.search(e.poi.name);  //关键字查询查询
        }
      },
      data(){
          return{
            from:"",
            to:""
          }
      },
      methods:{
        reverse(){
          console.log(this.from)
          var f=this.from;
          var t=this.to;
          this.from=t
          this.to=f;
        },
        goToSecond(){
          console.log("map",this.from)
          this.$router.push({
            name:'MapSecond',
            params: {
              from: this.from,
              to:this.to
            }});
        },
        goToRecord(){
          this.$router.push('/record')
        },
        goToStation(){
          this.$router.push('/map/station')
        }
      }
    }
</script>

<style lang="less" scoped>
  /deep/.van-button--primary {
    width: 50px;
    height: 20px;
    background-color: #87c67d;
    border-radius: 3px;
    border: 1px solid #ffffff;
  }
  /deep/.amap-logo{
    display: none;
  }
  /deep/.amap-copyright{
    opacity:0;
  }
  /deep/.amap-logo img {
    width: 73px!important;
    height: 20px!important;
    border: 0;
    vertical-align: baseline!important;
    opacity: 0;
  }
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
  input::-webkit-input-placeholder {
    font-size: 16px;
    color: #cdcdcd;
  }
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
    outline:medium;
    font-size: 16px;
    color: #000000;
    padding: 0 0 10px 0;
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
  height: calc(100vh - 50px);
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
  width: 34px;
  height: 17px;
  font-family: MicrosoftYaHei;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #626363;
}
.nav-side{
  width: 21px;
  height: 11px;
  font-family: MicrosoftYaHei;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #626363;
}
.shop-nav{

  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
