<template>
<div id="home">

  <NavBar class="home-nav">
   <template #center> <!--  具名插槽 改某一个具体的插槽 其他不写就是默认  -->
      购物街
    </template>
  </NavBar>
  <homeSwiper :banners="banners"></homeSwiper>
  <RecommendView :recommends="recommends"></RecommendView>

</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import homeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import {getHomeMultiData} from "@/network/home";

export default {
  name: "home",
  components: {
    NavBar,
    homeSwiper,
    RecommendView
  },
  data() {
    return{
      banners: [],
      recommends:[]
    }
  },
  created() {
    //1.请求多个数据
    getHomeMultiData().then(res =>{//.then可以拿到数据
      // console.log(res)
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    })
  }

}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
