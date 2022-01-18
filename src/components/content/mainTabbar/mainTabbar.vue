<template>

  <tabbar>

    <tabbar-item path="/home" activeColor="#1296db">
      <!-- 父组件中v-solt必须写在template中 可用#的缩写 -->
       <template  #item-icon>
        <img src="~assets/img/tabbar/index.svg" alt=" ">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/index-active.svg" alt=" ">
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
   </tabbar-item>
    <tabbar-item path="/category" activeColor="#1296db">
      <template #item-icon>
        <img src="~assets/img/tabbar/classification.svg" alt=" ">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/cate-active.svg" alt=" ">
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tabbar-item>
    <tabbar-item path="/cart" activeColor="#1296db">
      <template #item-icon>
        <img src="~assets/img/tabbar/cart.svg" alt=" ">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/cart-active.svg" alt=" ">
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
  </tabbar-item>
    <tabbar-item path="/profile" activeColor="#1296db">
      <template #item-icon>
        <img src="~assets/img/tabbar/profile.svg" alt=" ">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/profile-active.svg" alt=" ">
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
   </tabbar-item>
  </tabbar>

</template>

<script>

import tabbar from "@/components/common/tabbar/tabbar";

import tabbarItem from "@/components/common/tabbar/tabbarItem";

export default {
  name: "mainTabbar",
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style scoped>

</style>
