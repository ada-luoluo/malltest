
import axios from  'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create( { //create返回的就是promise 不需要在加
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

 //2.1请求拦截
  instance.interceptors.request.use(config =>{
    return config
  }, err =>{
    console.log(err)
  });

   //2.2 响应拦截  一定要记得返回!!!!
  instance.interceptors.request.use(res =>{
     return res
  }, err =>{
    console.log(err)
  });


  //3.发送网络请求
   return instance(config) //这里返回的是promise 其实函数调用时可以直接.then
 }


