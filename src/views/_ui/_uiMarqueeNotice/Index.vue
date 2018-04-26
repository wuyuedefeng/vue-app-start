<template>
  <div>
    <h3>【default】 behavior scroll, direction: left, speed 6</h3>
    <ui-marquee-notice style="background: red">我爱我的国，我爱我的家</ui-marquee-notice>
    <h3>behavior slide, direction: left, speed 9</h3>
    <ui-marquee-notice behavior="slide" speed="9" style="background: red">我爱我的国，我爱我的家</ui-marquee-notice>
    <h3>behavior alternate, direction: left, speed 20</h3>
    <ui-marquee-notice behavior="alternate" speed="20" style="background: red">我爱我的国，我爱我的家</ui-marquee-notice>
    <hr>
    <h3>behavior scroll, direction: right, speed 6</h3>
    <ui-marquee-notice direction="right" style="background: red">我爱我的国，我爱我的家</ui-marquee-notice>
    <h3>behavior scroll, direction: up, speed 6</h3>
    <ui-marquee-notice direction="up" style="background: red">我爱我的国，我爱我的家</ui-marquee-notice>
    <h3>behavior scroll, direction: down , speed 6</h3>
    <ui-marquee-notice direction="down" style="background: red">我爱我的国，我爱我的家</ui-marquee-notice>
    <hr>
    <a href="https://github.com/wuyuedefeng/vue-app-start/blob/develop/src/views/_ui/_uiMarqueeNotice/Index.vue" target="_blank">demo code</a>
  </div>
</template>

<script>
import '@/components/_ui/_uiMarqueeNotice'
</script>
