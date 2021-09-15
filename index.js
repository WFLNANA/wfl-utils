/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 10:47:18
 * @LastEditTime: 2021-09-15 14:27:10
 */
import loadFile from './utils/load-js-css.js';
import getUrlParam from './utils/get-url-params.js';
import { getType, compareType, compareParamType } from './utils/types/get-type.js'
import { formatTree } from './utils/format-tree.js'
import { localStore } from './utils/storage/local-storage.js'
import { cookie } from './utils/storage/cookie.js';
import { removeSpace } from './utils/regexp/remove-space.js';
import { checkRegex } from './utils/regexp/check-regexp.js';

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
  checkRegex
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
  checkRegex
}

export default wflutils