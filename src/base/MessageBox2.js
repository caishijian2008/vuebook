// 可参考：
// https://www.cnblogs.com/heyinwangchuan/p/8269278.html

import Vue from 'vue'
import confirmVue from './Confirm'

const MessageBoxConstructor = Vue.extend(confirmVue)

let instance, currentMsg
// let msgQueue = []

const defaultCallback = action => {
  console.log(currentMsg)
  if (currentMsg) {
    if (action === 'confirm') {
      currentMsg.resolve(action)
    } else if (action === 'cancel') {
      currentMsg.reject(action)
    }
  }
}

// const showNextMsg = () => {
//   // console.log(msgQueue)
//   if (msgQueue.length > 0) {
//     currentMsg = msgQueue.shift()
//     let options = currentMsg.options
//     for (let prop in options) {
//       if (options.hasOwnProperty(prop)) {
//         instance[prop] = options[prop]
//       }
//     }
//     if (options.callback === undefined) {
//       instance.callback = defaultCallback
//     }
//   }
// }

let message = (options, callback) => {
  if (typeof option === 'string') {
    options = {
      message: options
    }
  } else if (options.callback && !callback) {
    callback = options.callback
  }

  // 生成组件
  instance = new MessageBoxConstructor({
    data: options
  })

  // if (typeof Promise !== 'undefined') {
  //   return new Promise((resolve, reject) => {
  //     currentMsg = {
  //       resolve,
  //       reject
  //     }
  //   })
  // }
  console.log(instance)
  instance.callback = defaultCallback

  // 组件挂载在dom元素上
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}

export default message
