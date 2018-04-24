<template>
  <div>
    <ul class="fl" style="width: 20%">
      <li><router-link :to="{name: '_uiDialog'}">ui-dialog</router-link></li>
    </ul>
    <div style="overflow: hidden">
      <router-view></router-view>
    </div>
  </div>
</template>
