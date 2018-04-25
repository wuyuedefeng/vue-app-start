import MessageBox from './MessageBox'
import ToastBox from './ToastBox'
export default {
  install (Vue) {
    Vue.prototype._ui = Vue.prototype._ui || {
      _uiDialog: {}
    }
    // MessageBox
    Vue.use(MessageBox)
    Vue.prototype._ui._uiDialog.MessageBox = MessageBox
    // Toast
    Vue.use(ToastBox)
    Vue.prototype._ui._uiDialog.ToastBox = ToastBox
  },
  MessageBox,
  ToastBox
}
