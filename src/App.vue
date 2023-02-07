<template>
  <div>
    <router-link to="/raining">raining</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
*, #app {
  margin: 0;
  padding: 0;
}

#canvas {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
