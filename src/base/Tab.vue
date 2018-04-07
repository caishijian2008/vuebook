<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-favorite"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-add"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<!--
flex-direction: row / column;
justify-content: center 垂直居中
align-items: center 水平居中
flex: 1 每份占1
router-link-exact-active router-link-active
-->
<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #ccc;
  a {
    display: flex;
    color: forestgreen;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  a.router-link-active {
    color: red;
  }
}
</style>
