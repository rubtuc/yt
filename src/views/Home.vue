<template>
  <div class="home">
    <div class="detail" @click="goToCarbon" >积分明细</div>
    <div onload="init()" class="canvas">

      <div class="main_contain">
        <div v-for="(item,index) in ballList" :key="index" v-if="visible" id="ball" class="ball_small" :style="{top:item.top+'px',left:item.left+'px',transition:'all 2s'}">
          {{item.each}}
        </div>
      </div>
    </div>
      <div class="top-cell">
        <div>

          <div class="circle" id="m_ball" @click="in_ball">{{value_count}}
          </div>
        </div>
        <p class="tip">减碳行动有些携懈怠了哦</p>

<!--        <div v-for="item in qplist2" :key="item.id">-->

<!--       <div class="bottle-fade1" id="bottle{{$index+1}}" @click="qpclick('bottle{{$index+1}}',{{$index+1}},qplist.missionid)">-->
<!--         <div>{{qplist.score}}</div>-->

<!--       </div>-->
<!--        </div>-->
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
        <div class="second-cell" style="height: auto;padding-bottom:50px;">
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
  import { getValue,getValueById } from '../api/user'
import TabBar from '../components/TabBar'
// function init() {
//
// }

export default {
  name: 'Home',
  components:{
    TabBar
  },
  mounted(){
    init();
  },
  created() {
    this.getNumber();
    getValueById(10005)
      .then((res) => {
        this.value_count=res[0].value_count;
      })
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
      visible:true,
      finish:false,
      integralAvailabel: true,
      score: 88,
      rankList:[],
      ballList:[
        {
          top:150,
          left:60,
          each:6
        },
        {
          top:50,
          left:80,
          each:6
        },
        {
          top:50,
          left:220,
          each:6
        },
        {
          top:160,
          left:250,
          each:6
        },
      ]
    }
  },
  methods:{
    getNumber() {
      for(var i = 0; i <this.ballList.length; i++){
        var num= Math.ceil(Math.random()*20);
        this.ballList[i]['number']=num;
        console.log(num);
      }
      console.log(this.ballList);
    },
    goToShop(){
      this.$router.push('/shop');
    },
    goToCarbon(){
      this.$router.push('/carbon');
    },
    in_ball(){
      this.ballList[0].left=170
      this.ballList[0].top=280
      this.ballList[1].left=170
      this.ballList[1].top=280
      this.ballList[2].left=170
      this.ballList[2].top=280
      this.ballList[3].left=170
      this.ballList[3].top=280
      for(var i=0;i<this.ballList.length;i++) {
        //this.score =99;
        if(this.finish == false){
          this.value_count +=this.ballList[i].each;
        }

      }
      this.finish=true;
      let that =this;
      setTimeout(function(){ that.visible=false; }, 2000);
    },

  }
}
</script>

<style>
  .main_contain{
    width: 100%;
    position: fixed;
    background:#fff;
  }
  .ball_small {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: radial-gradient(white, #00c2ff);
    position: absolute;
    color:white;
    font-size:28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    float:left;
    z-index: 1;
  }
  .ball_small{
    animation: heart 1.2s ease-in-out 2.5s infinite alternate;
  }
  .main_ball{
    width: 120px;
    height:120px;
    background:rgb(22, 211, 132);
    position: absolute;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    top:100px;
    left:calc(15% - 60px);
    z-index: 2;
  }
  @keyframes heart{
    from{transform:translate(0,0)}
    to{transform:translate(0,12px)}
  }
</style>
<style>
  /*上下浮动*/
</style>
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
