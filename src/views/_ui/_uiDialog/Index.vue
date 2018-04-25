<template>
  <div>
    <h3>ui-dialog</h3>
    <ul>
      <li><router-link :to="{name: '_uiDialog-MessageBox'}">_ui dialog - MessageBox</router-link></li>
      <li><router-link :to="{name: '_uiDialog-ToastBox'}">_ui dialog - ToastBox</router-link></li>
      <li><router-link :to="{name: '_uiDialog-ActionSheet'}">_ui dialog - ActionSheet</router-link></li>
    </ul>
    <hr>
    <div style="margin: 50px 15px">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  ul {
    padding: 5px;
    li {
      font-size: 20px;
      font-weight: bold;
      line-height: 40px;
    }
  }
</style>
