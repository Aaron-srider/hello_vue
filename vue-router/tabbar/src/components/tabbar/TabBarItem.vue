<template>
  <div class="tab-bar-item">
    <slot name="content"/>
    <slot name="img"/>
  </div>
</template>

<script>
  export default {
    name: "tab-bar-item",
    props: {
    }
  }
</script>

<style scoped>
@import "tabBarItem.css";
</style>
