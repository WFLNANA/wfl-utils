/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-14 20:10:24
 * @LastEditTime: 2021-09-15 14:58:29
 */

/**
 * @description: 移除空格
 * @param {
 *    str: 字符串
 *    type: 不传 - 全部； start: 开始空格  end: 结尾空格
 *    replace: 要把空格替换成的内容
 * }
 * @return {*}
 */
export const removeSpace = (str, type = '', replace = '') => {
  const reg_all = /\s/g
  const reg_start = /^\s*/g
  const reg_end = /\s*$/g
  const _type = type === 'start' ? reg_start : type === 'end' ? reg_end : reg_all
  return str.replace(_type, replace)
}

// console.log(removeSpace('            dasdas5asd as6d 54asd 4as8d s8ad asd asd', '', '-'));