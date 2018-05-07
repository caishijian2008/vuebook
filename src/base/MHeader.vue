<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
  </div>
</template>

<script>
export default {
  props: {
    back: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background:seagreen;
  color: #fff;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  font-weight: bold;
  i {
    position: absolute;
    left: 1.25rem;
  }
}
</style>
