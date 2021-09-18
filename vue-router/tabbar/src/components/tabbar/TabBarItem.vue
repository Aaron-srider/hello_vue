<template>
  <div class="tab-bar-item" @click="onItemClick()">

    <div v-if="!isItemActive">
      <slot name="img"/>
    </div>
    <div v-else>
      <slot name="img_active"/>
    </div>

    <div v-bind:class="{active: isItemActive}" :style="activeStyle">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-bar-item",
    props: {
      path: {
        type: String,
        required: false
      },
      activeColor: {
        type: String,
        required: false,
        default: "red"
      }
    },
    data() {
      return {
      }
    },
    methods: {
      onItemClick() {
        this.$router.replace(this.path)
      }
    },
    computed:{
      isItemActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isItemActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  @import "tabBarItem.css";
</style>
