const getters = {
  // 计算购物车中总共有多少本书
  allCount: (state) => state.cartList.reduce((prev, next) => prev + next.bookCount, 0),
  allPrice: (state) => state.cartList.reduce((prev, next) => prev + next.bookCount * next.bookPrice, 0),
  checkAll: (state) => {
    return state.cartList.every(p => p.isSelected)
  },
  checkAll2: (state, checkAll) => (val) => {
    return state.cartList.forEach(item => (item.isSelected = val))
  }
}

export default getters
