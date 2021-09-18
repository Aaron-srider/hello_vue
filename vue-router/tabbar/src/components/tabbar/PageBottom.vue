<template>

  <tab-bar>
    <tab-bar-item path="/home" active-color="blue">
      <img src="../../assets/img/tabbar/home.svg" slot="img"/>
      <img src="../../assets/img/tabbar/home_active.svg" slot="img_active"/>
      <div slot="content">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/category" active-color="blue">
      <img src="../../assets/img/tabbar/category.svg" slot="img"/>
      <img src="../../assets/img/tabbar/category_active.svg" slot="img_active"/>

      <div slot="content">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/shopcar" active-color="blue">
      <img src="../../assets/img/tabbar/shopcar.svg" slot="img"/>
      <img src="../../assets/img/tabbar/shopcar_active.svg" slot="img_active"/>

      <div slot="content">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/profile" active-color="blue">
      <img src="../../assets/img/tabbar/profile.svg" slot="img"/>
      <img src="../../assets/img/tabbar/profile_active.svg" slot="img_active"/>

      <div slot="content">我的</div>
    </tab-bar-item>
  </tab-bar>

</template>

<script>
    import TabBar from "./TabBar.vue";
    import TabBarItem from "./TabBarItem.vue";

    export default {
      components: {TabBar, TabBarItem},
      name: "page-bottom"
    }
</script>

<style scoped>

</style>
