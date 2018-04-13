import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

// 状态
const state = {cartList: []}
export default new Vuex.Store({
  // strict: true,
  // 不要在发布环境下启用严格模式！
  strict: process.env.NODE_ENV !== 'production',
  plugins: [logger()],
  state,
  mutations,
  getters
})
