import MessageBox from './MessageBox'
export default {
  install (Vue) {
    Vue.prototype._ui = Vue.prototype._ui || {
      _uiDialog: {}
    }
    Vue.use(MessageBox)
    Vue.prototype._ui._uiDialog.MessageBox = MessageBox
  }
}
