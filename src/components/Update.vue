<template>
  <div class="detail">
    <MHeader :back="true">图书详情</MHeader>
    <div class="content">
      <ul>
        <li>
          <img :src="book.bookCover" id="bookCover" />
        </li>
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
          <button @click="update">确认修改</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
import {findOneBook, updateBook} from '../api'
export default {
  created () { // 页面一加载，需要根据id发送请求
    this.getBook()
  },
  watch: {
    $route () { // 只要路径发生变化，就重新获取数据
      this.getBook()
    }
  },
  methods: {
    async update () { // 修改图书信息
      await updateBook(this.bid, this.book)
      alert('修改成功！')
      this.$router.push('/list') // 修改完成后跳转页面
    },
    async getBook () { // 通过id找到某一项后赋给book
      this.book = await findOneBook(this.bid)
      // 如果是空对象，需要跳转回列表页【难点】
      // 思路：JSON.stringify(this.book) === '{}' 或者 JSON.stringify(this.book).length === 0
      console.log(Object.keys(this.book))
      Object.keys(this.book).length > 0 ? void 0 : this.$router.push('/list')
    }
  },
  computed: {
    bid () {
      // 将路径参数的id映射到bid
      return this.$route.params.bid
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
.detail {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 999;
}
ul {
  margin: 20px 20px 5px 20px;
  li {
    img {
      margin: .63rem 0;
    }
    label {
      display: block;
      margin: 5px 0;
    }
    input {
      margin: .63rem 0;
      width: 100%;
      height: 31px;
    }
    button {
      display: block;
      width: 5rem;
      height: 1.56rem;
      background: rgb(255, 82, 1);
      color: #fff;
      border: none;
      border-radius: 5px;
      outline: none;
    }
  }
}
</style>
