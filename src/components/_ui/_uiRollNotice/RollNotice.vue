<template>
  <div class="_ui-roll-notice">
    <div class="item-wrap" :style="calcStyles" ref="sliderWrap">
      <div class="roll-notice-item first" v-html="lastItemHtml"></div>
      <slot></slot>
      <div class="roll-notice-item last" v-html="firstItemHtml"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: [Number, String],
      default: 30
    },
    unit: {
      default: 'px',
      validator (value) {
        return ['px', 'rem'].indexOf(value) > -1
      }
    },
    speed: {
      type: Number,
      default: 500
    },
    autoplay: {
      type: Number,
      default: 4000
    },
    direction: {
      type: String,
      validator (value) {
        return ['up', 'down'].indexOf(value) > -1
      },
      default: 'up'
    }
  },
  data () {
    return {
      timer: null,
      items: [],
      nowItemIndex: 1,
      firstItemHtml: '',
      lastItemHtml: '',
      styles: {
        transform: 0,
        transitionDuration: 0
      }
    }
  },
  computed: {
    itemsCount () {
      return this.items.length
    },
    calcStyles () {
      return Object.assign(this.styles, {height: this.height + this.unit})
    }
  },
  methods: {
    init () {
      this.destroy()
      let children = this.$refs.sliderWrap.children
      this.items = Array.prototype.slice.call(children, 1, -1)
      if (this.itemsCount <= 0) return
      Array.prototype.forEach.call(children, (child) => {
        child.classList.add('roll-notice-item')
      })
      this.firstItemHtml = this.items[0].innerHTML
      this.lastItemHtml = this.items[this.itemsCount - 1].innerHTML
      this.setTranslate(0, -this.height)
      this.autoPlay()
    },
    setTranslate (speed, translate) {
      this.styles.transitionDuration = speed + 'ms'
      this.styles.transform = `translate3d(0, ${translate}${this.unit}, 0)`
    },
    destroy () {
      clearInterval(this.timer)
    },
    autoPlay () {
      this.timer = setInterval(() => {
        if (this.direction === 'up') {
          this.setTranslate(this.speed, -(++this.nowItemIndex * this.height))
          if (this.nowItemIndex >= this.itemsCount) {
            this.nowItemIndex = 0
            setTimeout(() => {
              this.setTranslate(0, 0)
            }, this.speed)
          }
        } else {
          this.setTranslate(this.speed, -(--this.nowItemIndex * this.height))
          if (this.nowItemIndex <= 0) {
            this.nowItemIndex = this.itemsCount
            setTimeout(() => {
              this.setTranslate(0, -this.itemsCount * this.height)
            }, this.speed)
          }
        }
      }, this.autoplay)
    }
  },
  destroyed () {
    this.destroy()
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "styleMix";
  @include ui-roll-notice;
</style>
