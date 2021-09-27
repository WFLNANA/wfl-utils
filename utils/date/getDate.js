/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-23 17:06:52
 * @LastEditTime: 2021-09-26 10:06:05
 */
import { formatDate } from './formatDate.js'
import { formatWeek } from './formatWeek.js'
import { getMonthDay } from './getMonthDay.js'

const DAY_TIME = 86400000
// 获取某一周数据
export const getWeek = (date) => {
  date = date || new Date()
  const weeks = [];
  const day = new Date(date).getDay() || 7
  const time = new Date(date).getTime()
  let l = 1
  let r = 1
  while (day >= l) {
    let t = time - (day - l) * DAY_TIME
    const ws = formatWeek(t)
    weeks.push({
      // fullDate: formatDate('YYYY-MM-DD hh:mm:ss', t),
      date: formatDate('YYYY-MM-DD', t),
      datemon: formatDate('MM-DD', t),
      week: ws[0],
      week1: ws[1],
      week2: ws[2],
      week3: ws[3],
    })
    l++
  }
  while (r <= 7 - day) {
    let t = time + r * DAY_TIME
    const ws = formatWeek(t)
    weeks.push({
      // fullDate: formatDate('YYYY-MM-DD hh:mm:ss', t),
      date: formatDate('YYYY-MM-DD', t),
      datemon: formatDate('MM-DD', t),
      week: ws[0],
      week1: ws[1],
      week2: ws[2],
      week3: ws[3],
    })
    r++
  }

  return weeks
}
// console.log(getWeek());

// 获取某一月数据
export const getMonth = (date) => {
  const months = [];
  const year = formatDate('YYYY', date)
  const month = formatDate('MM', date)
  const days = getMonthDay(year, month);
  let d = 1;
  while (d <= days) {
    const sday = `${month}-${('00' + d).substr(`${d}`.length)}`
    const day = `${year}-${sday}`
    const ws = formatWeek(day)
    months.push({
      date: day,
      datemon: sday,
      week: ws[0],
      week1: ws[1],
      week2: ws[2],
      week3: ws[3]
    })
    d++
  }
  return months
}
// getMonth()
// console.log(getMonth());

// 获取某一月数据 + 补全
export const getMonthComple = (date) => {
  const months = getMonth(date)
  const s = months[0].week3
  let num = 1
  // 补全前空挡
  while (num < s) {
    const time = new Date(months[0].date).getTime() - DAY_TIME
    const ws = formatWeek(time)
    months.unshift({
      date: formatDate('YYYY-MM-DD', time),
      datemon: formatDate('MM-DD', time),
      week: ws[0],
      week1: ws[1],
      week2: ws[2],
      week3: ws[3]
    })
    num++
  }
  // 补全后空挡
  let len = months.length
  while (len < 42) {
    const time = new Date(months[len - 1].date).getTime() + DAY_TIME
    const ws = formatWeek(time)
    months.push({
      date: formatDate('YYYY-MM-DD', time),
      datemon: formatDate('MM-DD', time),
      week: ws[0],
      week1: ws[1],
      week2: ws[2],
      week3: ws[3]
    })
    len++
  }
  return months
}

// getMonthComple()
// console.log(getMonthComple());