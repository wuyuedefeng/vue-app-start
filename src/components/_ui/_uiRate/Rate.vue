<template>
  <div class="_ui-rate">
    <div class="bottom-star" ref="bottomRef">
      <i v-for="i in maxScore" class="star-item iconfont" @click.self="chooseScore(i, $event)" :class="{[icon]: true}" :key="i" :style="{fontSize: fontSize}"></i>
    </div>
    <div class="top-star" ref="topRef" :style="{width: `${score / maxScore * 100}%`, color}">
      <i v-for="i in maxScore" class="star-item iconfont" @click.self="chooseScore(i, $event)" :class="{[icon]: true}" :key="i" :style="{fontSize: fontSize}"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UiRank',
  props: {
    fontSize: {
      type: String,
      default: '16px',
      validator (value) {
        return value.match(/(px|rem)$/)
      }
    },
    color: {
      type: String,
      default: '#ee6f43'
    },
    icon: {
      type: String,
      default: 'icon-full-star'
    },
    score: {
      type: [Number, String],
      default: 1
    },
    maxScore: {
      type: Number,
      default: 5
    },
    allowHalf: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    chooseScore (score, event) {
      console.log(event)
      if (this.allowHalf) {
        let rect = event.target.getBoundingClientRect()
        let x = event.clientX - rect.left
        // let y = e.clientY - rect.top
        if (x < rect.width / 3) {
          score -= 0.5
        }
      }
      this.$emit('update:score', score)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "styleMix";
  @include ui-rate;
</style>
