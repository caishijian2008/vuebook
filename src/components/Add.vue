<template>
  <div>
    <MHeader>添加</MHeader>
    <div class="content">
      <ul>
        <li>
          <label for="bookName">书名</label>
          <input type="text" v-model="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">信息</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">价格</label>
          <input type="number" v-model.number="book.bookPrice" id="bookPrice">
        </li>
        <li>
          <label for="bookCover">封面</label>
          <input type="text" v-model="book.bookCover" id="bookCover">
        </li>
        <li>
          <button @click="add">添加</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
import {addBook} from '../api'
export default {
  created () {
    //
  },
  methods: {
    async add () {
      await addBook(this.book)
      this.$router.push('/list')
    }
  },
  components: {
    MHeader
  },
  data () {
    return {
      book: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  ul {
    margin: 50px 20px 0 20px;
    li {
      label {
        display: block;
      }
      input {
        margin: 10px 0;
        width: 100%;
        height: 25px;
      }
      button {
        display: block;
        width: 80px;
        height: 25px;
        background: rgb(255, 82, 1);
        color: #fff;
        border: none;
        border-radius: 5px;
        outline: none;
      }
    }
  }
}
</style>
