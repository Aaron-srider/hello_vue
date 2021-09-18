<template>
  <div id="app">
    <router-view/>

    <PageBottom/>
  </div>
</template>

<script>
  import PageBottom from "./components/tabbar/PageBottom.vue"

  export default {
    name: 'App',
    components:{
      PageBottom
    }
  }
</script>

<style>
@import "./assets/css/base.css";


</style>
