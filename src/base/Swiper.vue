<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, key) in swiperSlides" :key="key">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  props: ['swiperSlides'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: 3500,
        setWrapperSize: true,
        observeParents: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {width: 100%;}
</style>
