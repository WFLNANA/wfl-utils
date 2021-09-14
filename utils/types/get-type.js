/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description:
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 13:43:30
 * @LastEditTime: 2021-09-13 13:49:48
 */
/**
 * @description: 
 * @param { param: 需要判断类型的参数， isAll: 是否返回全字符："[object String]" 默认只返回类型字符："String"}
 * @return {type: string}
 */
export const getType = (param, isAll = false) => {
  const str = Object.prototype.toString.call(param);
  const regType = /^[\[A-Za-z]+\s{1}/
  return isAll ? str : str.replace(regType, '').replace(']', '')
}