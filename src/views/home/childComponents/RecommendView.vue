<template>
<div class="recommend">
 <div v-for="item in recommends" :key="item" class="recommend-item">
   <a :href="item.link">
       <img :src="item.image" alt="">
     <div class="recommend-title">{{item.title}}</div>
   </a>
 </div>
</div>
</template>

<script>
export default {
  name: "RecommendView",
  props: { //从首页拿数据
    recommends: {
      Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 0 0 25%;
  padding: 20px 10px;
}

.recommend-item img{
  max-width: 100%;
}


.recommend-title{
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
}

</style>
