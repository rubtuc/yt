<template>
  <div style="background-color: ivory;height: 100vh">
    <div class="top-bg">
      <img src="../../images/cat.jpg" class="my-icon" style="margin: 17px 15px 15px 0;" >
      <div class="center-cell">
        <div class="second-cell my">
          <div class="my-cell">
            <img src="../../images/cat.jpg" class="portrait">
            <div>
              <p class="username">{{username}}</p>
              <div class="phone">{{phone}}</div>
            </div>
          </div>
          <div class="score-cell" style="display: flex;align-items: center;justify-content: flex-end;margin-top: 12px">
            <img src="../../images/cat.jpg" class="my-icon" style="margin-right: 0">
            <p style="margin: 0 39px 0 7px">{{score}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="center-cell" style="margin-top: 70px">
      <div class="second-cell" style="height: auto;padding-top: 0;padding-bottom: 0">
        <div class="info-cell">
          <img src="../../images/cat.jpg" class="my-icon">
          <p class="my-info">个人信息</p>
        </div>
        <div class="info-cell">
          <img src="../../images/cat.jpg" class="my-icon">
          <p class="my-info">钱包</p>
        </div>
        <div class="info-cell">
          <img src="../../images/cat.jpg" class="my-icon">
          <p class="my-info">订单</p>
        </div>
        <div class="info-cell">
          <img src="../../images/cat.jpg" class="my-icon">
          <p class="my-info">帮助</p>
        </div>
        <div class="info-cell">
          <img src="../../images/cat.jpg" class="my-icon">
          <p class="my-info">设置</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Person",
      data(){
          return{
            username:"骗你是小猪",
            phone:"13588809876",
            score:'99'
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
    font-size: 13px;
    color: #ffffff;
    width: 84px;
    height: 17px;
    background-color: #a7db9f;
    border-radius: 8px;
  }

  .info-cell{

    display: flex;
    align-items: center;
    margin: 0;
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
