<template>
  <div class="_ui-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      require: true
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (nv) {
        this.$children.filter(item => item.$options.name === 'UiCheckbox').forEach((child) => {
          child.checked = this.value.indexOf(child.val) !== -1
        })
      }
    }
  },
  watch: {
    value: {
      handler (newVal) {
        this.$nextTick(() => {
          this.currentValue = newVal
        })
      },
      immediate: true
    }
  },
  methods: {
    change (val) {
      let index = this.value.indexOf(val)
      if (index === -1) {
        this.value.push(val)
      } else {
        this.value.splice(index, 1)
      }
      this.currentValue = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "styleMix";
  @include ui-checkbox-group;
</style>

<!--<wap-checkbox-group v-model="arr">-->
  <!--<wap-checkbox val="111">aaaa</wap-checkbox>-->
  <!--<wap-checkbox val="222">bbbb</wap-checkbox>-->
<!--</wap-checkbox-group>-->
