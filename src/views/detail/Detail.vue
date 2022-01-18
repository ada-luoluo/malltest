<template>

<div id="detail">
 <detail-nav-bar/>
  <detail-swiper :top-images="topImages"/>
  <!--  这里不要忘记传数据 :top-images="topImages"-->
  <detail-base-info :goods="goods"></detail-base-info>
  <detail-shop-info :shopinfo="shopinfo"></detail-shop-info>
  <detail-info :detail-info="detailInfo"></detail-info>
  <detail-param-info :param-info="paramInfo"></detail-param-info>

</div>
  <div style="height: 100px"></div>

</template>

<script>
import DetailNavBar from "@/views/detail/childComponents/DetailNavBar";
import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComponents/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComponents/DetailShopInfo";
import DetailInfo from "@/views/detail/childComponents/DetailInfo";
import DetailParamInfo from "@/views/detail/childComponents/DetailParamInfo";


import {getDetail, Goods, Shop, GoodsParam} from "@/network/detail";


export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParamInfo
  },
  data() {
    return{
      iid: null, //保存商品id
      topImages: [],
      goods: [],
      shopinfo: [],
      detailInfo: [],
      paramInfo: []
    }
  },
  created() {
    this.iid = this.$route.params.iid //拿到商品id
    getDetail(this.iid).then(res =>{ //拿到详情页的接口数据
      console.log(res)

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

    })
  }
}
</script>

<style scoped>

</style>
