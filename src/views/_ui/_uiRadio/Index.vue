<template>
  <div>
    <ui-radio-group v-model="nowSelect" style="padding: 15px">
      <ui-radio val="111">真棒</ui-radio>
      <ui-radio val="222"></ui-radio>
      <ui-radio val="333" disabled>I'm 555</ui-radio>
    </ui-radio-group>
    now select value: {{nowSelect}}
    <hr>
    <a href="https://github.com/wuyuedefeng/vue-app-start/blob/develop/src/views/_ui/_uiRadio/Index.vue" target="_blank">demo code</a>
  </div>
</template>

<script>
import '@/components/_ui/_uiRadio'
export default {
  data () {
    return {
      nowSelect: '333'
    }
  }
}
</script>
