<template>

  <detail-nav-bar/>

 <div id="detail">

  <detail-swiper :top-images="topImages"/>
  <!--  这里不要忘记传数据 :top-images="topImages"-->
  <detail-base-info :goods="goods"></detail-base-info>
  <detail-shop-info :shopinfo="shopinfo"></detail-shop-info>
  <detail-info :detail-info="detailInfo"></detail-info>
  <detail-param-info :param-info="paramInfo"></detail-param-info>
  <detail-comment :comment ="comment"></detail-comment>
  <goods-list :goods="recommends"></goods-list>
  <!--  这里不需要重新写推荐商品了,直接使用goodslist组件-->
   {{$store.state.cartList.length}}
   <div style="height: 49px"></div>
   <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
</div>




</template>

<script>
import DetailNavBar from "@/views/detail/childComponents/DetailNavBar";
import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComponents/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComponents/DetailShopInfo";
import DetailInfo from "@/views/detail/childComponents/DetailInfo";
import DetailParamInfo from "@/views/detail/childComponents/DetailParamInfo";
import DetailComment from "@/views/detail/childComponents/DetailComment";
import GoodsList from "@/components/content/goods/GoodsList"; //引入goodslist组件
import DetailBottomBar from "@/views/detail/childComponents/DetailBottomBar";

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "@/network/detail";


export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParamInfo,
    DetailComment,
    GoodsList,
    DetailBottomBar
  },
  data() {
    return{
      iid: null, //保存商品id
      topImages: [],
      goods: [],
      shopinfo: [],
      detailInfo: [],
      paramInfo: [],
      comment: [],
      recommends:[], //保存推荐数据
    }
  },
  created() {
    this.iid = this.$route.params.iid //拿到商品id

    //请求产品详情数据
    getDetail(this.iid).then(res =>{ //拿到详情页的接口数据
      //console.log(res)

      const data = res.data.result
      //1.获取头部banner图片
      this.topImages = res.data.result.itemInfo.topImages
      //2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services )
      //3.获取店铺信息
      this.shopinfo = new Shop(data.shopInfo)
      //4.获取商品详情图
     this.detailInfo = data.detailInfo
      //5.获取产品参数
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //6.获取商品评论
      this.comment = data.rate.list[0]//这里默认值显示一条,所以只要拿第一条数据就可以了
    })

    //请求商品推荐数据
    getRecommend().then(res =>{
      console.log(res)
      this.recommends = res.data.data.list
     })
  },
  methods: {
    addToCart() { //加入购物车
      //1.获取商品需要展示的信息
       const product ={ }
       product.iid = this.iid; //拿到商品id
       product.image = this.goods.topImages[0];
       product.title = this.goods.title;
       product.price = this.goods.realPrice
     //2. 将商品加入购物车 使用vuex,将购物车相关的数据在多个界面中共享
      this.$store.commit('addCart', product)
    }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 999;
  background-color: #fff;
}


</style>
