<template>
<div style="background-color: #f6f6f6;height: 100vh">
  <div class="shop-nav">
    <p class="back" @click="goBack">返回</p>
    <p class="nav-center" @click="goBack">积分明细</p>
  </div>
  <div v-for="item in CarbonList" :key="item.id" class="carbon-cell">
    <div class="carbon-content">
      <p class="carbon-attr1">获得碳积分</p><p class="carbon-date">{{item.date}}</p>
    </div>
    <p class="carbon-value">{{item.value}}</p>
    <div class="carbon-content">
      <p class="carbon-attr2">积分来源</p>
      <p class="carbon-detail">{{item.city}} ({{item.detail}})</p>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "CarbonRecord",
      data(){
          return{
            CarbonList:[{
              id: 1,
              date:"6月1日",
              value:"4",
              detail: "火车东站--武林广场站",
              city:"杭州地铁-乘车"
            },
              {
                id: 1,
                date:"6月1日",
                value:"4",
                detail: "火车东站--武林广场站",
                city:"杭州地铁-乘车"
              }]
          }
      },
      methods:{
        goBack(){
          this.$router.push('/');
        }
      }
    }
</script>

<style scoped>
  .carbon-content{
    display: flex;
    justify-content: space-between;
    margin: 0 19px 0 19px;
  }
  .carbon-date{
    font-size: 16px;
    color: #666666;
    opacity: 0.9;
  }
  .carbon-detail{
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #000000;
  }
  .carbon-attr1{
    font-size: 16px;
    color: #000000;
  }
  .carbon-attr2{
    font-size: 14px;
    color: #666666;
    opacity: 0.9;
  }

  .carbon-cell{
    margin: 12px;
    padding: 15px 0 33px 0;
    background-color: white;
  }
  .carbon-value{
    font-size: 36px;
    color: #000000;
    margin: 31px 0 49px 0;
  }
  .back{
    font-size: 12px;
    margin: 17px 0 13px 13px;
    color: #4271dc;
  }
  .shop-nav{
    display: flex;
    background-color: white;
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
