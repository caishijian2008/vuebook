<template>
  <div>
    <MHeader back="true">我的</MHeader>
    <div class="content">
      <section>
        <div class="top">
          <img src="" alt="">
          <div>
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
  ul {
    margin: 3.13rem 1.25rem 0;
    li {
      label {
        display: block;
      }
      input {
        margin: .63rem 0;
        width: 100%;
        height: 1.56rem;
      }
      button {
        display: block;
        width: 5rem;
        height: 1.56rem;
        background: rgb(255, 82, 1);
        color: #fff;
        border: none;
        border-radius: 5px;
        outline: none;
      }
    }
  }
}
</style>
