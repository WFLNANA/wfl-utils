/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-14 20:34:35
 * @LastEditTime: 2021-09-14 20:50:03
 */
export const checkRegex = {
  // 空格
  reg_space: /\s/g,
  // 开始空格
  reg_start: /^\s*/g,
  // 结束空格
  reg_end: /\s*$/g,
  // 手机号 - 简单校验 只校验第一位是否为1,后10是否位数字
  phone_s: /1\d{10}/,

}