<template>
    <div>
      <div id="container"></div>
      <div id="panel"></div>
    </div>
</template>

<script>
    export default {
        name: "MapThird",
      mounted() {
        var map = new AMap.Map("container", {
          center: [116.397559, 39.89621],
          zoom: 14
        });

        var transferOption = {
          map: map,
          nightflag: true, // 是否计算夜班车
          city: '北京市',
          panel: 'panel',
          outlineColor: '#ffeeee',
          autoFitView: true,
          policy: AMap.TransferPolicy.LEAST_TIME // 其它policy取值请参照 https://lbs.amap.com/api/javascript-api/reference/route-search#m_TransferPolicy
        }

        var transfer = new AMap.Transfer(transferOption)

        //根据起、终点坐标查询公交换乘路线
        transfer.search(new AMap.LngLat(116.291035,39.907899), new AMap.LngLat(116.427281, 39.903719), function(status, result) {
          // result即是对应的公交路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_TransferResult
          if (status === 'complete') {
            log.success('公交路线数据查询成功')
          } else {
            log.error('公交路线数据查询失败' + result)
          }
        });
      }
    }
</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
  }
  #panel {
    position: fixed;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
  }
  #panel .amap-call {
    background-color: #009cf9;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  #panel .amap-lib-transfer {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
  }
</style>
