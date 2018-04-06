import Vue from 'vue'
import Router from 'vue-router'
// 使用了路由懒加载后就不需要下面5行了
// import Add from '@/components/Add'
// import Collect from '@/components/Collect'
// import Detail from '@/components/Detail'
// import Home from '@/components/Home'
// import List from '@/components/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    // 路由元信息
    // 此处给页面使用了路由缓存，哪个页面要使用缓存，就添加meta的keepAlive，并在App.vue引用
    // 引用时使用 this.$route.meta.keepAlive
    {
      path: '/home',
      component: () => import('@/components/Home'), // 使用了路由懒加载
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/list',
      component: () => import('@/components/List')
    },
    {
      path: '/add',
      component: () => import('@/components/Add')
    },
    {
      path: '/collect',
      component: () => import('@/components/Collect')
    },
    // /detail/7 {bid:1} 路径参数，必须有但是可以随机
    {
      path: '/detail/:bid',
      component: () => import('@/components/Detail'),
      name: 'detail'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
