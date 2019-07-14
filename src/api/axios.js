// 配置axios

// 配置axios
import axios from 'axios'

const instance = axios.create({
  // 配置对象  基准路径  头部信息
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
  // headers: {
  //   // Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('hm74-toutiao')).token
  // }
})

// 请求拦截
instance.interceptors.request.use(config => {
  // 给头部加上认证信息
  const user = window.sessionStorage.getItem('hmtoutiao')
  if (user) {
    config.headers = {
      Authorization: 'Bearer ' + JSON.parse(user).token
    }
  }
  return config
}, error => {
    //   return Promise.reject(error)是发回一个一定错误的promise对象
// return Promise.resovle()是返回一个一定成功的promise对象
// new promise（）可能是成功的，亦可能是错误的
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(response => response, error => {
  // 做一些事情
//   获取相应状态码-----》响应对象-----》error.response.status
  if (error.response.status === 401) {
    //   原生跳转去登录页面
    // hash 哈希   是url后  #开始的字符串
    location.hash = '#/login'
  }

  return Promise.reject(error)
})

export default instance
