<template>
  <div>
    <h3>【default】direction: up,  autoplay: 4000, speed: 500, height: 30, unit: px</h3>
    <ui-roll-notice style="background: #cccccc; padding: 0 5px;">
      <div>一家专门做外卖的网站</div>
      <div>各大店铺，期待你们的加入， 微信号：<span style="color: red">哈哈哈😁</span></div>
      <div>共创美好未来</div>
    </ui-roll-notice>
    <h3>direction: down,  autoplay: 4000, speed: 500, height: 30, unit: px</h3>
    <ui-roll-notice direction="down" style="background: #cccccc; padding: 0 5px;">
      <div>一家专门做外卖的网站</div>
      <div>各大店铺，期待你们的加入， 微信号：<span style="color: red">哈哈哈😁</span></div>
      <div>共创美好未来</div>
    </ui-roll-notice>
    <hr>
    <h3>default with unit: rem</h3>
    <ui-roll-notice unit="rem" style="background: #cccccc; padding: 0 5px;">
      <div>一家专门做外卖的网站</div>
      <div>各大店铺，期待你们的加入， 微信号：<span style="color: red">哈哈哈😁</span></div>
      <div>共创美好未来</div>
    </ui-roll-notice>
    <hr>
    <a href="https://github.com/wuyuedefeng/vue-app-start/blob/develop/src/views/_ui/_uiRollNotice/Index.vue" target="_blank">demo code</a>
  </div>
</template>

<script>
import '@/components/_ui/_uiRollNotice'
export default {}
</script>
