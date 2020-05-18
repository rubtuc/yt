<template>
<div>
  <div class="shop-nav">
    <p class="nav-side" style="text-align: left">返回</p>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        shape="round"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
  <van-tree-select
    :items="items"
    :active-id.sync="activeId"
    :main-active-index.sync="activeIndex"
  >
    <template>
      <p>sssssssssss</p>
    </template>
  </van-tree-select>
</div>
</template>

<script>

    export default {
        name: "Station",
      data() {
        return {
          value: '',
          items: [
            {
              text: '浙江',
              children: [
                {
                  // 名称
                  text: '温州',
                  // id，作为匹配选中状态的标识符
                  id: 0,
                }],
            }],
          activeId: 1,
          activeIndex: 0,
        };
      },
      methods: {
        onSearch(val) {
          Toast(val);
        },
        onCancel() {
          Toast('取消');
        },
      },
    }
</script>

<style scoped>
  .nav-center{
    flex: 1;
    font-size: 17px;
    color: #626363;
  }
  .nav-side{
    font-size: 12px;
    margin: 17px 0 13px 13px;
    color: #4271dc;
  }
  .shop-nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
