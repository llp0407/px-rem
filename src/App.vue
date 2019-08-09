<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./style/reset.css";
body {
  height: 100%;
  width: 100%;
  background: white;
}
#app {
  width: 100%;
  /* height: 100%; */
  font-family: PingFang-SC-Bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* min-height: 100%; */
  border-bottom: 1px solid transparent;
  max-width: 1366px; /* 兼容一下横屏的ipad pro*/
}
</style>
