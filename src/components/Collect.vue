<template>
  <div>
    <MHeader>购物车</MHeader>
    <div class="content">
      <ul>
        <li v-for="(cart, index) in cartList" :key="index">
          <img :src="cart.bookCover">
          <div>
            <h3>{{cart.bookName}}</h3>
            <button>-</button>{{cart.bookCount}}<button>+</button>
            <p>小计：{{cart.bookPrice * cart.bookCount}}</p>
            <button class="remove" @click.stop="">删除</button>
          </div>
        </li>
        <li>共{{count}}本</li>
      </ul>
    </div>
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

<style lang="scss" scoped>
.content {
  ul {
    padding: 10px;
    li {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #f1f1f1;
      img {
        width: 130px;
        height: 150px;
      }
      p {
        font-size: 18px;
      }
      button {
        width: 60px;
        height: 25px;
        background: #ccc;
        color: #000;
        border: none;
        border-radius: 5px;
        outline: none;
        margin: 5px;
        text-align: center;
        font-size: 18px;
      }
      .remove {
        background-color: orangered;
        color: #fff;
      }
    }
  }
}
</style>
