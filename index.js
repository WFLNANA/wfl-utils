/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 10:47:18
 * @LastEditTime: 2021-09-22 17:24:17
 */
import loadFile from './utils/load-js-css.js';
import getUrlParam from './utils/get-url-params.js';
import { getType, compareType, compareParamType } from './utils/types/get-type.js'
import { formatTree } from './utils/format-tree.js'
import { localStore } from './utils/storage/local-storage.js'
import { cookie } from './utils/storage/cookie.js';
import { removeSpace } from './utils/regexp/remove-space.js';
import { checkRegexp, checkingStr } from './utils/regexp/check-regexp.js';
import { flatArr } from './utils/array/flat.js'

const wflutils = {
  loadFile,
  getUrlParam,
  getType,
  compareType,
  compareParamType,
  formatTree,
  removeSpace,
  localStore,
  cookie,
  checkRegexp,
  checkingStr,
  flatArr
}

export {
  loadFile,
  getUrlParam,
  getType,
  compareType,
  compareParamType,
  formatTree,
  removeSpace,
  localStore,
  cookie,
  checkRegexp,
  checkingStr
}

export default wflutils