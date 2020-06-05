<template>
  <div class="home">
    <div class="detail" @click="goToCarbon" >积分明细</div>
    <div onload="init()" class="canvas">

    <canvas id="demoCanvas" width="375" height="200px" ></canvas>
    </div>
      <div class="top-cell">
        <div>

          <div class="circle">
            {{score}}
          </div>
        </div>
        <p class="tip">减碳行动有些携懈怠了哦</p>

<!--        <easel-canvas width="400" height="300">-->
<!--          <easel-shape-->
<!--            :x="200"-->
<!--            :y="150"-->
<!--            form="circle"-->
<!--            fill="blue"-->
<!--            :dimensions="20"-->
<!--            :align="['center','center']"-->
<!--          >-->
<!--          </easel-shape>-->
<!--        </easel-canvas>-->
      </div>

      <div style="display: flex;justify-content: center">
        <div class="second-cell">
          <p class="title">积分权限</p>
          <div class="second-content">
            <img src="../../images/兑换.jpg" class="entry" @click="goToShop">
            <img src="../../images/游戏.jpg" class="entry">
          </div>
        </div>
      </div>
      <div style="display: flex;justify-content: center;margin-top: 10px">
        <div class="second-cell" style="height: auto;">
        <div class="second-title">
          <p class="title">我的碳形象</p>
          <van-button plain hairline type="primary" size="small">地区排名</van-button>
        </div>
        <div v-for="item in rankList" :key="item.user_id" class="rank-cell">
          <div class="user-info">
            <p class="user-id">{{item.user_rank}}</p>
            <img :src="item.user_image_path" class="user-img">
            <p class="user">{{item.user_name}}</p>
          </div>
          <div class="user" style="margin-right: 24px">{{item.value_count}}</div>
        </div>
        </div>
      </div>
      <TabBar></TabBar>
    </div>

</template>

<script>
  import { getValue } from '../api/user'
import TabBar from '../components/TabBar'
function init() {
  //遮罩
  // 这里写代码
  // var stage = new createjs.Stage("demoCanvas");
  // var circle = new createjs.Shape();
  // circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  // circle.x = 100;
  // circle.y = 100;
  // stage.addChild(circle);
  // stage.update();

  var stage = new createjs.Stage("demoCanvas");
  var image=new Image();
  image.src="../../images/cat.jpg";
  image.onload=handleImageLoad;
  function handleImageLoad(e) {
    var b = new createjs.Bitmap(e.target);
    stage.addChild(b);
    var Mask = new createjs.Shape();
    Mask.graphics.beginFill("red");
    Mask.graphics.drawRect(21, 23);
    Mask.x = 100;
    Mask.y = 100;
    b.mask = Mask;
    stage.update();
  }

}
function handleImageLoad(e) {
  var b = new createjs.Bitmap(e.target);
  stage.addChild(b);
  var Mask = new createjs.Shape();
  Mask.graphics.beginFill("red");
  Mask.graphics.drawRect(21, 23);
  Mask.x = 100;
  Mask.y = 100;
  b.mask = Mask;
  stage.update();
}
// @ is an alias to /src
export default {
  name: 'Home',
  components:{
    TabBar
  },
  mounted(){
    init();
  },
  created() {
    getValue()
      .then((res) => {
        console.log(("222"))
        res.forEach((item) => {
          console.log(item.user_name)
          this.rankList.push({
            user_id: item.user_id,
            value_count: item.value_count,
            user_rank: item.user_rank,
            user_name: item.user_name,
            user_image_path: require('../../images/' + item.user_image_path),
          });
        })
      })


    // for (let i = 0; i < this.rankList.length; i++) {
    //   getUserById(this.rankList[i].user_id).then((res) => {
    //     var rank = JSON.parse(JSON.stringify([res][0]));
    //     console.log("777",rank.user_name)
    //     console.log("555",JSON.parse(JSON.stringify([res][0])))
    //         res.forEach((item) => {
    //           //this.rankList[i].user_image_path=require('../../images/' + item.user_image_path),
    //           this.rankList[i].user_name = item.user_name;
    //           console.log("999",this.rankList[i])
    //         });
    //       })
    //     }
    //   console.log("666",this.rankList)
    //   });
    var stage = new createjs.Stage("demoCanvas");
    var image = new Image();
    image.src = "../../images/cat.jpg";
    image.onload = handleImageLoad;

    function handleImageLoad(e) {
      var b = new createjs.Bitmap(e.target);
      stage.addChild(b);
      var Mask = new createjs.Shape();
      Mask.graphics.beginFill("red");
      Mask.graphics.drawRect(21, 23);
      Mask.x = 100;
      Mask.y = 100;
      b.mask = Mask;
      stage.update();
    }
  },
  data() {
    return {
      score: 88,
      rankList:[]
    }
  },
  methods:{
    goToShop(){
      this.$router.push('/shop');
    },
    goToCarbon(){
      this.$router.push('/carbon');
    }
  }
}
</script>
<style>
  .home{position: relative}
  .canvas{
    height: 200px;
  }
  #demoCanvas{
    z-index: 1;
  }
  .tip{
    bottom: 12px;
    font-size: 13px;
    color: #87c67d;
    text-align: center;
    line-height: 170px;
  }
  .detail{
    position:absolute;
    top:15px;
    right:15px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #87c67d;
  }

  .circle{
    width: 126px;
    height: 126px;
    background-color: #ffffff;
    box-shadow: inset 0px 0px 13px 1px
    rgba(38, 148, 0, 0.32);
    border-radius: 50%;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(100%, 50%);
    font-size: 46px;
    font-weight: bold;
    color: #04bd04;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon{
    width: 22px;
    height: 21px;
  }
  .icon-text{
    font-size: 9px;
    color: #87c67d;
    margin: 0;
  }
  .nav{
    width: 100%;
    background-color: #ffffff;
    box-shadow: inset 0px -1px 1px 0px
    rgba(36, 19, 16, 0.14);
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
  }
  .top-cell{
    height: 240px;
    width: 100%;
    position: relative;
  }
  .second-cell{
    width: 92%;
    padding: 20px 11px 20px 11px;
    background-color: #ffffff;
    box-shadow: inset 0px -2px 5px 0px
    rgba(0, 0, 0, 0.14);
    border-radius: 3px;
    justify-content: center;
    text-align: left;
  }
  .title{
    font-size: 13px;
    line-height: 24px;
    color: #5f605f;
    margin: 15px 0 10px 0;
    align-items: flex-start;

  }
  .second-title{
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .second-content{
    display: flex;
    justify-content: space-between;
  }
  .user-id{
    font-size: 21px;
    color: #030303;
    margin: 0;
  }
  .user-img{
    width: 36px;
    height: 35px;
    border-radius: 50%;
    margin: 8px 14px 8px 12px;
  }
  .rank-cell{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user{
    font-size: 13px;
    color: #141514;
  }
  .user-info{
    display: flex;
    align-items: center;
  }
  .entry{
    width: 156px;
    height: 84px;
    border: 6px solid #87c67d;
    border-radius: 3px;
  }
</style>
