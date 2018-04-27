<template>
  <div class="_ui-switch" :class="{'is-long': isLong, 'is-longer': isLonger}" :style="coreStyle">
    <label class="switch-inner-wrap" :class="{checked: currentValue, disabled: disabled}">
      <input class="switch-input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
      <span class="switch-core">
        <span class="before" ref="coreBeforeRef"></span>
      </span>
      <span class="switch-label"><slot>{{currentValue ? activeText : inactiveText}}</slot></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiSwitch',
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#26a2ff'
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: '#bfcbd9'
    },
    inactiveText: {
      type: String,
      default: ''
    },
    isLong: {
      type: Boolean,
      default: false
    },
    isLonger: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    coreStyle () {
      if (this.currentValue) {
        return {backgroundColor: this.activeColor, borderColor: this.activeColor}
      }
      return {backgroundColor: this.inactiveColor, borderColor: this.inactiveColor}
    }
  },
  watch: {
    inactiveColor: {
      immediate: true,
      handler () {
        this.$nextTick(() => {
          this.updateInactiveColor()
        })
      }
    }
  },
  methods: {
    updateInactiveColor () {
      this.$refs.coreBeforeRef.style.backgroundColor = this.inactiveColor
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "styleMix";
  @include ui-switch;
</style>
