<template>
<div>
  <span class="shop-logo">
    <img :src="shopinfo.logo">
  </span>
<span class="shop-name">
  {{shopinfo.name}}
</span>
</div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopinfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
