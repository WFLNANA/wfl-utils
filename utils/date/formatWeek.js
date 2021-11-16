/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-23 17:35:17
 * @LastEditTime: 2021-11-16 18:02:16
 */
// 获取星期几
export const formatWeek = (date, isArr = true) => {
  date = date || new Date()
  const weekNames = ['一', '二', '三', '四', '五', '六', '日']
  const we = new Date(date).getDay()
  const str = weekNames[we === 0 ? 6 : we - 1]
  return isArr ? [str, `星期${str}`, `周${str}`, we] : str
}