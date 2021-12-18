/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 10:47:18
 * @LastEditTime: 2021-12-17 16:30:23
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
import { formatWeek } from './utils/date/formatWeek.js'
import { getWeek, getMonth, getMonthComple } from './utils/date/getDate.js'
import { getMonthDay } from './utils/date/getMonthDay.js'
import { debounce } from './utils/thrott-chatter/debounce.js'
import { throttle } from './utils/thrott-chatter/throttle.js'
import { formatDate } from './utils/date/formatDate.js'
import { fullScreen } from './utils/screen/full-screen.js'
import { getUuid } from './utils/uuid/get-uuid.js'
import { treeFlat } from './utils/tree/tree-flat.js'

const wflutils = {
  treeFlat,
  getUuid,
  fullScreen,
  formatDate,
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
  flatArr,
  formatWeek,
  getWeek,
  getMonth,
  getMonthComple,
  getMonthDay,
  debounce,
  throttle
}

export {
  treeFlat,
  getUuid,
  fullScreen,
  formatDate,
  throttle,
  debounce,
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
  flatArr,
  checkingStr,
  formatWeek,
  getWeek,
  getMonth,
  getMonthComple,
  getMonthDay
}

export default wflutils