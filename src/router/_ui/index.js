/* eslint-disable */
export default [
  { path: '/_ui', name: '_uiHome', component: (resolve) => { require(['@/views/_ui/Index.vue'], resolve) }, children: [
    { path: '/_ui/_uiButton', name: '_uiButton', component: (resolve) => { require(['@/views/_ui/_uiButton/Index.vue'], resolve) } },
    { path: '/_ui/_uiRadio', name: '_uiRadio', component: (resolve) => { require(['@/views/_ui/_uiRadio/Index.vue'], resolve) } },
    { path: '/_ui/_uiCheckbox', name: '_uiCheckbox', component: (resolve) => { require(['@/views/_ui/_uiCheckbox/Index.vue'], resolve) } },
    { path: '/_ui/_uiPopup', name: '_uiPopup', component: (resolve) => { require(['@/views/_ui/_uiPopup/Index.vue'], resolve) } },
    { path: '/_ui/_uiDialog/messageBox', name: '_uiDialog', component: (resolve) => { require(['@/views/_ui/_uiDialog/Index.vue'], resolve) }, children: [
      { path: '/_ui/_uiDialog/messageBox', name: '_uiDialog-MessageBox', component: (resolve) => { require(['@/views/_ui/_uiDialog/MessageBox.vue'], resolve) } },
      { path: '/_ui/_uiDialog/toastBox', name: '_uiDialog-ToastBox', component: (resolve) => { require(['@/views/_ui/_uiDialog/ToastBox.vue'], resolve) } },
      { path: '/_ui/_uiDialog/actionSheet', name: '_uiDialog-ActionSheet', component: (resolve) => { require(['@/views/_ui/_uiDialog/ActionSheet.vue'], resolve) } }
    ]}
  ]}
]
