<template>
  <div class="_ui-loading-bar fade" v-if="show">
    <div class="fade inner" :style="styles"></div>
  </div>
</template>

<script>
export default {
  name: 'UiLoadingBar',
  props: {
    color: {
      default: '#5cb85c'
    },
    failedColor: {
      default: '#ff4949'
    }
  },
  data () {
    return {
      percent: 0,
      status: 'success',
      show: false,
      timer: null
    }
  },
  computed: {
    styles () {
      let style = {
        width: `${this.percent}%`
      }

      if (this.status === 'success') {
        style.backgroundColor = this.color
      }

      if (this.status === 'error') {
        style.backgroundColor = this.failedColor
      }
      return style
    }
  },
  methods: {
    clearTimer () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    start () {
      if (this.timer) { return false }

      let percent = 0
      this.updateToPercent(percent)

      this.timer = setInterval(() => {
        percent += Math.floor(Math.random() * (100 - this.percent) / 2 + 5)
        if (percent > 95) {
          percent = 95
          this.clearTimer()
        }
        console.log(percent)
        this.updateToPercent(percent)
      }, 200)
    },
    updateToPercent (percent) {
      this.percent = percent
      this.status = 'success'
      this.show = true
    },
    finish () {
      this.clearTimer()
      this.updateToPercent(100)
      this.hide()
    },
    hide () {
      setTimeout(() => {
        this.show = false
        setTimeout(() => {
          this.percent = 0
        }, 200)
      }, 800)
    },
    error () {
      this.clearTimer()
      this.percent = 100
      this.status = 'error'
      this.show = true
      this.hide()
    },
    close () {
      this.clearTimer()
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
  ._ui-loading-bar {
    position: fixed;
    top: 0;
    height: pxRem(2);
    width: 100%;

    .fade {
      transition: all .8s ease;
    }

    .inner {
      height: 100%;
    }
  }
</style>
