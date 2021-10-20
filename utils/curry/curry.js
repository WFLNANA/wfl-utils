/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 函数柯里化
 * @updateInfo: 本次更新内容：
 * @Date: 2021-10-11 13:57:35
 * @LastEditTime: 2021-10-11 16:31:43
 */
/**
 * @description: 函数柯里化
 * @param {*} fn 函数
 * @param {*} args 参数列表
 * @return {*}
 */
export function curry(fn, args = []) {
  if(typeof fn !== 'function') throw new TypeError(`${fn} must be a function`)
  const len = fn.length
  return function () {
    args = [...args, ...arguments]
    if (args.length < len) {
      return curry(fn, args);
    } else {
      return fn(...args)
    }
  }
}

// function t(a, b) {
//   return a + b
// }
// curry(t)(1)(2)
// 3;
// curry(t)(2)(2)
// 4;