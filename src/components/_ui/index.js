import UiDialog from '@/components/_ui/_uiDialog'
export default {
  install (Vue) {
    Vue.use(UiDialog)
    // button
    Vue.component('UiButton', (resolve) => {
      resolve(require('./_uiButton/Button.vue'))
    })
    // RadioGroup Radio
    Vue.component('UiRadioGroup', (resolve) => {
      resolve(require('./Radio/RadioGroup.vue'))
    })
    Vue.component('UiRadio', (resolve) => {
      resolve(require('./Radio/Radio.vue'))
    })
  }

}
