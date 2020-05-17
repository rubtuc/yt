<template>
  <van-tabbar v-model="active" active-color="#87c67d" inactive-color="#aaaaaa">
    <van-tabbar-item>
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
</template>

<script>
    export default {
        name: "TabBar",
        data(){
          return{
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
          }

        }
    }
</script>

<style scoped>

</style>
