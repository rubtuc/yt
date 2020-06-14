<template>
<div style="background-image: linear-gradient(#ffffff, #87c67d);height: 100vh;text-align: center; ">
  <img class="scan-banner" src="../../images/20170602170035_1250.jpg">
  <div class="scan-code">
    <div id="qrcode" class="code-img"  ref="qrcode"></div>
<!--    <img src="../../images/二维码出行.png" class="code-img" >-->
    <div style="display: flex;align-items: center;justify-content: center;margin-top: 55px">
      <img src="../../images/刷新.png" class="refresh-icon">
      <p @click="change">刷新</p>
    </div>
  </div>
  <TabBar></TabBar>
</div>
</template>

<script>
import TabBar from '../components/TabBar'
import QRCode from 'qrcodejs2'
    export default {
        name: "Scan",
        components:{
          TabBar
        },
      data() {
        return{
          qrcode:""
        }
      },
      created(){

      },

      methods:{
        change(){
            this.qrcode.clear()
            this.qrcode.makeCode("https://baidu.com");
        }
      },
      mounted(){
        var qrcode = new QRCode("qrcode");
        this.qrcode=qrcode
        qrcode.makeCode("https://www.runoob.com/w3cnote/javascript-qrcodejs-library.html");

      },
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
    padding-left: 30px;
  }
</style>
