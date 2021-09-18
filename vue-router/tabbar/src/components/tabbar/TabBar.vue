<template>
  <div class="tab-bar">
    <tab-bar-item  >
      <img src="../../assets/img/tabbar/home.svg" slot="img"/>
      <div slot="content">首页</div>
    </tab-bar-item>

    <tab-bar-item  >
      <img src="../../assets/img/tabbar/category.svg" slot="img"/>
      <div slot="content">分类</div>
    </tab-bar-item>

    <tab-bar-item>
      <img src="../../assets/img/tabbar/shopcar.svg" slot="img"/>
      <div slot="content">购物车</div>
    </tab-bar-item>

    <tab-bar-item  >
      <img src="../../assets/img/tabbar/profile.svg" slot="img"/>
      <div slot="content">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
  import tabBarItem from "./TabBarItem.vue"

  export default {
    name: "tab-bar",
    components: {
      tabBarItem
    }
  }

</script>

<style scoped>

  @import "./tabbar.css";

</style>
