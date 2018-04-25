// rem模式 designSketchWidth需要和mixin中的_var的$vmuiDesignSketchWidth保持一致
module.exports = function (designSketchWidth = 375) {
  var docEl = document.documentElement
  var fontEl = document.createElement('style')
  var metaEl = document.querySelector('meta[name="viewport"]')
  const dpr = +window.devicePixelRatio.toFixed(2) || 1
  // 框架内部按375进行设计
  let rem = docEl.clientWidth * dpr / designSketchWidth
  console.log(`1rem = ${rem}px`)
  const scale = 1 / dpr
  // 设置viewport，进行缩放，达到高清效果
  metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale)
  // 设置data-dpr属性，留作的css hack之用
  docEl.setAttribute('data-dpr', dpr)
  // 动态写入样式
  docEl.firstElementChild.appendChild(fontEl)
  fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}'
  // 给js调用的，某一dpr下rem和px之间的转换函数
  window.rem2px = function (v) {
    v = parseFloat(v)
    return v * rem
  }
  window.px2rem = function (v) {
    v = parseFloat(v)
    return v / rem
  }
  window.dpr = dpr
  window.rem = rem
}
