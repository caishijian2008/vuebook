<template>
  <div>
    <MHeader>购物车</MHeader>
    <ul class="content">
      <li v-for="(cart, index) in cartList" :key="index">
        <img :src="cart.bookCover">
        <h3>{{cart.bookName}}</h3>
        <button>-</button>{{cart.bookCount}}<button>+</button>
        <p>小计：{{cart.bookPrice * cart.bookCount}}</p>
        <button>删除</button>
      </li>
      <li>共{{count}}本</li>
    </ul>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
// 辅助函数，即语法糖
import {mapState, mapGetters} from 'vuex'
// console.log(mapState(['cartList']))
export default {
  computed: {
    // cartList () { // 在<li>中这样写很累赘，可采用语法糖mapState
    //   return this.$store.state.cartList
    // }
    ...mapState(['cartList']), // 等价于上面的用法
    ...mapGetters(['count'])
  },
  components: {
    MHeader
  }
}
</script>

<style scoped>

</style>
