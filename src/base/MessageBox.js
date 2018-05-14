// 可参考：
// https://www.cnblogs.com/heyinwangchuan/p/8269278.html
// https://juejin.im/post/5a09032ff265da431b6cb21b
// https://coding.net/u/21young/p/mobile-example/git/blob/master/src/components/common/Confirm/index.js?public=true

import Vue from 'vue'
import confirmVue from './Confirm'

const MessageBoxConstructor = Vue.extend(confirmVue)

let instance = null

let mymessage = (options = {}) => {
  // 生成组件
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })

  // confirmVue 的message
  if (typeof options === 'string') {
    instance.message = options
  }

  // 监控弹窗组件是否显示（监控confirmVue的show），
  // 当按下确定或取消后销毁组件实例
  instance.$watch('show', function (val) {
    if (!val) {
      instance.$destroy(true)
      instance.$el.parentNode.removeChild(instance.$el)
      instance = null
    }
  })

  // console.log(instance)

  // 挂载组件实例
  document.body.appendChild(instance.$el)
  // instance.show = true
  // 整个组件加载完成后就show
  Vue.nextTick(() => {
    instance.show = true
  })

  // 使用 Promise作为触发确定或取消后的事件回调
  return new Promise((resolve, reject) => {
    let confirm = instance.confirm
    let cancel = instance.cancel
    instance.confirm = () => {
      confirm() // 确认后执行自身的操作
      resolve('ok')
    }
    let newLocal = 'cancel'
    instance.cancel = () => {
      cancel() // 取消后执行自身的操作
      reject(newLocal)
    }
  })
}

export default mymessage
