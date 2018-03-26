<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, key) in swiperSlides" :key="key">
      I'm Slide {{ slide }}
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: 3500,
        setWrapperSize: true
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
