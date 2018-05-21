<template>
  <div>
    <MHeader :back="true">我的</MHeader>
    <div class="content">
      <section class="top-wrap">
        <div class="top">
          <div class="top-main">
            <img src="" alt="">
            <p>名字</p>
            <p>用户名：</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader'
export default {
  created () {
    //
  },
  methods: {
    //
  },
  components: {
    MHeader
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  .top-wrap {
    background: #fff;
    margin-bottom: 15px;
    padding: 10px;
    .top {
      overflow: hidden;
      position: relative;
      border-radius: 6px;
      color: #fff;
      background: linear-gradient(90deg, #eb3c3c, #ff7459);
      box-shadow: 0 2px 5px rgba(255, 98, 98, .4);
      .top-main {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 25px 15px;
      }
    }
  }
}
</style>
