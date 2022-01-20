<template>
<div class="shop-info">
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
.shop-info{
  display: flex;
  align-items: center;
  padding: 10px;
}

.shop-logo img{
  width: 56px;
  border-radius: 100%;
  width: 56px;
  height: 56px;
  border: 1px solid #ddd;
  padding: 4px;
}
.shop-name{
  font-weight: bolder;
  margin-left: 10px;
}

</style>
