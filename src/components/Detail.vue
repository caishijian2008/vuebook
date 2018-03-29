<template>
  <div class="detail">
    {{bid}}
  </div>
</template>

<script>
export default {
  computed: {
    bid () {
      // 将路径参数的id映射到bid
      return this.$route.params.bid
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
</style>
