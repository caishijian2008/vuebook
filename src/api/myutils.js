/**
 * 存储localStorage
 * @param {*} key 键名
 * @param {*} value 存储的值
 */
export const setStorage = (key, value) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取localStorage
 * @param {*} key 键名
 */
export const getStorage = key => {
  if (!key) return
  return window.localStorage.getItem(key)
}

/**
 * 删除localStorage
 * @param {*} key 键名
 */
export const deleteStorage = key => {
  if (!key) return
  return window.localStorage.removeItem(key)
}
