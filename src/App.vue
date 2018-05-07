<template>
  <div id="app">
    <!-- 路由动画 -->
    <transition name="fadeIn">
      <!-- 路由缓存 -->
      <!-- 需要缓存的 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <!-- 正常的访问走下面的 -->
      <keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from '@/base/Tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style lang="scss">
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption, {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    // border: none;
    font-weight: normal;
    font-family: "Microsoft Yahei";
    box-sizing: border-box;
    -webkit-tap-highlight-color:transparent;
    -webkit-font-smoothing: antialiased;
    &:hover{
        outline: none;
    }
}
html {
  font-size: 16px;
}
// ul, li {list-style: none;}
// a {text-decoration: none;}
/* input, button {-webkit-appearance: none;} */
button {-webkit-appearance: none;}
.content {
  position: fixed;
  width: 100%;
  top: 2.5rem;
  bottom: 3.13rem;
  overflow: auto;
}
.fadeIn {
  opacity: 0;
}
.fadeIn-enter-active {
  transition: all .3s linear;
}
.fadeIn-leave-active {
  transition: all .3s linear;
  opacity: 0;
}
</style>
