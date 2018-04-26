<template>
  <div>
    <ul class="fl" style="width: 20%">
      <li><router-link :to="{name: '_uiButton'}">ui-button</router-link></li>
      <li><router-link :to="{name: '_uiRadio'}">ui-radio</router-link></li>
      <li><router-link :to="{name: '_uiCheckbox'}">ui-checkbox</router-link></li>
      <li><router-link :to="{name: '_uiMarqueeNotice'}">ui-marquee-notice</router-link></li>
      <li><router-link :to="{name: '_uiPopup'}">ui-popup</router-link></li>
      <li><router-link :to="{name: '_uiDialog'}">ui-dialog</router-link></li>
    </ul>
    <div style="overflow: hidden">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  ul {
    padding: 5px;
    li {
      font-size: 20px;
      font-weight: bold;
      line-height: 40px;
    }
  }
</style>
