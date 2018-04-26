<template>
  <div>
    <ui-checkbox-group v-model="nowSelectValues"  style="padding: 15px">
      <ui-checkbox val="111">aaaa</ui-checkbox>
      <ui-checkbox val="222">你好</ui-checkbox>
      <ui-checkbox val="444"></ui-checkbox>
      <ui-checkbox val="333" disabled>ccc</ui-checkbox>
    </ui-checkbox-group>
    now select value: {{nowSelectValues}}
    <hr>
    <a href="https://github.com/wuyuedefeng/vue-app-start/blob/develop/src/views/_ui/_uiCheckbox/Index.vue" target="_blank">demo code</a>
  </div>
</template>

<script>
import '@/components/_ui/_uiCheckbox'
export default {
  data () {
    return {
      nowSelectValues: ['111', '333']
    }
  }
}
</script>
