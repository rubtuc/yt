<template>
<div>
  <div class="shop-nav">
    <p class="nav-side" style="text-align: left" @click="backToMap">返回</p>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="搜索站点或线路"
        shape="round"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
  <van-tree-select
    :items="items"
    :active-id.sync="activeId"
    height="100%"
    :main-active-index.sync="activeIndex"
  >
    <template>
      <p>sssssssssss</p>
    </template>
  </van-tree-select>
</div>
</template>

<script>
import {getStation} from "../../api/trip";

export default {
        name: "Station",
      data() {
        return {
          value: '',
          items: [
            {
              text: '1号线',
              children: [
                {
                  text: '温州',
                  id: 0,
                },
                {
                  text: '温州',
                  id: 0,
                },
                {
                  text: '温州',
                  id: 0,
                },

                {
                  text: '温州',
                  id: 0,
                },
                {
                  text: '温州',
                  id: 0,
                },
                {
                  text: '温州',
                  id: 0,
                },
                {
                  text: '温州',
                  id: 0,
                },
                {
                  text: '温州',
                  id: 0,
                },
                {
                  text: '温州',
                  id: 0,
                },
                {
                  text: '温州',
                  id: 0,
                },
                {
                  text: '温州',
                  id: 0,
                },
                {
                  text: '温州',
                  id: 0,
                },

              ],
            },
            {
              text: '2号线',
              children:[{
                id: 0,
                text: ""
              }]
            }],
          activeId: 1,
          activeIndex: 0,
        };
      },
      created(){
        getStation().then((res)=>{
          var id=0;
          console.log(res.length)
          this.items[0].children.length=res.length
          for(let i=0;i<res.length;i++){

            console.log(res[0].line_name);

              this.items[0].children[i].text=res[i].station_name;
              this.items[0].children[i].id=id++;

          }
          console.log("00",this.items)

        })


      },
      methods: {
        onSearch(val) {
          Toast(val);
        },
        onCancel() {
          Toast('取消');
        },
        backToMap(){
          this.$router.push('/map')
        }
      },
    }
</script>

<style scoped lang="less">
  .van-tree-select{
    height: auto;
  }
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
