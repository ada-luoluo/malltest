<template>
<div class="goods">
  <goods-list-item v-for="item in goods" :key="item" :goods-item="item"></goods-list-item>
<!--  {{goods}}-->
</div>
</template>

<script>
import goodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  components:{
    goodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
}
</style>
