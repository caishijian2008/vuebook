import Vue from 'vue'
import confirmVue from './Confirm'

const MessageBoxConstructor = Vue.extend(confirmVue)

let instance, currentMsg
// let msgQueue = []

const defaultCallback = action => {
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

  instance = new MessageBoxConstructor({
    data: options
  })

  // if (typeof Promise !== 'undefined') {
  //   return new Promise((resolve, reject) => {
  //     msgQueue.push({
  //       options: options,
  //       callback: callback,
  //       resolve: resolve,
  //       reject: reject
  //     })
  //     showNextMsg()
  //   })
  // }
  console.log(instance)
  instance.callback = defaultCallback

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}

export default message
