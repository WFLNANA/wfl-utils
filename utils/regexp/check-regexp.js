/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-14 20:34:35
 * @LastEditTime: 2021-09-17 16:35:42
 */
// 正则
export const checkRegexp = {
  // 空格
  space: /\s/g,
  // 开始空格
  space_s: /^\s/g,
  // 结束空格
  space_e: /\s$/g,
  // 手机号 - 简单校验 只校验第一位是否为1,后10是否位数字
  phone_s: /1\d{10}/,
  // 手机号
  phone: /^1[3|4|5|6|7|8|9][0-9]{9}$/,
  // 座机
  tel: /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,
  // 身份证
  id_card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  // 邮编
  postal: /[1-9]\d{5}(?!\d)/,
  // 邮箱
  email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  // 网址
  URL: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
  // IP
  IP: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
  // 数字
  number: /^[0-9]+$/,
  // 字母
  en: /^[a-zA-Z]+$/,
  // 汉字
  ch: /^[\u4E00-\u9FA5]+$/,
  // HTML文档
  html: /<("[^"]*"|'[^']*'|[^'">])*>/
}
// 校验
export const checkingStr = (str, type) => {
  return checkRegexp[type].test(str)
}