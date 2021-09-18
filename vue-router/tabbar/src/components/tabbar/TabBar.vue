<template>


  <div class="tab-bar">

    <slot></slot>

  </div>
</template>

<script>
  import tabBarItem from "./TabBarItem.vue"

  export default {
    name: "tab-bar",
    components: {
      tabBarItem
    },

  }

</script>

<style scoped>

  @import "./tabbar.css";

</style>
