import UiDialog from '@/components/_ui/_uiDialog'
export default {
  install (Vue) {
    Vue.use(UiDialog)
    // button
    Vue.component('UiButton', (resolve) => {
      resolve(require('./_uiButton/Button.vue'))
    })
  }

}
