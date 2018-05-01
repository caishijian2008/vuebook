<template>
  <div class="carts">
    <MHeader>购物车</MHeader>
    <div class="content">
      <ul>
        <li v-for="(cart, index) in cartList" :key="index">
          <input type="checkbox" v-model="checkAll">
          <img :src="cart.bookCover">
          <div>
            <h4>{{cart.bookName}}</h4>
            <button @click.stop="reduceCart(cart)">-</button>
            <span>{{cart.bookCount}}</span>
            <button @click.stop="addCart(cart.bookId)">+</button>
            <p>小计：{{cart.bookPrice * cart.bookCount | toFixed(2)}}</p>
            <button class="remove" @click.stop="remove(cart.bookId)">删除</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <input type="checkbox" v-model="checkAll" id="chkb">
      <label for="chkb">全选</label>
      <!-- <span>共{{allCount}}本</span> -->
      <span class="all-price">总计：{{allPrice | toFixed(2)}}</span>
      <button class="settle-accounts">去结算(<span>{{allCount}}件</span>)</button>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
// 辅助函数，即语法糖
import {mapGetters, mapState} from 'vuex'
import * as Types from '@/store/mutation_types'
export default {
  created () {
    this.$store.commit(Types.INIT_BUYCART)
  },
  methods: {
    addCart (bookId) {
      this.$store.commit(Types.PLUS_CART, {bookId})
    },
    reduceCart (cart) {
      this.$store.commit(Types.REDUCE_CART, {bookId: cart.bookId})
    },
    remove (bookId) {
      let flag = window.confirm('确定要删除吗？')
      if (flag) {
        this.$store.commit(Types.REMOVE_CART, bookId)
      }
    }
  },
  computed: {
    ...mapState(['cartList']),
    ...mapGetters(['allCount', 'allPrice', 'getCartAll']),
    checkAll: {
      get () {
        return this.getCartAll
      },
      set (val) {
        this.$store.commit(Types.CHECK_ALL, val)
      }
    }
  },
  filters: {
    toFixed (input, param) {
      return '￥' + input.toFixed(param)
    }
  },
  components: {
    MHeader
  },
  data () {
    return {
      // : []
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-footer {
  position: absolute;
  bottom: 50px;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 13;
  width: 100%;
  height: 35px;
  background: #ccc;
  .all-price {
    margin-left: 20px;
  }
  .settle-accounts {
    position: absolute;
    right: 0;
    border: none;
    outline: none;
    color: #fff;
    background: #ff0000;
    height: 100%;
    width: 8rem;
    font-size: 16px;
    span {
      font-size: 10px;
    }
  }
}
.content {
  margin-bottom: 30px;
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
        font-size: 16px;
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
        background-color: orangered; /*#df3033*/
        color: #fff;
      }
    }
  }
}
</style>
