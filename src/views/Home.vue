<template>
  <div class="home">

<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <div class="top-cell"></div>
      <div style="display: flex;justify-content: center">
        <div class="second-cell">
          <p class="title">积分权限</p>
          <div class="second-content">
            <img src="../../images/cat.jpg" class="entry">
            <img src="../../images/cat.jpg" class="entry">
          </div>
        </div>
      </div>
      <div style="display: flex;justify-content: center;margin-top: 10px">
        <div class="second-cell" style="height: auto;">
        <div class="second-title">
          <p class="title">我的碳形象</p>
          <van-button plain hairline type="primary" size="small">地区排名</van-button>
        </div>
        <div v-for="item in rankList" :key="item.id" class="rank-cell">
          <div class="user-info">
            <p class="user-id">{{item.id}}</p>
            <img :src="item.img" class="user-img">
            <p class="user">{{item.username}}</p>
          </div>
          <div class="user" style="margin-right: 24px">{{item.score}}</div>
        </div>
        </div>
      </div>

    <van-tabbar v-model="active" active-color="#87c67d" inactive-color="#aaaaaa">
      <van-tabbar-item  replace to="/home">
        <span>行程</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>扫码</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>碳形象</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <template #icon="icon3">
          <img :src="icon3.active ? icon3.active : icon3.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
      <div class="nav">
        <div>
          <img src="../../images/cat.jpg" class="icon">
          <p class="icon-text">出行</p>
        </div>
        <div>
          <img src="../../images/cat.jpg" class="icon">
          <p class="icon-text">乘车码</p>
        </div>
        <div>
          <img src="../../images/cat.jpg" class="icon">
          <p class="icon-text">碳形象</p>
        </div>
        <div>
          <img src="../../images/cat.jpg" class="icon">
          <p class="icon-text">我的</p>
        </div>

      </div>

    </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      active:0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
      icon1: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
      icon2: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
      icon3: {
        active: '../../images/cat.jpg',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
      rankList: [
        {id: 0, username: 'hmm', score: 355, img: require('../../images/cat.jpg')},
        {id: 1, username: 'hmm', score: 355, img: require('../../images/cat.jpg')},
        {id: 2, username: 'hmm', score: 355, img: require('../../images/cat.jpg')},
        {id: 3, username: 'hmm', score: 355, img: require('../../images/cat.jpg')},
        {id: 4, username: 'hmm', score: 355, img: require('../../images/cat.jpg')},
      ]
    }
  }
}
</script>
<style>
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
    height: 48px;
    padding: 9px 0 0 0 ;
    background-color: #ffffff;
    box-shadow: inset 0px -1px 1px 0px
    rgba(36, 19, 16, 0.14);
    border: solid 1px rgba(135, 135, 135, 0.14);
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
  }
  .top-cell{
    height: 197px;
    width: 100%;
    background-color: ivory;
  }
  .second-cell{
    width: 92%;
    height: 168px;
    padding: 0 11px 0 11px;
    background-color: #ffffff;
    box-shadow: inset 0px -2px 5px 0px
    rgba(0, 0, 0, 0.35);
    border-radius: 3px;
    opacity: 0.73;
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
