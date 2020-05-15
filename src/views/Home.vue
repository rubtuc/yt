<template>
  <div class="home">
    <div class="page-body">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <p class="title">积分权限</p>
    <div>
      <img src="../../images/cat.jpg" class="entry">
      <img src="../../images/cat.jpg" class="entry">
    </div>

    <div v-for="item in rankList" :key="item.id" class="rank-cell">
      <div class="user-info">
        <p>{{item.id}}</p>
        <img :src="item.img" class="user-img">
        <p>{{item.username}}</p>
      </div>
      <div class="score">{{item.score}}</div>
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
  .page-body{
    width: 92%;
    margin-left: 4%;
  }
  .user-img{
    width: 50px;
    height: 50px;
  }
  .rank-cell{
    display: flex;
    justify-content: space-between;
  }
  .user-info{
    display: flex;
  }
  .entry{
    display: flex;
    justify-content: space-between;
    width:calc(100% - 30px);
    height: 100px;
  }
</style>
