/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 深克隆
 * @Date: 2021-09-22 17:28:59
 * @LastEditTime: 2021-09-22 17:57:22
 */
import { getType } from "../types/get-type.js"
export const deepCopy = (param) => {
  const type = getType(param)
  console.log('type: ', type);

}

deepCopy({})