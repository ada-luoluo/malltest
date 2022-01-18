<template>
<div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
<div class="info-list">
  <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index"
  :src="item" alt="">
<!--  从数组中遍历图片-->
</div>

</div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.info-list img{
  max-width: 100%;
}
</style>
