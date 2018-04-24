/* eslint-disable */
export default [
  { path: '/_ui', name: '_uiHome', component: (resolve) => { require(['@/views/_ui/Index.vue'], resolve) }, children: [
    { path: '/_ui/_button', name: '_uiButton', component: (resolve) => { require(['@/views/_ui/_uiButton/Index.vue'], resolve) } }
  ]}
]
