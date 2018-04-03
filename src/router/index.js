import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import Collect from '@/components/Collect'
import Detail from '@/components/Detail'
import Home from '@/components/Home'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    // 路由元信息
    // 引用时使用 this.$route.meta.keepAlive
    {
      path: '/home',
      component: Home,
      meta: {keepAlive: true}
    },
    {path: '/list', component: List},
    {path: '/add', component: Add},
    {path: '/collect', component: Collect},
    // /detail/7 {bid:1} 路径参数，必须有但是可以随机
    {path: '/detail/:bid', component: Detail, name: 'detail'},
    {path: '*', redirect: '/home'}
  ]
})
