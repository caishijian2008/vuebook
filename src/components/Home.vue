<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h4>热门图书</h4>
          <ul>
            <router-link v-for="(hot, index) in hotBooks" :key="index" :to="{name: 'detail', params: {bid: hot.bookId}}" tag="li">
              <img :src="hot.bookCover">
              <p>{{hot.bookName}}</p>
            </router-link>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
import Swiper from '@/base/Swiper'
import Loading from '@/base/Loading'
// import {getSliders, getHotBook} from '../api'
import {getAll} from '../api'
export default {
  created () {
    this.getData()
    // 有了axios.all()就不需要这两行了！
    // this.getSlider() // 获取轮播图
    // this.getHot() // 获取热门图书
  },
  methods: {
    async getData () {
      let [sliders, hotBooks] = await getAll() // [sliders, books]
      this.sliders = sliders
      this.hotBooks = hotBooks
      // 轮播图和热门图书已经获取完成
      this.loading = false
    }
    // 有了axios.all()就不需要getHot()和getSlider()方法了！
    // async getHot () {
    //   // 未使用axios拦截器前：
    //   // let {data} = await getHotBook()
    //   // this.hotBooks = data
    //   // 使用axios拦截器后：
    //   this.hotBooks = await getHotBook()
    // },
    // async getSlider () {
    //   // 未使用axios拦截器前：
    //   // 给data起别名，对象中的属性名字必须和得到的结果名字一样。属性解构与赋值。
    //   // async与await获取到的是promise实例。此处相当于getSliders().then()
    //   // let {data: sliders} = await getSliders()
    //   // console.log(sliders)
    //   // 将获取的数据放到sliders中
    //   // this.sliders = sliders
    //   // 使用axios拦截器后：
    //   this.sliders = await getSliders()
    // }
  },
  data () {
    return {
      sliders: [],
      hotBooks: [],
      loading: false // 添加正在加载的效果
    }
  },
  components: {
    MHeader,
    Swiper,
    Loading
  }
}
</script>

<style lang="scss" scoped>
.container {
  h4 {
    color: #999;
    padding: 5px 0;
  }
  width: 90%;
  margin: 0 auto;
  ul {
    display: flex;
    flex-wrap: wrap; /* 默认不换行，即 nowrap */
    padding-bottom: 10px;
    li {
      width: 50%;
      text-align: center;
      margin: 5px 0;
      img {
        width: 100%;
      }
    }
  }
}
</style>
