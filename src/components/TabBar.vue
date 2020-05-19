<template>
  <van-tabbar v-model="active" active-color="#87c67d" inactive-color="#aaaaaa">
    <van-tabbar-item to="/map">
      <span>行程</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/scan">
      <span>扫码</span>
      <template #icon="props">
        <img :src="props.active ? icon1.active : icon1.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/">
      <span>碳形象</span>
      <template #icon="props">
        <img :src="props.active ? icon2.active : icon2.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/person">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? icon3.active : icon3.inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
    export default {
        name: "TabBar",
        data(){
          return{
            active:0,
            icon: {
              active: require('../../images/出行.png'),
              inactive: require('../../images/出行未选择.png'),
            },
            icon1: {
              active: require('../../images/二维码.png'),
              inactive: require('../../images/二维码 未选择.png'),
            },
            icon2: {
              active: require('../../images/形象.png'),
              inactive: require('../../images/形象 未选择.png'),
            },
            icon3: {
              active: require('../../images/我 的.png'),
              inactive: require('../../images/我的 未选择.png'),
            },
          }

        }
    }
</script>

<style scoped>

</style>
