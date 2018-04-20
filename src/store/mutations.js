import * as Types from './mutation_types'
import {setStorage, getStorage} from '../api/myutils'
const mutations = {
  // 添加到购物车
  [Types.ADD_CART] (state, book) {
    // book 是添加的一本书，如果有这本书累加的是数量，如果没有数量为1，放到cartList中
    let product = state.cartList.find(item => item.bookId === book.bookId)
    if (product) {
      product.bookCount += 1
      // 还要更新掉原数组，否则不会刷新
      state.cartList = [...state.cartList]
      console.log(state.cartList)
      setStorage('buycart', state.cartList)
    } else {
      book.bookCount = 1
      // 将原有数据改变，或者可以替换
      // state.cartList.push(book)
      // 或者: 用新数组替换掉老数组
      state.cartList = [...state.cartList, book]
      setStorage('buycart', state.cartList)
    }
  },
  // 删除购物车
  [Types.REMOVE_CART] (state, id) {
    state.cartList = state.cartList.filter(item => item.bookId !== id)
    setStorage('buycart', state.cartList)
  },
  // 更改商品数量
  [Types.PLUS_CART] (state, {bookId}) {
    console.log(bookId)
    let product = state.cartList.find(item => item.bookId === bookId)
    if (product) {
      product.bookCount += 1
      state.cartList = [...state.cartList]
      setStorage('buycart', state.cartList)
    }
  },
  [Types.REDUCE_CART] (state, {bookId}) {
    console.log(bookId)
    let product = state.cartList.find(item => item.bookId === bookId)
    if (product) {
      product.bookCount -= 1
      state.cartList = [...state.cartList]
      setStorage('buycart', state.cartList)
    }
    if (product.bookCount <= 1) {
      product.bookCount = 1
      setStorage('buycart', state.cartList)
    }
  },
  // 清空购物车
  [Types.CLEAR_CART] (state) {
    state.cartList = null
    state.cartList = [...state.cartList]
    setStorage('buycart', state.cartList)
  },
  // 初始化购物车
  [Types.INIT_BUYCART] (state) {
    let initcart = getStorage('buycart')
    if (initcart) {
      state.cartList = JSON.parse(initcart)
    }
  }
}

export default mutations
