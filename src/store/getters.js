const getters = {
  // 计算购物车中总共有多少本书
  count: (state) => state.cartList.reduce((prev, next) => prev + next.bookCount, 0)
}

export default getters
