<template>
  <div class="detailnavbar">
    <nav-bar>
      <template #left>
        <img src="@/assets/img/common/back.svg" alt=""
             class="back" @click="backClick">
      </template>
      <template #center>
        <div class="title">
          <div v-for="(item,index) in titles" :key="index"
               class="title-item"
               :class="{active: index === currentIndex}"
               @click="itemClick(index)">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>

  </div>

</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back() //返回
    }
  }
}
</script>

<style scoped>
.detailnavbar{

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10000;
  background-color: #fff;
}

.title{
 display: flex;
}
.title-item{
  flex: 1;
  font-size: 12px;
}
.back{
  width: 24px;

}
.active{
  color: #ff5777;
}

</style>
