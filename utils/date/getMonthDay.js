/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 获取某年某月有多少天
 * @Date: 2021-09-23 18:05:03
 * @LastEditTime: 2021-09-26 10:10:34
 */
const check = ['number', 'string']
export const getMonthDay = (year, month) => {

  if (!check.includes(typeof year) || !check.includes(typeof month)) {
    year = new Date().getFullYear()
    month = new Date().getMonth() + 1
  }
  return new Date(year, month, '0').getDate()
}

console.log(getMonthDay(2021, 5));