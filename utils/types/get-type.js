/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description:
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 13:43:30
 * @LastEditTime: 2021-09-14 10:01:48
 */
/**
 * @description: 获取类型
 * @param { param: 需要判断类型的参数， isAll: 是否返回全字符："[object String]" 默认只返回类型字符："String"}
 * @return {type: string}
 * 例： let a = {}
 * getType(a) || getType(a, true)
 */
export const getType = (param, isAll = false) => {
  const str = Object.prototype.toString.call(param);
  const regType = /^[\[A-Za-z]+\s{1}/
  return isAll ? str : str.replace(regType, '').replace(']', '')
}

/**
 * @description: 属性和某一类型的类型比较
 * @param { param: 需要判断类型的参数， type: 类型：string\number\boolean.... strict: 严格模式}
 * @return {type: string}
 * 例： let a = {}
 * compareType(a, 'object') || compareType(a, 'object', false)
 */
export const compareType = (param, type, strict = true) => {
  // 全部转换为小写比较
  type = type.toLowerCase();
  const _type = getType(param).toLowerCase();
  return strict ? _type === type : _type == type
}

/**
 * @description: 属性和属性的类型比较
 * @param { param1: 需要判断类型的参数1， param2: 类型：需要判断类型的参数2 }
 * @return {type: string}
 * 例： let a = {}; let b = 123;
 * compareType(a, b)
 */
export const compareParamType = (param1, param2) => {
  return getType(param1) === getType(param2)
}