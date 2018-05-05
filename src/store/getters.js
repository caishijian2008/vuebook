const getters = {
  // 计算购物车中总共有多少本书
  allCount: (state) => state.cartList.reduce((prev, next) => prev + next.bookCount, 0),
  // 计算总价
  allPrice: (state) => state.cartList.reduce((prev, next) => prev + next.bookCount * next.bookPrice, 0),
  getCartAll: (state) => state.cartList.every(item => item.isSelected)
  // checkAll2: (state, checkAll) => (val) => {
  //   return state.cartList.forEach(item => (item.isSelected = val))
  // }
}

export default getters
