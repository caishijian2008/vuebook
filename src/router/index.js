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
      name: 'home',
      meta: {
        keepAlive: true,
        title: '首页'
      }
    },
    {
      path: '/list',
      component: () => import('@/components/List'),
      meta: {
        title: '列表'
      }
    },
    {
      path: '/about',
      component: () => import('@/components/About'),
      meta: {
        title: '我的'
      }
    },
    {
      path: '/collect',
      component: () => import('@/components/Collect'),
      meta: {
        title: '购物车'
      }
    },
    // /detail/7 {bid:1} 路径参数，必须有但是可以随机
    {
      path: '/detail/:bid',
      component: () => import('@/components/Detail'),
      name: 'detail',
      meta: {
        title: '图书详情'
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ],
  // vue router滚动行为
  scrollBehavior (to, from, savedPosition) {
    // console.log(to.path)
    // console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
