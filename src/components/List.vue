<template>
  <div>wlug4g2j7x
    <MHeader>图书列表</MHeader>
    <div class="content">
      <ul>
        <router-link v-for="(book, index) in books" :key="index" :to="{name: 'detail', params: {bid: book.bookId}}" tag="li">
          <img :src="book.bookCover">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
import {getBooks, removeBook} from '../api'
export default {
  created () {
    this.getBook()
  },
  methods: {
    async remove (id) { // 删某一项
      await removeBook(id)
      // 后台删了，前台也要删除
      this.books = this.books.filter(item => item.bookId !== id)
    },
    async getBook () {
      this.books = await getBooks()
    }
  },
  data () {
    return {
      books: []
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
    border-radius: 10px;
    outline: none;
  }
}
</style>
