//所有首页数据请求都在这里
import {request} from "@/network/request";

export function  getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}
