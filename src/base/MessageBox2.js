// 可参考：
// http://mint-ui.github.io/docs/#/zh-cn2/message-box
// https://github.com/ElemeFE/mint-ui/blob/master/packages/message-box/src/message-box.js
// https://coding.net/u/21young/p/mobile-example/git/blob/master/src/components/common/Confirm/index.js?public=true

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

// 合并不同的消息
let merge = function (target) {
  console.log(arguments)
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

  console.log(target)
  // 返回合并了的消息
  return target
}

const showNextMsg = (options) => {
  if (msgQueue.length > 0) {
    console.log(msgQueue)
    currentMsg = msgQueue.shift()
    let options = currentMsg.options
    // 把options赋给实例instance
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
  if (currentMsg.resolve) {
    let $type = currentMsg.options.$type
    // 判断是哪种类型的弹出框
    if ($type === 'confirm') {
      instance.confirm = () => {
        confirm()
        currentMsg.resolve('ok')
      }
      instance.cancel = () => {
        cancel()
        currentMsg.reject('no')
      }
    } else {
      instance.confirm = () => {
        confirm()
        currentMsg.resolve('ok')
      }
    }
  }
}

let MessageBox = (options = {}) => {
  // 生成组件
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })

  // confirmVue 的message
  if (typeof options === 'string') {
    options = {
      message: options
    }
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

  return new Promise((resolve, reject) => {
    msgQueue.push({
      options: merge({}, defaults, MessageBox.defaults || {}, options),
      resolve: resolve,
      reject: reject
    })
    showNextMsg(options)
  })
}

MessageBox.setDefaults = function (defaults) {
  MessageBox.defaults = defaults
}

// 警告框
MessageBox.alert = function (message, options) {
  return MessageBox(merge({
    message: message,
    $type: 'alert' // 标识是哪种事件类型
  }, options))
}

// 确认框
MessageBox.confirm = function (message, options) {
  return MessageBox(merge({
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options))
}

export default MessageBox
