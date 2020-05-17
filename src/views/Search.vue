<template>
    <div style="text-align: left">
      <div class="shop-nav">
        <p class="back">返回</p>
        <p class="nav-help">帮助</p>
      </div>
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
      <p class="search-title">猜你关心</p>
      <div class="center-cell">
        <div class="second-cell search-cell">
          <div class="info-cell">
            <p class="my-info">使用方法</p>
          </div>
          <div class="info-cell">
            <p class="my-info">积分规则</p>
          </div>
          <div class="info-cell">
            <p class="my-info">更换手机号</p>
          </div>
          <p class="more">查看更多</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
      data() {
        return {
          value: '',
        };
      },
      methods: {
        onSearch(val) {
          Toast(val);
        },
        onCancel() {
          Toast('取消');
        },
      }
    }
</script>

<style scoped>
  .search-cell{
    height: auto;padding-top: 0;padding-bottom: 0;position: relative;
  }
  .more{
    font-size: 11px;
    color: #1b72e1;
    bottom: 11px;
    text-align: center;
  }
  .center-cell{
    display: flex;
    justify-content: center;
  }
  .info-cell{
    display: flex;
    align-items: center;
    margin: 0;
    border-bottom: 1px solid  #aaaaaa59;
    font-size: 13px;
    color: #000000;
  }
  .search-title{
    font-size: 17px;
    margin: 16px 0 16px 30px;
    text-align: left;
    color: #000000;
  }
  .back{
    font-size: 12px;
    margin: 17px 0 13px 13px;
    color: #4271dc;
    text-align: left;
    flex: 1;
  }
  .shop-nav{
    display: flex;
    align-items: center;
  }
  .nav-help{
    flex: 1.3;
    font-size: 13px;
    color: #000000;
    margin: 0;
    text-align: left;
  }
</style>
