// 文档高度
function getDocumentTop() {
  const doc = document;
  let bodyScrollTop = 0;
  let documentScrollTop = 0;
  if (doc.body) {
    // 获取当前页面滚动条纵坐标的位置
    bodyScrollTop = doc.body.scrollTop;
  }
  if (doc.documentElement) {
    // 获取滚动条位置
    documentScrollTop = doc.documentElement.scrollTop;
  }
  return (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
}

// 可视窗口高度
function getWindowHeight() {
  const doc = document;
  let windowHeight = 0;

  // CSS1Compat 标准兼容模式开启
  // BackCompat 标准兼容模式关闭
  if (doc.compatMode === 'CSS1Compat') {
    windowHeight = doc.documentElement.clientHeight;
  } else {
    windowHeight = doc.body.clientHeight;
  }
  return windowHeight;
}

// 滚动条滚动高度
function getScrollHeight() {
  const doc = document;
  let bodyScrollHeight = 0;
  let documentScrollHeight = 0;
  if (doc.body) {
    bodyScrollHeight = doc.body.scrollHeight;
  }
  if (doc.documentElement) {
    documentScrollHeight = doc.documentElement.scrollHeight;
  }
  return (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
}

export function getDomBottom() {
  return getScrollHeight() - getWindowHeight() - getDocumentTop();
}

// 通过正则获取url中的值
export function getQueryString(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
