/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-14 19:44:35
 * @LastEditTime: 2021-09-15 19:23:07
 */
import { compareType } from '../types/get-type.js'
/**
 * @description: cookie操作
 * @param {
 *    name: string 设置字段名
 *    value: any 值
 *    time：string | number: 设置多久后(秒)过期
 *          Date: 设置什么时间过期
 *  }
 * @return {*}
 */
export const cookie = {
  set: (name, value, time) => {
    if (!name) return
    if (!time) {
      document.cookie = `${name}=${value};`
      return
    }
    if (compareType(time) === 'Date')
      document.cookie = `${name}=${value};expires=${time}`
    else
      document.cookie = `${name}=${value};max-age=${time}`
  },
  get: (name) => {
    const cookieStr = document.cookie;
    if (!name) return cookieStr
    // 转换为数组并去除多余空格
    const cookieArr = cookieStr.split('; ');
    const _str = cookieArr.find((co) => co.startsWith(`${name}=`));
    return _str ? _str.split('=')[1] : _str
  },
  del: (name) => {
    if(!name) return
    cookie.set(name, '', -1)
  }
}