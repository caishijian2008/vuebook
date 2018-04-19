import axios from 'axios'
// 增加默认的请求的路径
axios.defaults.baseURL = 'http://localhost:3000' // build前可注释此行，build后恢复此行
// axios拦截器
// 在这里统一拦截结果，把结果处理成res.data，参考【Home.vue】
axios.interceptors.response.use(function (res) {
  return res.data
})

// 获取轮播图数据
export let getSliders = () => {
  return axios.get('/sliders')
}

// 获取热门图书
export let getHotBook = () => {
  return axios.get('/hot')
}

// 获取全部图书
export let getBooks = () => {
  return axios.get('/book')
}

// 删除某一本图书
export let removeBook = (id) => {
  return axios.delete(`/book?id=${id}`)
}

// 获取某一本书
export let findOneBook = (id) => {
  return axios.get(`/book?id=${id}`)
}

// 修改图书
/**
 * @param id 编号
 * @param data 数据，请求体发送
 * @returns {AxiosPromise<T>}
 */
export let updateBook = (id, data) => {
  return axios.put(`/book?id=${id}`, data)
}

// 添加图书
export let addBook = (data) => {
  return axios.post('/book', data)
}

// loading
export let getAll = () => {
  return axios.all([getSliders(), getHotBook()])
}

// 分页，根据偏移量返回对应的数据
export let pagination = (offset) => {
  return axios.get(`/page?offset=${offset}`)
}
