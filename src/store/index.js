import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

// 状态
const state = {cartList: []}
// 设置运行模式
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  // strict: true,
  // 不要在发布环境下启用严格模式！
  strict: debug,
  plugins: debug ? [logger()] : [],
  state,
  mutations,
  getters
})
