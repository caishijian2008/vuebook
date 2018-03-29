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
    {path: '/add', component: Add},
    {path: '/collect', component: Collect},
    // /detail/7 {bid:1} 路径参数，必须有但是可以随机
    {path: '/detail/:bid', component: Detail, name: 'detail'},
    {path: '/home', component: Home},
    {path: '/list', component: List},
    {path: '*', redirect: '/home'}
  ]
})
