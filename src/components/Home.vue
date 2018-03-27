<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
import Swiper from '@/base/Swiper'
import {getSliders} from '../api'
export default {
  created () {
    this.getSlider()
  },
  methods: {
    async getSlider () {
      // 给data起别名，对象中的属性名字必须和得到的结果名字一样。属性解构与赋值。
      // async与await获取到的是promise实例。此处相当于getSliders().then()
      let {data: sliders} = await getSliders()
      console.log(sliders)
      // 将获取的数据放到sliders中
      this.sliders = sliders
    }
  },
  data () {
    return {
      sliders: []
    }
  },
  components: {
    MHeader,
    Swiper
  }
}
</script>

<style scoped>

</style>
