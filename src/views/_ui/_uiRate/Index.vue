<template>
  <div>
    <div>
      <h3>max-score: 8, font-size: 16px</h3>
      <ui-rate :score.sync="rate"></ui-rate>
    </div>
    <div>
      <h3>max-score: 8</h3>
      <ui-rate :score.sync="rate" :max-score="10"></ui-rate>
    </div>
    <div>
      <h3>max-score: 8, font-size: 4rem, allow-half: true</h3>
      <ui-rate :score.sync="rate" :max-score="8" font-size="4rem" :allow-half="true"></ui-rate>
    </div>
    now select value: {{rate}}
    <hr>
    <a href="https://github.com/wuyuedefeng/vue-app-start/blob/develop/src/views/_ui/_uiRate/Index.vue" target="_blank">demo code</a>
  </div>
</template>

<script>
import '@/components/_ui/_uiRate'
export default {
  data () {
    return {
      rate: 3
    }
  }
}
</script>
