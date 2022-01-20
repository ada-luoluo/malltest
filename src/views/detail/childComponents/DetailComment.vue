<template>
<div class="recommend" v-if="Object.keys(comment).length !== 0" >
  <div class="recommend-top">
    <div class="avatar">
        <img :src="comment.user.avatar">
    </div>
    <div class="user-name">
       {{comment.user.uname}}
    </div>
  </div>
  <div class="recommend-txt">
    <p>{{comment.content}}</p>
    <span>
      {{showDate(comment.created)}}
        <!--  时间格式化    -->
  </span>
    <span>
      {{comment.style}}
    </span>
  </div>

  <div class="recommend-img">
   <img :src="item" v-for="(item, index) in comment.images" :key="index">
  </div>

</div>
</template>

<script>
import {formatDate} from "@/common/utils";


export default {
  name: "DetailCommend",
  props:{
    comment: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods: { //使用methods, vue3不能使用过滤器filter
    showDate(value) {
      //1.将时间戳转成date对象
      const date = new Date(value*1000)
      //2. 将date格式化
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.recommend{
  padding: 10px;
}
.recommend-top{
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.avatar img{
  width: 36px;
  border-radius: 100%;
}
.user-name{
  margin-left: 10px;
}

.recommend-txt{
  padding: 10px 0;
}

.recommend-txt p{
  padding-bottom: 10px;
}

.recommend-txt span{
  color: #999;padding-right: 5px;
}

.recommend-img{
  display: flex;
  flex-wrap: wrap;

}

.recommend-img img {
  width: 100px;
  height: 100px;

}


</style>
