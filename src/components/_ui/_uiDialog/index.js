import MessageBox from './MessageBox'
import ToastBox from './ToastBox'
import ActionSheet from './ActionSheet'
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
    // ActionSheet
    Vue.use(ActionSheet)
    Vue.prototype._ui._uiDialog.ActionSheet = ActionSheet
  },
  MessageBox,
  ToastBox,
  ActionSheet
}
