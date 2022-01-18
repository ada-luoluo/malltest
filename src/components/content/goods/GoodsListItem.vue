<template>
<div class="good-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="">
    <div class="good-item-title">
      <p>{{goodsItem.title}}</p>
      <p class="good-item-price">
        <span>{{goodsItem.price}}</span>
         <img src="@/assets/img/home/collect.svg" alt="">
         {{goodsItem.cfav}}
      </p>
     </div>
</div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type:Object, //返回对象
      default() {
      return {}
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)//传递商品id
    }
  }
}
</script>

<style scoped>
.good-item{
  flex: 0 0 50%;
  max-width: 100%;
  padding: 10px 5px;
}

.good-item img{
  max-width: 100%;
}

.good-item-title p{
  font-size: 14px;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
.good-item-price{
  display: flex!important;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
}
.good-item-title p span:first-child {
  color: #ff5777;
  font-size: 14px;
  font-weight: bold;
  padding-right: 10px;
}

</style>
