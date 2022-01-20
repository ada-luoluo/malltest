<template>
<div class="bottom-bar">
  <div class="bar-item">
    <div class="bar-left">
    <div>
      <i class="layui-icon layui-icon-service"></i>
      <span class="text">客服</span>
    </div>
    <div>
      <i class="layui-icon layui-icon-gift"></i>
      <span class="text">店铺</span>
    </div>
    <div>
      <i class="layui-icon layui-icon-heart"></i>
      <span class="text">收藏</span>
    </div>
    </div>

    <div class="bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    addToCart() {
     this.$emit('addCart') //子组件发送事件给父组件 $emit
    }
  }

}
</script>

<style scoped>
.bottom-bar{
  position: fixed;
  height: 49px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 1000;
}
.bar-item{
  display: flex;
  justify-content: space-between;
}
.bar-left{
  display: flex;
  width: 50%;
}
.bar-left div{
  flex: 1;
  text-align: center;
  padding-top: 5px;
}
.bar-left div i{
  display: block;
  font-size: 20px;
}
.text{
  font-size: 12px;
}
.bar-right{
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.cart, .buy{
  width: 50%;
  height: 49px;
  line-height: 49px;
  background-color: #ff5777;
  color: #fff;
  padding: 0 10px;
  text-align: center;
}
.buy{
  background-color: #FFB800;
}

</style>
