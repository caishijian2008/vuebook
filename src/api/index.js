import axios from 'axios'
// 增加默认的请求的路径
axios.defaults.baseURL = 'http://localhost:3000'

// 获取轮播图数据，返回的是一个promise对象
export let getSliders = () => {
  return axios.get('/sliders')
}
