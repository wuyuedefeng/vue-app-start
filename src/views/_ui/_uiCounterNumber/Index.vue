<template>
  <div>
    <div>
      <h3>default</h3>
      <ui-counter-number :number="number1"></ui-counter-number>
      <h3>:fix-count="5"</h3>
      <ui-counter-number :number="number1" :fix-count="5"></ui-counter-number>
      <h3>:fix-count="10" :speed="1000" :delay-each="100"</h3>
      <ui-counter-number :number="number2" :fix-count="10" :speed="1000" :delay-each="100"></ui-counter-number>
      <h3>:fix-count="10" fix-str="-" :speed="1000" :delay-each="100"</h3>
      <ui-counter-number :number="number2" :fix-count="10" fix-str="-" :speed="1000" :delay-each="100"></ui-counter-number>
      <h3>height="50" & custom view</h3>
      <ui-counter-number :number="number1" height="50">
        <template slot-scope="{number}">
          <span style="display: inline-block; background: #999; width: 50px; height: 50px; line-height: 50px; color: #f00; font-size: 30px">{{number}}</span>
        </template>
      </ui-counter-number>
      <h3>height="30" unit="rem" & custom view</h3>
      <ui-counter-number :number="number1" height="20" unit="rem">
        <template slot-scope="{number}">
          <span style="display: inline-block; background: #999; width: 10rem; color: #f00; font-size: 10rem">{{number}}</span>
        </template>
      </ui-counter-number>
    </div>
    <hr>
    <a href="https://github.com/wuyuedefeng/vue-app-start/blob/develop/src/views/_ui/_uiCounterNumber/Index.vue" target="_blank">demo code</a>
  </div>
</template>

<script>
import '@/components/_ui/_uiCounterNumber'
export default {
  data () {
    return {
      number1: 30,
      number2: 888
    }
  },
  mounted () {
    setInterval(() => {
      let val = -1 // parseInt(Math.random() + 0.5) * 2 - 1
      this.number1 += val
    }, 1000)

    setInterval(() => {
      this.number2 += parseInt(Math.random() * 500 - 250)
    }, 3000)
  }
}
</script>
