<template>
  <div>
    <div>
      <h3>default</h3>
      <ui-switch v-model="isOpen"></ui-switch>
      <h3>isLong: true, activeText: 开</h3>
      <ui-switch v-model="isOpen" isLong activeText="开"></ui-switch>
      <h3>isLonger: true, activeText: 开, inactiveText: 关</h3>
      <ui-switch v-model="isOpen" isLonger activeText="开" inactiveText="关"></ui-switch>
      <h3>disabled: true</h3>
      <ui-switch v-model="isOpen" disabled></ui-switch>
      <h3>activeColor: #00f, activeText: 开, inactiveColor: #f00, inactiveText: 关</h3>
      <ui-switch v-model="isOpen" activeColor="#00f" activeText="开" inactiveColor="#f00" inactiveText="关"></ui-switch>
    </div>
    <hr>
    <a href="https://github.com/wuyuedefeng/vue-app-start/blob/develop/src/views/_ui/_uiSwitch/Index.vue" target="_blank">demo code</a>
  </div>
</template>

<script>
import '@/components/_ui/_uiSwitch'
export default {
  data () {
    return {
      isOpen: true
    }
  }
}
</script>
