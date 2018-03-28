import axios from 'axios'
// 增加默认的请求的路径
axios.defaults.baseURL = 'http://localhost:3000'
// axios拦截器
// 在这里统一拦截结果，把结果处理成res.data
// 因此在组件中调用下面的方法后就不需要再解构出data了，参考【Home.vue】
axios.interceptors.response.use(function (res) {
  return res.data
})

// 获取轮播图数据，返回的是一个promise对象
export let getSliders = () => {
  return axios.get('/sliders')
}

// 获取热门图书
export let getHotBook = () => {
  return axios.get('/hot')
}
