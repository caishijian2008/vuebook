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
            <b>{{book.bookPrice}}</b>
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
      // 触发scroll事件，可能会触发n次，先进来开一个定时器，下次触发时将上一次定时器清除掉
      this.timer = setTimeout(() => {
        //   卷去的高度   当前可见区域      总高度
        let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll
        if (scrollTop + clientHeight + 20 > scrollHeight) {
          this.getData() // 获取更多
        }
      }, 500)
    },
    more () { // 加载更多
      this.getData()
    },
    async remove (id) { // 删某一项
      await removeBook(id)
      // 后台删了，前台也要删除
      this.books = this.books.filter(item => item.bookId !== id)
    },
    async getData () {
      // this.books = await getBooks()
      if (this.hasMore && !this.isLoading) { // 有更多的时候获取数据
        this.isLoading = true // 正在加载
        let {hasMore, books} = await pagination(this.offset)
        this.books = [...this.books, ...books] // 原来的书 + 分页的书【难点】
        this.hasMore = hasMore
        this.isLoading = false // 加载完毕
        this.offset = this.books.length // 维护偏移量，就是总共书的数量【难点】
      }
    }
  },
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
        width: 8em;
        height: 9em;
      }
    }
  }
  h3 {
    font-size: 20px;
    line-height: 35px;
  }
  p {
    color: #2a2a2a;
    line-height: 25px;
  }
  b {
    color: red;
  }
  button {
    display: block;
    width: 60px;
    height: 25px;
    background: orangered;
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
  }
  .more {
    margin: 10px;
    background: #2afedd;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
  }
  .btn-list {
    display: flex;
    justify-content: space-around;
  }
}
</style>
