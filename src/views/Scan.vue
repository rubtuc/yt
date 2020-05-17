<template>
<div style="background-color: #87c67d;height: 100vh;text-align: center; ">
  <img class="scan-banner" src="../../images/cat.jpg">
  <div class="scan-code">
    <img src="../../images/cat.jpg" class="code-img" >
    <div style="display: flex;align-items: center;justify-content: center">
      <img src="../../images/cat.jpg" class="refresh-icon">
      <p>刷新</p>
    </div>
  </div>
  <TabBar></TabBar>
</div>
</template>

<script>
import TabBar from '../components/TabBar'
    export default {
        name: "Scan",
        components:{
          TabBar
        }
    }
</script>

<style scoped>
  .refresh-icon{
    width: 14px;
    height: 12px;
    margin-right: 8px;
  }
.scan-banner{
  width: 100vw;
  height: 173px;
}
.code-img{
  width: 216px;
  height: 216px;
  margin: 45px 0 42px 0;
}
  .scan-code{
    position: absolute;
    top: 150px;
    width: 83.7vw;
    margin-left: 8.15%;
    height: 364px;
    background-color: #ffffff;
    border-radius: 3px;
    text-align: center;
  }
</style>
