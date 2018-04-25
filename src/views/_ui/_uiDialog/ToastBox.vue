<template>
  <div>
    <button @click="usage1">usage1</button>
    <button @click="usage2">usage2</button>
    <button @click="usage3">usage3</button>
  </div>
</template>

<script>
import Vue from 'vue'
import UiDialog from '@/components/_ui/_uiDialog'
Vue.use(UiDialog)
export default {
  methods: {
    usage1 () {
      let loading1 = this._ui._uiDialog.ToastBox.new({message: '很快就好了', callback: () => { console.log('closed') }})
      setTimeout(function () {
        loading1.close()
      }, 3000)
    },
    // new 几个相同的identify，就需要调用多少次 close 方法
    usage2 () {
      this._ui._uiDialog.ToastBox.new({icon: 'icon-loading', message: '很快就好了', callback: () => { console.log('closed') }, identify: '1'})
      this._ui._uiDialog.ToastBox.new({identify: '1'})
      this._ui._uiDialog.ToastBox.new({identify: '1'})
      this._ui._uiDialog.ToastBox.new({identify: '1'})
      this._ui._uiDialog.ToastBox.new({identify: '1'})
      function setTime () {
        setTimeout(() => {
          let identify1Loading = UiDialog.ToastBox.getWithIdentify('1')
          // 强制关闭所有
          // Loading.getWithIdentify('1').forceClose()
          if (identify1Loading) {
            console.log('before close: ', identify1Loading.$extraCounter)
            identify1Loading.close()
            console.log('after close: ', identify1Loading.$extraCounter)
            setTime()
          }
        }, 3000)
      }
      setTime()
    },
    usage3 () {
      function createPromise () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let random = Math.random()
            if (random > 0.5) {
              resolve('哈哈，赢了')
            }
            reject(new Error('呜呜~，输了'))
          }, 3000)
        })
      }
      this._ui._uiDialog.ToastBox.newWithPromise(createPromise(), {message: '华山论剑'}).then(result => {
        console.log(result)
      }).catch(err => {
        console.log('err--:', err)
      })
    }
  }
}
</script>
