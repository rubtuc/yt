<template>
  <div class="home">
    <div class="detail" @click="goToCarbon" >积分明细</div>
    <div onload="init()" class="canvas">

<!--    <canvas id="demoCanvas" width="375" height="200px" ></canvas>-->
      <div id="main">
        <span id="red"></span>
        <div>11</div>
        <div>22</div>
        <div>33</div>
        <div>44</div>
      </div>
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
  import { getValue } from '../api/user'
import TabBar from '../components/TabBar'
  function init() {
    var main = document.getElementById('main');  //获取运动边界和10个div
    var circles = main.getElementsByTagName('div');
    var container = [];//存放10个球的每个具体信息，包括坐标，速度等值
    var arr = [];
    var maxW = 0;//初始化运动的最大宽和高，初始定义0
    var maxH = 0;
    var cwidth = circles[0].offsetWidth; //小球的直径

    //碰撞函数
    function crash(a) {
      var ball1x = container[a].cx; //在数组中任意球的圆心坐标
      var ball1y = jscontaineron[a].cy;//思路：先随便拿一个球，然后遍历所有球，拿这个球和所有球的圆心距离比较
      for (var i = 0; i < container.length; i++) {
        if (i !== a) { //判断取出来的球不是本身，才能和其他球进行距离判断
          var ball2x = container[i].cx; //将其他球的圆心坐标赋值给球2
          var ball2y = container[i].cy;
          //圆心距 求两个点之间的距离,开平方
          var distence = Math.sqrt((ball1x - ball2x) * (ball1x - ball2x) + (ball1y - ball2y) * (ball1y - ball2y));
          if (distence <= cwidth) { //球心距离和求直径比较
            if (ball1x > ball2x) { //当前位于未知求的右方
              if (ball1y > ball2y) {//预设未知球撞当前球，然后当前球改变运动
                container[a].movex = 1; //1表示为正值，对应的右和下
                container[a].movey = 1;//0表示为负值，对应的左和上
              } else if (ball1y < ball2y) {
                container[a].movex = 1;
                container[a].movey = 0;
              } else {
                container[a].movex = 1;
              }
            } else if (ball1x < ball2x) {
              if (ball1y > ball2y) {
                container[a].movex = 0;
                container[a].movey = 0;
              } else if (ball1y < ball2y) {
                container[a].movex = 0;
                container[a].movey = 1;
              } else {
                container[a].movex = 0;
              }
            } else {
              if (ball1y > ball2y) {
                container[a].movey = 1;
              } else if (ball1y < ball2y) {
                container[a].movey = 0;
              }
            }
          }
        }

      }
    }

    //移动函数
    function move(balls) { //每个球单独有定时器
      balls.timer = setInterval(function () {
        if (balls.movex === 1) { //如果往右跑，则一直加速度，碰到边界，改为反方向运动
          balls.x += balls.speed;
          if (balls.x + balls.speed >= maxW) {//防止小球出界
            balls.x = maxW;
            balls.movex = 0;//小球运动方向发生改变
          }
        } else {
          balls.x -= balls.speed; // 1和0表示正反方向
          if (balls.x - balls.speed <= 0) {
            balls.x = 0;
            balls.movex = 1;
          }
        }
        if (balls.movey === 1) {
          balls.y += balls.speed;
          if (balls.y + balls.speed >= maxH) {
            balls.y = maxH;
            balls.movey = 0;
          }
        } else {
          balls.y -= balls.speed;
          if (balls.y - balls.speed <= 0) {
            balls.y = 0;
            balls.movey = 1;
          }
        }
        balls.cx = balls.x + circles[0].offsetWidth / 2;//小球圆心等于：运动中x的值加上自身的半径
        balls.cy = balls.y + circles[0].offsetHeight / 2;
        circles[balls.index].style.left = balls.x + 'px';//小球相对于屏幕的位置
        circles[balls.index].style.top = balls.y + 'px';
        crash(balls.index); //每个小球进行碰撞检测
      }, 25);
    }
//根据浏览器窗口的大小自动调节小球的运动空间
    window.onresize = function () {
      maxW = window.innerWidth - circles[0].clientWidth;  //为了让小球不卡在浏览器边缘，
      maxH = window.innerHeight - circles[0].clientHeight;    // 所以要减去自身的宽高
      main.style.width = window.innerWidth + 'px';   //将容器的宽高和文档显示区宽高相等
      main.style.height = window.innerHeight + 'px';
    };
    onresize();
//数组对象的初始化
    for (var i = 0; i < circles.length; i++) {
      arr = [];
      arr.x = Math.floor(Math.random() * (maxW + 1));//初始x坐标
      arr.y = Math.floor(Math.random() * (maxH + 1));//初始y坐标
      arr.cx = arr.x + circles[0].offsetWidth / 2;//圆心x坐标
      arr.cy = arr.y + circles[0].offsetHeight / 2;//圆心y坐标
      arr.movex = Math.floor(Math.random() * 2);//x轴移动方向
      arr.movey = Math.floor(Math.random() * 2);//y轴移动方向
      arr.speed = 2 + Math.floor(Math.random() * 2);//随机速度
      arr.timer = null;//计时器
      arr.index = i;//索引值
      container.push(arr); //存放所有的属性值
      circles[i].style.left = arr.x + 'px';//小球位置初始化
      circles[i].style.top = arr.y + 'px';
    }

//对每一个小球绑定计时器，让小球动起来
    for (var i = 0; i < container.length; i++) {
      move(container[i]);
    }

//红色气泡的单独效果
    var red = document.getElementById('red'); //获取红色泡
    var mouseOffsetX = 0, mouseOffsetY = 0; //初始定义偏移值
    var isDrag = false;         //是否可拖动
    red.addEventListener('mousedown', function (e) {//鼠标按下
      var e = e || window.event;
      mouseOffsetX = e.pageX - red.offsetLeft; //鼠标指针位置减去元素的左边距
      mouseOffsetY = e.pageY - red.offsetTop;
      isDrag = true;
    });
//鼠标移动
    document.onmousemove = function (e) {//鼠标移动e
      var e = e || window.event;
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      var moveX = 0, moveY = 0;
      if (isDrag === true) {
        moveX = mouseX - mouseOffsetX; //移动的距离等于鼠标指针减去上面获取的差值
        moveY = mouseY - mouseOffsetY;
        //限定移动范围
        var PW = document.documentElement.clientWidth;//窗口的宽高
        var PH = document.documentElement.clientHeight;

        var redW = red.offsetWidth; //元素红色泡泡的自身的宽高
        var redH = red.offsetHeight;

        var maxX = PW - redW; //最大的宽度为窗口可视区宽减去自身的宽
        var maxY = PH - redH;
        moveX = Math.min(maxX, Math.max(0, moveX));// 取值范围
        moveY = Math.min(maxY, Math.max(0, moveY));
        red.style.left = moveX + 'px';
        red.style.top = moveY + 'px';

        //下面部分是判断部分
        var _redx = parseInt(red.style.left + redW / 2); //红球的球心坐标
        var _redy = parseInt(red.style.top + redH / 2);

        var dsetination = circles[0].offsetWidth / 2 + redW / 2; //红球和蓝球的半径之和
        for (var i = 0; i < container.length; i++) {  //取出数组中所有球
          var bx = container[i].cx;//球的圆心坐标
          var by = container[i].cy;
          var dis1 = (_redx - bx) * (_redx - bx) + (_redy - by) * (_redy - by);//两个圆心之间的距离
          var dis2 = Math.floor(Math.sqrt(dis1)); //开平方后再取整
          if (dis2 <= dsetination) { //球心距离和求直径比较
            if (_redx > bx) { //当前位于未知求的右方
              if (_redy > by) {//预设未知球撞当前球，然后被撞击球改变运动
                container[i].movex = 0;
                container[i].movey = 0;
              } else if (_redy < by) {
                container[i].movey = 1;
                container[i].movex = 0;
              } else if (_redy = by) {
                container[i].movex = 0;
              }
            } else if (_redx < bx) {  //红球在蓝球的左下方
              if (_redy > by) {
                container[i].movex = 1;
                container[i].movey = 0;
              } else if (_redy < by) {//红球在蓝球的左上方
                container[i].movex = 1;
                container[i].movey = 1;
              } else if (j_redy = by) {
                container[i].movex = 1;
              }
            }
          }
        }
      }
    }
    ;
//鼠标松开
    document.onmouseup = function () {
      isDrag = false;
    };
  }
  // function init() {
  //   var oc = document.querySelector("canvas")
  //   if(oc.getContext){
  //     var ctx = oc.getContext("2d")
  //     // ctx.font = 'bold 35px Arial';
  //     // ctx.textAlign = 'center';
  //     // ctx.textBaseline = 'bottom';
  //     // ctx.fillStyle = '#ccc';
  //     // ctx.strokeText("Hello Canvas", 150, 100);
  //     // ctx.fillText("Hello Canvas", 180, 140);   
  //
  //     //在画布上随机生成圆
  //     var arr = []
  //
  //     //将数组中的圆绘制到画布上
  //     setInterval(function () {
  //       /*console.log(arr)*/
  //       ctx.clearRect(0,0,oc.width,oc.height)
  //       for (var i = 0; i < arr.length; i++) {
  //         if (arr[i].y <= 10){
  //           arr.splice(i,1)
  //         }
  //         arr[i].deg+=5
  //         arr[i].x = arr[i].startX + Math.sin(arr[i].deg*Math.PI/180)*arr[i].step*2;
  //         arr[i].y = arr[i].startY - ( arr[i].deg*Math.PI/180 )*arr[i].step;
  //
  //       }
  //       //绘制图形
  //       for(var i=0;i<arr.length;i++){
  //         /*  console.log(i)*/
  //         //ctx.save()
  //         ctx.fillStyle = "rgba("+arr[i].red+","+arr[i].green+","+arr[i].blue+","+arr[i].alp+")"
  //         ctx.beginPath()
  //         ctx.arc(arr[i].x,arr[i].y,arr[i].r,0,2*Math.PI)
  //         // ctx.font = 'bold 35px Arial';
  //         // ctx.textAlign = 'center';
  //         // ctx.textBaseline = 'bottom';
  //         // ctx.fillStyle = '#ccc';
  //         ctx.fillText("Hello Canvas", 180, 140);
  //         ctx.fill()
  //         // ctx.restore()
  //       }
  //     },1000/60)
  //
  //     //往arr数组中存放每一个随机圆的数据
  //     setInterval(function () {
  //       var r = 30
  //       var x = Math.random()*oc.width
  //       var y = oc.height - r
  //       var red = Math.round(Math.random()*255)
  //       var green = Math.round(Math.random()*255)
  //       var blue = Math.round(Math.random()*255)
  //       var alp = 1
  //
  //       var deg = 0
  //       var startX = x
  //       var startY = y
  //       var step = Math.random()*5+5
  //
  //       arr.push({
  //         x:x,
  //         y:y,
  //         r:r,
  //         red:red,
  //         green:green,
  //         blue:blue,
  //         alp:alp,
  //         deg:deg,
  //         startX:startX,
  //         startY:startY,
  //         step:step
  //       })
  //     },2000)
  //   }
  // }
// function init() {
//   //遮罩
//   // 这里写代码
//   var stage = new createjs.Stage("demoCanvas");
//   var circle = new createjs.Shape();
//   circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
//   circle.x = 50;
//   circle.y = 50;
//   stage.addChild(circle);
//   stage.update();
//
//   var stage = new createjs.Stage("demoCanvas");
//   var image=new Image();
//   image.src="../../images/cat.jpg";
//   image.onload=handleImageLoad;
//   function handleImageLoad(e) {
//     var b = new createjs.Bitmap(e.target);
//     stage.addChild(b);
//     var Mask = new createjs.Shape();
//     Mask.graphics.beginFill("red");
//     Mask.graphics.drawRect(21, 23);
//     Mask.x = 100;
//     Mask.y = 100;
//     b.mask = Mask;
//     stage.update();
//   }
//
// }
// function handleImageLoad(e) {
//   var b = new createjs.Bitmap(e.target);
//   stage.addChild(b);
//   var Mask = new createjs.Shape();
//   Mask.graphics.beginFill("red");
//   Mask.graphics.drawRect(21, 23);
//   Mask.x = 100;
//   Mask.y = 100;
//   b.mask = Mask;
//   stage.update();
// }
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
    },
  }
}
</script>
<style>
  *{margin:0;padding:0}
  #main{
    margin:0 auto;
    position:relative;
    background-color: #fff
  }
  #main div{
    position:absolute;
    width:60px;
    height: 60px;
    overflow: hidden;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-image: url("../../images/cat.jpg");
    background-repeat: no-repeat;
  }
  #red{
    display: block;
    width: 80px;
    height:80px;
    position: absolute;
    left:calc(50% - 60px);
    top:calc(50% - 60px);
    background-image: url("../../images/cat.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%
  }
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
