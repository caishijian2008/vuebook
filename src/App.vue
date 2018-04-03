<template>
  <div id="app">
    <!-- 路由缓存 -->
    <!-- 需要缓存的 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 正常的访问走下面的 -->
    <keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </keep-alive>
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

<style>
* {
  margin: 0;
  padding: 0;
}
ul, li {list-style: none;}
a {text-decoration: none;}
input, button {-webkit-appearance: none;}
.content {position: fixed; width: 100%; top: 40px; bottom: 50px; overflow: auto;}
</style>
