// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 导入mint ui 的样式文件
import 'mint-ui/lib/style.css'

// 图片懒加载
import VueLazyload from 'vue-lazyload'

// 自定义的组件插件
// import message from './base/MessageBox'
// Vue.prototype.$message = message

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/error.png',
  loading: '../static/loading.gif',
  attempt: 1
})

// 【导航守卫】在进入路由之前，每一次都会执行此方法。拦截功能
router.beforeEach(function (to, from, next) {
  // console.log(to)
  // 在浏览器的标签页中显示title
  document.title = to.meta.title
  next()
})

// 修饰金额的过滤器
Vue.filter('toFixed', (input, param) => {
  input = input || 0
  param = param || 0
  return '￥' + input.toFixed(param)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
