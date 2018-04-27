<template>
  <div>
    <div>
      <button @click="showLoadingBar">start</button>
      <button @click="finishLoadingBar">finish</button>
      <button @click="errorLoadingBar">error</button>
      <button @click="closeLoadingBar">close</button>
    </div>
    <hr>
    <a href="https://github.com/wuyuedefeng/vue-app-start/blob/develop/src/views/_ui/_uiLoadingBar/Index.vue" target="_blank">demo code</a>
  </div>
</template>

<script>
import Vue from 'vue'
import UiLoadingBar from '@/components/_ui/_uiLoadingBar'
Vue.use(UiLoadingBar)
let loadingBar = UiLoadingBar.new()
// let loadingBar = UiLoadingBar.new({color: '#00F', failedColor: '#f00'})
export default {
  methods: {
    showLoadingBar () {
      loadingBar.start()
    },
    finishLoadingBar () {
      loadingBar.finish()
    },
    errorLoadingBar () {
      loadingBar.error()
    },
    closeLoadingBar () {
      loadingBar.close()
    }
  }
}
</script>
