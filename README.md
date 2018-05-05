# vuebook

> A Vue.js project
- mock 模拟数据
- api 代表所有接口
- base 基础组件
- components 页面组件
- 使用阿里的iconfont生成图标

### 运行js文件
> 定位到该文件的目录，shift+右键打开命令行，输入：
```
node 文件.js
```
## 热门图书的功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现调取数据的功能
- 在哪个组件中应用这个api，如果是一个基础组件需要用这些数据，在使用这个组件的父级中调用这个方法，将数据传递给基础组件

## 路由元信息
- meta属性

## 下拉加载 /page
- 默认每次给5条记录，前端告诉后台现在要从第几条开始
- /page?offset=5
- 后台返回还要告诉前端是否有更多的数据 hasMore:false

## 路由懒加载
``` js
{
  path: '/home',
  component: () => import('@/components/Home'), // 使用了路由懒加载
  meta: {
    keepAlive: true,
    title: '首页'
  }
}
```

## 导航守卫
``` JavaScript
router.beforeEach(function (to, from, next) {
  // 在浏览器的标签页中显示title
  document.title = to.meta.title
  next()
})
```
## 关于轮播图添加.wrapper的目的
-- .wrapper 网速慢时防抖！
``` css
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 46.38%;
}
```
其中的 46.38% 是图片真实的高宽比，如此便能保证网速加载慢时有一个高度容纳轮播图，不至于后面的内容顶上去，四行代码缺一不可！

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
