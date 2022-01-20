<template>
<!-- v-if="Object.keys(goods).length !==0" 如果没有数据就不渲染 -->

<div v-if="Object.keys(goods).length !==0" class="base-info">
  <div class="info-title">
    {{goods.title}}
  </div>
  <div class="info-price">
    <span class="n-price">{{goods.newPrice}}</span>
    <span class="o-price">{{goods.oldPrice}}</span>
    <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
  </div>
 <div class="info-other">
   <span>{{goods.columns[0]}}</span>
   <span>{{goods.columns[1]}}</span>
   <span>{{goods.services[goods.services.length-1].name}}</span>
 </div>
<div class="info-service">
  <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
    <img :src="goods.services[index].icon" alt="">
    <span>{{goods.services[index-1].name}}</span>
  </span>
</div>
</div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type:Object,
      default() {
         return {}
      }
    }
  }
}
</script>

<style scoped>

.base-info{
  padding: 10px;
}
.info-title{
  font-size: 16px;

}

.info-price{
  padding: 10px 0;
}

.n-price{
  color: #ff5777;
  font-weight: bold;
}

.o-price {
  padding: 0 20px;
  color: #999;
}

.discount{
  background-color:#ff5777;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
}

.info-other{
  display: flex;

}

.info-other span{
  flex: 1;
  color: #666;
  font-size: 14px;
}
.info-service{
  margin-top: 20px;
  display: flex;

  justify-content: space-between;
}

.info-service-item{

  font-size: 12px;
  vertical-align: center;
}

.info-service-item img{
  width: 12px;
  margin-right: 5px;
}

.info-service-item span{
  display: inline-block;
}

</style>
