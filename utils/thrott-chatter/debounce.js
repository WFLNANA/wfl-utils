/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 防抖
 * @updateInfo: 本次更新内容：
 * @Date: 2021-10-11 11:59:43
 * @LastEditTime: 2021-10-20 15:26:21
 */
// 函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，
// 如果设定的时间到来之前，又一次触发了事件，就重新开始延时
/**
 * @description: 函数防抖
 * @param {*} fn 函数
 * @param {*} delay 延迟时间
 * @param {*} immediate 立即执行
 * @param {*} cb 回调函数
 * @return {*}
 */
export function debounce(fn, delay, immediate = true, cb = null) {
  if (typeof fn !== 'function') throw new TypeError(`${fn} must be a function`)
  let timer = null

  return function () {
    const self = this
    // 再次触发重置
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(self, arguments)
      cb && cb()
    }, delay)

    // 首次执行
    if (immediate) {
      fn.apply(self, arguments)
      immediate = false
    }
  }
}