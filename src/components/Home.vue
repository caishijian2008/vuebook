<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper></Swiper>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
import Swiper from '@/base/Swiper'
import {getSliders} from '../api'
export default {
  created () {
    getSliders()
  },
  components: {
    MHeader,
    Swiper
  }
}
</script>

<style scoped>

</style>
