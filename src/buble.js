// 每个积分气泡的定位
function _renderBallPos(index: number, pos: object) {
  const antForestBallItem = document.getElementById(`antForest-ball__item_${index}`);
  if (antForestBallItem) {
    (antForestBallItem as any).className = 'antForest-ball__item_container';
    (antForestBallItem as any).style.opacity = 1;
    (antForestBallItem as any).style.position = 'absolute';
    (antForestBallItem as any).style.left = `${((pos.x - 42.5) / this.viewW) * 100}%`;
    (antForestBallItem as any).style.top = `${((pos.y - 42.5) / this.viewH) * 100}%`; // 使用%定位
  }
}
// @throttle(800)
// 气泡点击
function  clickIntegralBall(ballIndex: number, ballItem: object) {
  if (!this.getAllClicking && !ballItem.click) {
    this.singleClicking = true;
    this.nodeList[ballIndex].click = true;
    this.timer = setTimeout(() => {
      (document.getElementById(`antForest-ball__item_${ballIndex}`) as any).className = 'clickBall';
      (document.getElementById(`antForest-ball__item_${ballIndex}`) as any).style.opacity = 0;
    }, 300);
    const collectIntegralList = [];
    collectIntegralList.push(ballItem.operationLogId);

    // ！！！不能remove Dom
    this.timer = setTimeout(() => {
      const params = {
        operationLogIds: [...collectIntegralList]
      };
      this.collectIntegralBall(params);
    }, 500);
  } else {
    console.log('该积分已经领取过啦或者正在一键领取');
  }
}

// 产生随机数
function _rnd(n: number, m: number): number {
  const random = Math.floor((Math.random() * (m - n + 1)) + n);
  return random;
}
/**
 * 判断两圆心之间距离是否大于直径 或者球心距totalBall球心距离小于
 * p1 -- 已创建可用Ball的ballList中item
 * p2 -- 当前创建ball
 * distanceToBall -- 两个ball球心之间最小距离
 */
function _getDistanceForBallCenter(p1: object, p2: object, distanceToBall: number): boolean {
  const dx = Math.abs(p2.x - p1.x);
  const dy = Math.abs(p2.y - p1.y);
  const disToBall = Math.sqrt((dx ** 2) + (dy ** 2));
  return disToBall > distanceToBall;
}
// 产生有效气泡球心坐标
function _getSingleIntegralBallCenter(arrList: Array<object>): any {
  const currentArrList: any = [];
  arrList.forEach((arrItem) => { // 过滤掉上一页的
    if (!arrItem.click) {
      currentArrList.push(arrItem);
    }
  });
  const _ballCenterPos = {
    x: this._rnd(0.1 * this.viewW, 0.9 * this.viewW),
    y: this._rnd(0.1 * this.viewH, 0.6 * this.viewH)
  };
  const _noCoverToTal = this._getDistanceForBallCenter(
    this.totalCenterPos,
    _ballCenterPos,
    this.distanceToTotal
  );
  if (_noCoverToTal) {
    if (currentArrList && currentArrList.length > 0) {
      let isFlag = true; // 该pos是否全部不重合标志
      currentArrList.forEach((listItem: any) => {
        const _noCover = this._getDistanceForBallCenter(
          listItem,
          _ballCenterPos,
          this.distanceToBall
        ); // 该pos是否与该ball不重合
        if (!_noCover) {
          isFlag = false;
        }
      });
      if (isFlag) {
        return _ballCenterPos;
      }
      return this._getSingleIntegralBallCenter(this.ballCenterPosList);
    }
    return _ballCenterPos;
  }
  return this._getSingleIntegralBallCenter(this.ballCenterPosList);
}

module.exports = {
  _rnd:_rnd,
  _renderBallPos:_renderBallPos,
  clickIntegralBall:clickIntegralBall,
  _getDistanceForBallCenter:_getDistanceForBallCenter,
  _getSingleIntegralBallCenter:_getSingleIntegralBallCenter
}
