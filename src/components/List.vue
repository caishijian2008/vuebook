<template>
  <div>
    <MHeader>图书列表</MHeader>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
import {getBooks} from '../api'
export default {
  created () {
    this.getBook()
  },
  methods: {
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

<style scoped>

</style>
