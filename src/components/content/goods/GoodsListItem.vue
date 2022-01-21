<template>


<div class="good-item" @click="itemClick">
<!--    <img :src="showImg" alt="">-->
  <img v-lazy="showImg" alt=""><!-- 这是使用了图片懒加载  -->

<!--其他组件数据格式相同,可多次使用这个组件,不同的地方比较少的话,可以通过计算属性做判断先.
比如这里推荐商品列表和首页的商品列表是一样的,所以可以使用同个组件,不同的是产品图的数据结构有点不一样而已 -->
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
  computed:{
    showImg() {  //判断有image就显示image,没有image就显示show.img
      return this.goodsItem.image || this.goodsItem.show.img
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
