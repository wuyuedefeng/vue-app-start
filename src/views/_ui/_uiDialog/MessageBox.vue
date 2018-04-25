<template>
  <div>
    <div>
      <button @click="showAlert">show Alert</button>
      <button @click="showConfirm">show Confirm</button>
      <button @click="showCustomConfirm">show Custom Confirm</button>
    </div>
    <a href="https://raw.githubusercontent.com/wuyuedefeng/vue-app-start/master/src/views/_ui/_uiDialog/MessageBox.vue" target="_blank">demo code</a>
  </div>
</template>

<script>
import Vue from 'vue'
import UiDialog from '@/components/_ui/_uiDialog'
Vue.use(UiDialog)
// UiDialog === this._ui._uiDialog
export default {
  methods: {
    showAlert () {
      this._ui._uiDialog.MessageBox.new({
        title: '选填标题',
        message: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        callback: (trigger) => {
          console.log('closed', trigger)
        }
      })
    },
    showConfirm () {
      this._ui._uiDialog.MessageBox.new({
        title: '选填标题?',
        message: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        showCancelBtn: true,
        callback: (trigger) => {
          console.log('closed', trigger)
        }
      })
    },
    showCustomConfirm () {
      this._ui._uiDialog.MessageBox.new({
        title: '<span style="color: #0f0">选填标题?</span>',
        message: '哈哈哈哈哈<span style="color: #00f">哈哈</span>哈哈哈哈哈哈哈哈哈哈,啦啦啦两岸拉梁啊',
        buttons: [{
          text: '<span>取消</span>',
          class: {'btn-cancel': true}
        }, {
          text: '让我想想',
          color: '#f00',
          disabled: true,
          click: function () {
            console.log('think a moment')
          }
        }, {
          text: '确定',
          class: {'btn-confirm': true},
          click: () => {
            console.log('you click the confirm btn')
          }
        }],
        callback: (trigger) => {
          console.log('closed', trigger)
        }
      })
    }
  }
}
</script>
