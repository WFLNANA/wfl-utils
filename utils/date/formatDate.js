/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-17 19:41:00
 * @LastEditTime: 2021-09-17 20:22:28
 */
const formatDate = (fstr, date, backList = false) => { // 时间格式化 【'YYYY-MM-DD hh:mm:ss',时间】
  if (typeof date !== 'object') {
    date = !date ? new Date() : new Date(date)
  }
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'D+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }

  if (/(Y+)/.test(fstr)) {
    fstr = fstr.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fstr)) {
      fstr = fstr.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return backList ? {
    data: fstr,
    list: fstr.split(' ')
  } : fstr
}

console.log(formatDate('YYYY/MM/DD'));