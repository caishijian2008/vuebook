// 可参考：
// https://www.cnblogs.com/heyinwangchuan/p/8269278.html

import Vue from 'vue'
import confirmVue from './Confirm'

const MessageBoxConstructor = Vue.extend(confirmVue)

let instance, currentMsg
let msgQueue = []
let defaults = {
  message: '',
  showConfirmButton: true,
  showCancelButton: false
}

let merge = function (target) {
  console.log('arguments.length = ' + arguments.length)
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i]
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}

const showNextMsg = (options) => {
  console.log('msgQueue: ')
  console.log(msgQueue)
  if (msgQueue.length > 0) {
    currentMsg = msgQueue.shift()
    let options = currentMsg.options
    console.log('options-2: ')
    console.log(options)
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop]
      }
    }
    console.log('instance-2: ')
    console.log(instance)
    console.log('currentMsg: ')
    console.log(currentMsg)
    if (options.callback === undefined) {
      instance.callback = defaultCallback(currentMsg)
    }

    // 挂载组件实例
    document.body.appendChild(instance.$el)
    // 整个组件加载完成后就show
    Vue.nextTick(() => {
      instance.show = true
    })
  }
}

const defaultCallback = (currentMsg) => {
  console.log(currentMsg)
  let confirm = instance.confirm
  let cancel = instance.cancel
  instance.confirm = () => {
    confirm()
    currentMsg.resolve = instance.confirm
  }

  instance.cancel = () => {
    cancel()
    currentMsg.reject = instance.cancel
  }
  // if (currentMsg) {
  //   if (action === 'confirm') {
  //     currentMsg.resolve(action)
  //   } else if (action === 'cancel') {
  //     currentMsg.reject(action)
  //   }
  // }
}

let MessageBox2 = (options = {}) => {
  // 生成组件
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })

  // confirmVue 的message
  if (typeof options === 'string') {
    // instance.message = options
    options = {
      message: options
    }
  }

  // 监控弹窗组件是否显示（监控confirmVue的show），
  // 当按下确定或取消后销毁组件实例
  // instance.$watch('show', function (val) {
  //   if (!val) {
  //     instance.$destroy(true)
  //     instance.$el.parentNode.removeChild(instance.$el)
  //     instance = null
  //   }
  // })

  console.log('instance-1: ')
  console.log(instance)

  return new Promise((resolve, reject) => {
    // let confirm = instance.confirm
    // let cancel = instance.cancel
    // instance.confirm = () => {
    //   confirm() // 确认后执行自身的操作
    //   resolve('ok')
    // }
    // let newLocal = 'cancel'
    // instance.cancel = () => {
    //   cancel() // 取消后执行自身的操作
    //   reject(newLocal)
    // }
    msgQueue.push({
      options: merge({}, defaults, MessageBox2.defaults || {}, options),
      resolve: resolve,
      reject: reject
    })
    showNextMsg(options)
  })
}

MessageBox2.setDefaults = function (defaults) {
  MessageBox2.defaults = defaults
}

// 警告框
MessageBox2.alert = function (message, options) {
  return MessageBox2(merge({
    message: message
  }, options))
}

// 确认框
MessageBox2.confirm = function (message, options) {
  return MessageBox2(merge({
    message: message,
    showCancelButton: true
  }, options))
}

export default MessageBox2
