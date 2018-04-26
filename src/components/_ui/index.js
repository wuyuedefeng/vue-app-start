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
      resolve(require('./_uiRadio/RadioGroup.vue'))
    })
    Vue.component('UiRadio', (resolve) => {
      resolve(require('./_uiRadio/Radio.vue'))
    })
    // CheckBoxGroup CheckBox
    Vue.component('UiCheckboxGroup', (resolve) => {
      resolve(require('./_uiCheckbox/CheckboxGroup.vue'))
    })
    Vue.component('UiCheckbox', (resolve) => {
      resolve(require('./_uiCheckbox/Checkbox.vue'))
    })
    // HorizontalNotice
    Vue.component('UiMarqueeNotice', (resolve) => {
      resolve(require('./_uiMarqueeNotice/MarqueeNotice.vue'))
    })
  }
}
