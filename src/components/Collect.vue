<template>
  <div class="carts">
    <MHeader>购物车</MHeader>
    <div class="content">
      <ul>
        <li v-for="(cart, index) in cartList" :key="index">
          <!-- <input type="checkbox" v-model="checkAll"> -->
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
      <!-- <input type="checkbox" v-model="checkAll" id="chkb">
      <label for="chkb">全选</label> -->
      <!-- <span>共{{allCount}}本</span> -->
      <div class="al">
        <span>总计：{{allPrice | toFixed(2)}}</span>
        <span class="clrc" @click="clearCart">清空购物车</span>
      </div>
      <button class="settle-accounts">去结算(<span>{{allCount}}件</span>)</button>
    </div>
    <!-- <confirmtip v-if="showAlert" :alertText="alertText" @sureTip="sureTip" @cancleTip="cancleTip" ref="confirm"></confirmtip> -->
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
// 辅助函数，即语法糖
import {mapGetters, mapState} from 'vuex'
import * as Types from '@/store/mutation_types'
import { MessageBox, Toast } from 'mint-ui'
export default {
  created () {
    this.$store.commit(Types.INIT_BUYCART)
  },
  methods: {
    clearCart () {
      // this.showAlert = true
      // this.alertText = '清空购物车？'
      // this.$message({ // 自定义的message组件
      //   message: 'haha'
      // })
      MessageBox.confirm('清空购物车？').then(() => {
        Toast({
          message: '已经清空',
          iconClass: 'iconfont icon-favorite'
        })
        this.$store.commit(Types.CLEAR_CART)
      }).catch(() => {
        Toast('取消操作')
      })
    },
    addCart (bookId) {
      this.$store.commit(Types.PLUS_CART, {bookId})
    },
    reduceCart (cart) {
      this.$store.commit(Types.REDUCE_CART, {bookId: cart.bookId})
    },
    remove (bookId) {
      // this.showAlert = true
      // this.alertText = '确定要删除吗？'
      // this.sureTip(Types.REMOVE_CART, bookId)
      // let flag = window.confirm('确定要删除吗？')
      // if (flag) {
      //   this.$store.commit(Types.REMOVE_CART, bookId)
      // }
      MessageBox.confirm('确定要删除吗？').then(() => {
        Toast({
          message: '已经删除',
          iconClass: 'iconfont icon-favorite'
        })
        this.$store.commit(Types.REMOVE_CART, bookId)
      }).catch(() => {
        Toast('取消操作')
      })
    },
    sureTip (val) {
      console.log(val)
      this.showAlert = false
      this.$store.commit(Types.CLEAR_CART)
    },
    cancleTip () {
      this.showAlert = false
    }
  },
  computed: {
    ...mapState(['cartList']),
    ...mapGetters(['allCount', 'allPrice', 'getCartAll']),
    checkAll: {
      get () {
        // return this.cartList.every(item => item.isSelected)
        return this.getCartAll
      },
      set (val) {
        // this.cartList.forEach(item => (item.isSelected = val))
        this.$store.commit(Types.CHECK_ALL, val)
      }
    }
  },
  // filters: { // 已经全局定义在 main.js
  //   toFixed (input, param) {
  //     return '￥' + input.toFixed(param)
  //   }
  // },
  components: {
    MHeader,
    MessageBox,
    Toast
  },
  data () {
    return {
      showAlert: false,
      alertText: ''
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
  z-index: 130;
  width: 100%;
  height: 50px;
  background: #ccc;
  .al {
    display: flex;
    flex-direction: column;
    margin-left: 1.25rem;
    .clrc {
      color: rgb(255, 0, 0);
      text-decoration: underline;
    }
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
    font-size: 1rem;
    span {
      font-size: .63rem;
    }
  }
}
.content {
  margin-bottom: 3.13rem;
  ul {
    padding: .63rem;
    li {
      display: flex;
      padding: .63rem 0;
      border-bottom: 1px solid #f1f1f1;
      img {
        width: 8.13rem;
        height: 9.38rem;
      }
      p {
        font-size: 1rem;
      }
      button {
        width: 3.75rem;
        height: 1.56rem;
        background: #ccc;
        color: #000;
        border: none;
        border-radius: 5px;
        outline: none;
        margin: .31rem;
        text-align: center;
        font-size: 1.13rem;
      }
      .remove {
        background-color: orangered; /*#df3033*/
        color: #fff;
      }
    }
  }
}
</style>
