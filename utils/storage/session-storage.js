/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-14 19:24:18
 * @LastEditTime: 2021-10-20 15:22:52
 */
/**
 * @description:
 * @param {
 *  name: 存/取字段名
 *  value: 值
 *  time：过期时间，单位：秒
 * }
 * @return {*}
 */
export const sessionStore = {
  setItem: (name, value, time) => {
    const nowTime = new Date().getTime();
    const overTime = time ? nowTime + time * 1000 : 0;
    sessionStorage.setItem(name, JSON.stringify({
      value,
      overTime
    }))
  },
  getItem: (name) => {
    const paramStr = sessionStorage.getItem(name);
    // 不存在
    if (!paramStr) return null;

    const param = JSON.parse(paramStr);
    // 已过期
    if (new Date().getTime() > param.overTime && param.overTime !== 0) {
      sessionStorage.removeItem(name);
      return null
    }
    // 返回值
    return param.value;
  },
  removeItem: (name) => {
    name && sessionStorage.removeItem(name);
  },
  clear: (name) => {
    if (name)
      sessionStorage.removeItem(name);
    else
      sessionStorage.clear();
  }
}