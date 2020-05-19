<template>
    <div style="text-align: center">
      <div class="shop-nav">
        <p class="back">返回</p>
        <p class="shop-icon">支付明细</p>
      </div>
      <img src="../../images/成功.png" class="pay-img">
      <p class="t1">支付成功</p>
      <p class="t2">地铁出行</p>
      <div>   <span style="font-size: 24px">￥</span><span class="t3">{{price}}</span></div>

      <van-button type="primary" style="margin-top: 184px">订单详情</van-button>
    </div>
</template>

<script>
    export default {
        name: "Pay",
        data(){
          return{
            price:"4.0"
          }
      }
    }
</script>

<style scoped lang="less">
  /deep/.van-button--primary{
    width: 103px;
    height: 35px;
    background-color: #87c67d;
    border-radius: 3px;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #000000;
    border: 1px solid #ffffff;
  }
  .pay-img{
    width: 81px;
    height: 81px;
    border-radius: 50%;
    margin: 63px 0 22px 0;
  }
  .t1{
    font-size: 25px;
    color: #87c67d;
    text-align: center;
  }
  .t2{
    font-size: 13px;
    color: #000000;
    margin: 37px 0 23px 0;
    text-align: center;
  }
  .t3{
    font-size: 28px;
    color: #000000;
    font-weight: bold;
    text-align: center;
  }
  .shop-icon{
    font-size: 12px;
    color: #87c67d;
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
</style>
