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
        <van-tab title="全部">
            <div v-for="item in shopList" :key="item.goods_id" class="cell">
                <img :src="item.good_images" class="good-img">
                <p class="good-name">{{item.good_name}}</p>
                <div class="good-bottom">
                  <p class="good-price">{{item.good_value}}分</p>
                  <van-button type="primary" size="mini">兑换</van-button>
                </div>
              </div>
        </van-tab>
        <van-tab title="食品">
          <div v-for="item in shopList1" :key="item.goods_id" class="cell">
            <img :src="item.good_images" class="good-img">
            <p class="good-name">{{item.good_name}}</p>
            <div class="good-bottom">
              <p class="good-price">{{item.good_value}}分</p>
              <van-button type="primary" size="mini">兑换</van-button>
            </div>
          </div>
        </van-tab>
        <van-tab title="日用品">
          <div v-for="item in shopList2" :key="item.goods_id" class="cell">
            <img :src="item.good_images" class="good-img">
            <p class="good-name">{{item.good_name}}</p>
            <div class="good-bottom">
              <p class="good-price">{{item.good_value}}分</p>
              <van-button type="primary" size="mini">兑换</van-button>
            </div>
          </div>
        </van-tab>
        <van-tab title="流量包">
          <div v-for="item in shopList3" :key="item.goods_id" class="cell">
            <img :src="item.good_images" class="good-img">
            <p class="good-name">{{item.good_name}}</p>
            <div class="good-bottom">
              <p class="good-price">{{item.good_value}}分</p>
              <van-button type="primary" size="mini">兑换</van-button>
            </div>
          </div>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import { getGoods,getGoodsByType } from '@/api/goods';
    export default {
        name: "Shop",
        created(){
            getGoods()
              .then((res) => {
                console.log("111")
                res.forEach((item) => {
                  console.log(item.good_images)
                  this.shopList.push({
                    goods_id: item.record_id,
                    good_name: item.good_name,
                    good_value: item.good_value,
                    good_images: require('../../images/'+item.good_images),
                  });
                });
              })
          getGoodsByType(1).then((res)=> {
            res.forEach((item) => {
              console.log(item.good_images)
              this.shopList1.push({
                goods_id: item.record_id,
                good_name: item.good_name,
                good_value: item.good_value,
                good_images: require('../../images/'+item.good_images),
              });
            });
          })
          getGoodsByType(0).then((res)=> {
            res.forEach((item) => {
              console.log(item.good_images)
              this.shopList2.push({
                goods_id: item.record_id,
                good_name: item.good_name,
                good_value: item.good_value,
                good_images: require('../../images/'+item.good_images),
              });
            });
          })
          getGoodsByType(2).then((res)=> {
            res.forEach((item) => {
              console.log(item.good_images)
              this.shopList3.push({
                goods_id: item.record_id,
                good_name: item.good_name,
                good_value: item.good_value,
                good_images: require('../../images/'+item.good_images),
              });
            });
          })
        },
        data(){
            return{
              active:2,
              score:111,
              shopList:[],
              shopList1:[],
              shopList2:[],
              shopList3:[]
            }
        },
    }
</script>

<style scoped lang="less">
  .van-tabs__content{
    background-color: rgb(246,246,246);
  }
  .van-tab__pane, .van-tab__pane-wrapper {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
    /* justify-content: center; */
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    margin-left: 6px;
  }
  .cell{
    width: 180px;
    margin:4px 4px 0 0;
    padding: 8px 10px 14px 10px;
  }
  .shop-banner{
    width: 375px;
    height: 144px;
    margin-top: 10px;
  }

  .good-img{
    width: 160px;
    height: 107px;
  }
  .good-name{
    font-size: 11px;
    color: #464646;
    text-align: left;
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
