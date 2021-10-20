/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 节流
 * @updateInfo: 本次更新内容：
 * @Date: 2021-10-11 11:59:11
 * @LastEditTime: 2021-10-11 13:33:29
 */
/**
 * @description: 函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数
 * @param {*} fn 函数
 * @param {*} delay 延迟时间
 * @param {*} cb 回调函数
 * @param {*} immediate 立即执行
 * @return { Function } 
 */
export function throttle(fn, delay = 1000, immediate = true, cb = null) {
  if(typeof fn !== 'function') throw new TypeError(`${fn} must be a function`)
  let now = Date.now()

  return function () {
    const self = this;
    let time = Date.now()
    if (time - now >= delay) {
      fn.apply(self, arguments)
      if (cb && typeof cb === 'function') cb()
      now = Date.now()
    }
    // 首次立即执行
    if (immediate) {
      fn.apply(self, arguments)
      immediate = false
    }
  }
}

// function log() {
//   console.log(Date.now());
// }
// const fn = throttle(log)

// setInterval(() => {
// console.log('-')
//   fn()
// }, 100)