<template>
<div id="home">
<!--template里面组件名用小写,多单词用-连接-->
  <nav-bar class="home-nav">
   <template #center> <!--  具名插槽 改某一个具体的插槽 其他不写就是默认  -->
      购物街
    </template>
  </nav-bar>
  <homeSwiper :banners="banners"></homeSwiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <feature></feature>
  <tab-control class="tab-control"
              :titles="['流行', '新款', '精选']"
              @tabClick="tabClick"></tab-control>
<!--  根据点击的index下标拿对应的数据 将取出的数据传给goodslist 相应的goodslist展示数据-->
   <goods-list :goods="showGoods"></goods-list>

<div style="height: 100px"></div>

</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import homeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import Feature from "@/views/home/childComponents/Feature";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import {getHomeGoods, getHomeMultiData} from "@/network/home";




export default {
  name: "home",
  components: {
    NavBar,
    homeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList
  },
  data() {
    return{
      banners: [],
      recommends:[],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop'
    }
  },
  computed: { //计算属性
    showGoods() {
      return this.goods[this.currentType].list
    }
  },

  created() {  //只在created里面写主要逻辑,methods

    //这个是直接在created处理数据,不建议这么做
    // getHomeMultiData().then(res =>{//.then可以拿到数据
    //   this.banners = res.data.data.banner.list;
    //   this.recommends = res.data.data.recommend.list;
    //
    // })

    this.getHomeMultiData() //这里必须写this,调用methods里面的方法
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  methods:{ //数据处理都在这里

    tabClick(index) {
      // console.log(index)
       switch (index) {
         case 0:  //如果当前的index是0,默认展示pop
           this.currentType = 'pop'
           break
         case 1: //如果是1, 展示new
           this.currentType = 'new'
           break
         case 2:
           this.currentType = 'sell'
           break
       }
     },




    //1.请求首页多个数据
    getHomeMultiData() {
      getHomeMultiData().then(res =>{//.then可以拿到数据
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    //2.首页商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1 //先取出原来的page 然后+1, 就可以请求到下一页的数据
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.data.list)
        this.goods[type].list.push(...res.data.data.list) //push(.....)
        this.goods[type].page += 1
      })
    }


  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control{
  top: 44px;
  position: sticky;
  background-color: #fff;
}

</style>
