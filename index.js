/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 10:47:18
 * @LastEditTime: 2021-09-14 10:09:54
 */
import loadFile from './utils/load-js-css';
import getUrlParam from './utils/get-url-params';
import { getType, compareType, compareParamType } from './utils/types/get-type'
import { formatTree } from './utils/format-tree'

const wflutils = {
  loadFile,
  getUrlParam,
  getType,
  compareType,
  compareParamType,
  formatTree
}

export {
  loadFile,
  getUrlParam,
  getType,
  compareType,
  compareParamType,
  formatTree
}

export default wflutils