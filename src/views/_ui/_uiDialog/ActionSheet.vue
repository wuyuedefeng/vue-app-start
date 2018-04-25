<template>
  <div>
    <button @click="showActionSheet">show action sheet</button>
    <hr>
    <a href="https://github.com/wuyuedefeng/vue-app-start/blob/develop/src/views/_ui/_uiDialog/ActionSheet.vue" target="_blank">demo code</a>
  </div>
</template>

<script>
import Vue from 'vue'
import UiDialog from '@/components/_ui/_uiDialog'
Vue.use(UiDialog)
// UiDialog === this._ui._uiDialog
export default {
  methods: {
    showActionSheet () {
      UiDialog.ActionSheet.new({
        items: [{
          text: 'Action One',
          color: '#f00',
          click: () => { console.log(1) }
        }, {
          text: 'Action Two',
          color: true,
          disabled: true,
          click: () => { console.log(2) }
        }, {
          text: 'Action Three',
          click: () => { console.log(3) }
        }, {
          text: 'Action Four',
          hidden: true
        }],
        cancel: {
          text: '默认取消',
          // 隐藏取消按钮
          // hidden: true,
          click: () => { console.log('取消啦') }
        },
        callback: (item) => { console.log('关闭回调', item) }
      })
    }
  }
}
</script>
