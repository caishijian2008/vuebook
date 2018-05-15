<template>
  <div>wlug4g2j7x
    <MHeader>图书列表</MHeader>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link v-for="(book, index) in books" :key="index" :to="{name: 'detail', params: {bid: book.bookId}}" tag="li">
          <!-- <img :src="book.bookCover"> -->
          <img v-lazy="book.bookCover"> <!-- 图片懒加载，见main.js -->
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice | toFixed(2)}}</b>
            <div class="btn-list">
              <button @click.stop="remove(book.bookId)">删除</button>
              <button @click.stop="addCart(book)">+购物车</button>
            </div>
          </div>
        </router-link>
      </ul>
      <div class="more" @click="more">加载更多</div>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
// import {getBooks, removeBook} from '../api'
import {pagination, removeBook} from '../api' // 使用分页
import * as Types from '../store/mutation_types'
// import { Toast } from 'mint-ui'
import MessageBox2 from '../base/MessageBox2'
export default {
  created () {
    this.getData()
  },
  methods: {
    addCart (book) {
      this.$store.commit(Types.ADD_CART, book)
    },
    loadMore () { // 滚动后自动加载更多
      clearTimeout(this.timer) // 节流
      this.timer = setTimeout(() => {
        //   卷去的高度   当前可见区域      总高度
        let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll
        if (scrollTop + clientHeight + 20 > scrollHeight) {
          this.getData() // 获取更多
        }
      }, 500)
    },
    // 加载更多
    more () {
      this.getData()
    },
    // 删除一项
    // async remove (id) {
    //   this.$mymessage('okoko').then(() => { // 这个有错
    //     console.log('okokokok')
    //     await removeBook(id)
    //     this.books = this.books.filter(item => item.bookId !== id)
    //   }).catch(() => {
    //     console.log('nononono')
    //   })
    //   // await removeBook(id)
    //   // this.books = this.books.filter(item => item.bookId !== id)
    //   // Toast(`已经删除`)
    // },
    remove (id) {
      // this.$mymessage('确定要删除吗？').then(() => {
      //   removeBook(id).then(() => { console.log('删除了') })
      //   this.books = this.books.filter(item => item.bookId !== id)
      // }).catch(() => {
      //   console.log('没有删除')
      // })
      MessageBox2.confirm('okoooo').then(() => {
        console.log('确定时。。。')
      })
    },
    async getData () {
      // this.books = await getBooks()
      if (this.hasMore && !this.isLoading) { // 有更多的时候获取数据
        this.isLoading = true // 正在加载
        let {hasMore, books} = await pagination(this.offset)
        this.books = [...this.books, ...books] // 原来的书 + 分页的书【难点】
        this.hasMore = hasMore
        this.isLoading = false // 加载完毕
        this.offset = this.books.length // 维护偏移量【难点】
      }
    }
  },
  // filters: { // 已经全局定义在 main.js
  //   toFixed (input, param) {
  //     return '￥' + input.toFixed(param)
  //   }
  // },
  data () {
    return {
      books: [],
      offset: 0, // 偏移量
      hasMore: true, // 是否有更多
      isLoading: false // 默认不是正在加载，解决一刷新页面就狂点“正在加载”按钮时数据就自动连续出来的bug
    }
  },
  components: {
    MHeader
    // Toast
  }
}
</script>

<style lang="scss" scoped>
.content {
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
      h4 {
        font-size: 1.13rem;
        line-height: 1.56rem;
      }
      p {
        color: #2a2a2a;
        line-height: 1.56rem;
      }
      b {
        color: red;
      }
      .btn-list {
        display: flex;
        // justify-content: space-around;
        align-items: center;
        position: absolute;
        margin: .63rem;
        button {
          display: block;
          width: 3.75rem;
          height: 1.56rem;
          background: #df3033;
          color: #fff;
          border: none;
          border-radius: 5px;
          outline: none;
          margin: 0 .94rem;
        }
      }
    }
  }
  .more {
    margin: .63rem;
    background: #2afedd;
    height: 1.88rem;
    line-height: 1.88rem;
    text-align: center;
    font-size: 1.13rem;
  }
}
</style>
