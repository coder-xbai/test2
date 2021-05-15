import axios from "axios";

export function request(config){
  return new Promise((resolve, reject)=>{
//创建实例
    const instance=axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })

    instance.interceptors.request.use(config=>{
      //1 比如config中有些信息不符合服务器的要求

      //2，比如每次发送网络请求时，都希望在界面中显示一个请求的图标

      //3，某些网络请求（比如登录的token），必须携带一些特殊的信息
      console.log(config)

    //  拦截后要返回config，否则请求失败
      return config
    },err => {
      console.log(err)
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
      console.log(res)
      return res.data
    },err => {
      console.log(err)
    })
    //这个axios的instance实例
    instance(config).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
    // return instance(config)
  })

}
