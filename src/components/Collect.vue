<template>
  <div>
    <MHeader>购物车</MHeader>
    <div class="content">
      <ul>
        <li v-for="(cart, index) in cartList" :key="index">
          <img :src="cart.bookCover">
          <div>
            <h3>{{cart.bookName}}</h3>
            <button @click.stop="changeCart">-</button>
              {{cart.bookCount}}
            <button @click.stop="changeCart">+</button>
            <p>小计：{{cart.bookPrice * cart.bookCount | toFixed(2)}}</p>
            <button class="remove" @click.stop="remove(cart.bookId)">删除</button>
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
import * as Types from '@/store/mutation_types'
export default {
  methods: {
    changeCart () {
      //
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
    ...mapGetters(['count'])
  },
  filters: {
    toFixed (input, param) {
      return '￥' + input.toFixed(param)
    }
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
        background-color: orangered; /*#df3033*/
        color: #fff;
      }
    }
  }
}
</style>
