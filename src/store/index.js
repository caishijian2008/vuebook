import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

// 状态
const state = {cartList: []}
export default new Vuex.Store({
  strict: true,
  plugins: [logger()],
  state,
  mutations,
  getters
})
