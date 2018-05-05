<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, key) in swiperSlides" :key="key">
        <img :src="slide" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
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
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        setWrapperSize: true,
        observeParents: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 46.38%;
  img {width: 100%;}
}
</style>
