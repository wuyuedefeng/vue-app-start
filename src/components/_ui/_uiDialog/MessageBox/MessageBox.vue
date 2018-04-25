<template>
  <div class="_ui-dialog">
    <div class="message-box">
      <h4 class="title" v-if="title" v-html="title"></h4>
      <p class="content" v-html="message"></p>
      <div class="ops">
        <span v-for="(button, index) in calcButtons" :key="index"
              class="btn" :class="Object.assign({'btn-disabled': button.disabled}, button.class)"
              @click.stop="btnClick(button)"
              :style="{color: button.color, width: 100 / buttons.length + '%'}"
              v-html="button.text"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    message: String,
    showCancelBtn: {
      type: Boolean,
      default: false
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    showConfirmBtn: {
      type: Boolean,
      default: true
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    buttons: {
      type: Array,
      default: () => { return [] }
    },
    callback: {
      type: Function
    }
  },
  computed: {
    calcButtons () {
      if (this.buttons.length) {
        return this.buttons
      }
      let buttons = []
      if (this.showCancelBtn) {
        buttons.push({
          text: this.cancelBtnText,
          class: {'btn-cancel': true}
        })
      }
      if (this.showConfirmBtn) {
        buttons.push({
          text: this.confirmBtnText,
          class: {'btn-confirm': true}
        })
      }
      return buttons
    }
  },
  methods: {
    btnClick (btn) {
      if (!btn.disabled) {
        btn.click && btn.click()
        this.close(btn)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "styleMix";
  @include ui-dialog-message-box;
</style>
