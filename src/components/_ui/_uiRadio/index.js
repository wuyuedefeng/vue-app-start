import Vue from 'vue'
Vue.component('UiRadioGroup', (resolve) => {
  resolve(require('./RadioGroup.vue'))
})
Vue.component('UiRadio', (resolve) => {
  resolve(require('./Radio.vue'))
})
