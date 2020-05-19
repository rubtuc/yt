<template>
  <div>
    <div class="shop-nav">
      <p class="back">返回</p>
      <img src="../../images/购物车.png" class="shop-icon">
    </div>
    <div class="shop-header">
      <p class="shop-header-text1">我的碳积分</p>
      <p class="shop-header-text2">{{score}}</p>
    </div>
      <van-tabs v-model="active" title-active-color="#87c67d" title-inactive-color="#aaaaaa" color="#87c67d">
        <img src="../../images/timg.jpg" class="shop-banner">
        <van-tab title="全部" class="good-cell">
          <div v-for="item in shopList" :key="item.id">
            <img src="../../images/cat.jpg" class="good-img">
            <p class="good-name">{{item.goodName}}</p>
            <div class="good-bottom">
              <p class="good-price">{{item.goodPrice}}分</p>
              <van-button type="primary" size="mini">兑换</van-button>
            </div>
          </div>
        </van-tab>
        <van-tab title="食品" class="good-cell">
          <div v-for="item in shopList" :key="item.id">
            <img src="../../images/cat.jpg" class="good-img">
            <p class="good-name">{{item.goodName}}</p>
            <div class="good-bottom">
              <p class="good-price">{{item.goodPrice}}分</p>
              <van-button type="primary" size="mini">兑换</van-button>
            </div>
          </div>
        </van-tab>
        <van-tab title="水果" class="good-cell">
          <div v-for="item in shopList" :key="item.id">
            <img src="../../images/cat.jpg" class="good-img">
            <p class="good-name">{{item.goodName}}</p>
            <div class="good-bottom">
              <p class="good-price">{{item.goodPrice}}分</p>
              <van-button type="primary" size="mini">兑换</van-button>
            </div>
          </div>
        </van-tab>
        <van-tab title="流量包" class="good-cell">
          <div v-for="item in shopList" :key="item.id">
            <img src="../../images/cat.jpg" class="good-img">
            <p class="good-name">{{item.goodName}}</p>
            <div class="good-bottom">
              <p class="good-price">{{item.goodPrice}}分</p>
              <van-button type="primary" size="mini">兑换</van-button>
            </div>
          </div>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
    export default {
        name: "Shop",
        data(){
            return{
              active:2,
              score:111,
              shopList:[
                {id:1,img:'../../images/cat.jpg',goodName:"江山猕猴桃5斤",goodPrice:"666"},
                {id:1,img:'../../images/cat.jpg',goodName:"江山猕猴桃5斤",goodPrice:"666"}
              ]
            }
        },
    }
</script>

<style scoped>
  .shop-banner{
    width: 375px;
    height: 144px;
    margin-top: 10px;
  }
  .good-cell{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
  .good-img{
    width: 160px;
    height: 107px;
  }
  .good-name{
    font-size: 11px;
    color: #464646;
    margin: 16px 0 14px 7px;
  }
  .good-bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 7px;
  }
  .good-price{
    font-size: 17px;
    color: #ff4200;
    opacity: 0.91;
    margin: 0;
  }
  .shop-icon{
    width: 18px;
    height: 16px;
    margin-right: 15px;
  }
  .back{
    font-size: 12px;
    margin: 17px 0 13px 13px;
    color: #4271dc;
  }
  .shop-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .shop-header-text1{
    font-size: 15px;
    color: #fefefe;
    margin: 0 0 20px 0;
  }
  .shop-header-text2{
    font-size: 21px;
    font-weight: bold;
    color: #fefefe;
    margin: 0;
  }
  .shop-header{
    padding: 24px 0 22px 0;
    width: 100vw;
    background-color: #87c67d;
  }

</style>
