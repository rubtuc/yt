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
      <div class="center-cell" style="margin-top: 70px">
        <div class="second-cell" style="height: auto;padding-top: 0;padding-bottom: 0">
          <div class="info-cell">
            <p class="my-info">个人信息</p>
          </div>

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
