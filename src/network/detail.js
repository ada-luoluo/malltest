import {request} from "@/network/request";

export function getDetail(iid){
  return request({
    url: '/detail',
    params:{
      iid
    }
  })
}


//ES6 创建class 创建类
//对数据进行整合 将整合好的一个对象传出去
//获取商品基础信息
export class Goods{ //导出class,然后内部从这里获取数据
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discount =itemInfo.discountDesc
    this.columns = columns
    this.services = services

 }
}


//提取商家信息
export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.goods = shopInfo.cGoods
    this.sell = shopInfo.cSell
  }
}

//获取产品参数

export class GoodsParam{
  constructor(info, rule) {
    //这里判断了如果为空不传
    this.image = info.image ? info.image[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;

  }
}


