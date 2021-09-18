<template>
  <div id="app">
    <router-view/>

    <tabBar/>
  </div>
</template>

<script>
  import tabBar from "./components/tabbar/TabBar.vue"

  export default {
    name: 'App',
    components: {
      tabBar
    }
  }
</script>

<style>
@import "./assets/css/base.css";


</style>
