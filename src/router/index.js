import Vue from 'vue'
import Router from 'vue-router'
import _uiRouter from './_ui'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [..._uiRouter, {
    name: 'Home', path: '/', component: (resolve) => { require(['@/views/Home.vue'], resolve) }
  }]
})
