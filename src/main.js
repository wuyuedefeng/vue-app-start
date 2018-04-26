// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/stylesheets/application.scss'
import shareScssVars from './assets/javascripts/_share_scss_vars'

if (shareScssVars._uiUseRem) {
  // 仅rem模式引入 默认值 375, 于scss中$_uiRemDesignSketchWidth保持一致，这里的375指：在375宽度的屏幕 1px = 1rem
  require('./components/_ui/javascripts/rem.js')(shareScssVars._uiRemDesignSketchWidth)
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
