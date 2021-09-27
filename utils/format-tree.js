/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 13:41:56
 * @LastEditTime: 2021-09-26 14:28:10
 */
import { getType } from './types/get-type.js'
/**
 * @description: 
 * @param {
 *  data: 原数据
 *  param: {
 *    id: 标识
 *    parentId: 父标识
 *    children: 子存放属性名
 *    quit：返回条件
 *  }
 * }
 * @return {tree data}
 */
export const formatTree = (data, param = null) => {
  let _param = { id: 'id', parentId: 'parentId', children: 'children', quit: ['parentId', 0] }
  // 合并配置项
  if (param) {
    _param = {
      ..._param,
      ...param
    }
  }
  if (getType(data) !== 'Array') return
  const { id, parentId, children, quit } = _param;
  // 防止污染原数据
  const copyData = JSON.parse(JSON.stringify(data));
  return copyData.filter((parent) => {
    const branchs = copyData.filter((child) => parent[id] === child[parentId]);
    branchs.length ? parent[children] = branchs : undefined;
    return parent[quit[0]] === quit[1];
  })
}

// test
// let data = [
//   { id: 1, parentId: 0, name: "菜单1", rank: 1 },
//   { id: 2, parentId: 0, name: "菜单2", rank: 1 },
//   { id: 3, parentId: 0, name: "菜单3", rank: 1 },
//   { id: 4, parentId: 1, name: "菜单1-1", rank: 2 },
//   { id: 5, parentId: 1, name: "菜单1-2", rank: 2 },
//   { id: 6, parentId: 2, name: "菜单2-1", rank: 2 },
//   { id: 7, parentId: 4, name: "菜单1-1-1", rank: 3 },
//   { id: 8, parentId: 7, name: "菜单1-1-1-1", rank: 4 },
//   { id: 9, parentId: 8, name: "菜单1-1-1-1-1", rank: 5 },
//   { id: 10, parentId: 9, name: "菜单1-1-1-1-1-1", rank: 6 },
//   { id: 11, parentId: 10, name: "菜单1-1-1-1-1-1-1", rank: 7 },
//   { id: 12, parentId: 11, name: "菜单1-1-1-1-1-1-1-1", rank: 8 },
//   { id: 13, parentId: 12, name: "菜单1-1-1-1-1-1-1-1-1", rank: 9 },
//   { id: 14, parentId: 13, name: "菜单1-1-1-1-1-1-1-1-1-1", rank: 10 },
// ]

// console.log(formatTree(data, {id: 'id'}));

let data = [
  { no: 1, parentNo: null, name: "菜单1", rank: 1 },
  { no: 2, parentNo: null, name: "菜单2", rank: 1 },
  { no: 3, parentNo: null, name: "菜单3", rank: 1 },
  { no: 4, parentNo: 1, name: "菜单1-1", rank: 2 },
  { no: 5, parentNo: 1, name: "菜单1-2", rank: 2 },
  { no: 6, parentNo: 2, name: "菜单2-1", rank: 2 },
  { no: 7, parentNo: 4, name: "菜单1-1-1", rank: 3 },
  { no: 8, parentNo: 7, name: "菜单1-1-1-1", rank: 4 },
  { no: 9, parentNo: 8, name: "菜单1-1-1-1-1", rank: 5 },
  { no: 10, parentNo: 9, name: "菜单1-1-1-1-1-1", rank: 6 },
  { no: 11, parentNo: 10, name: "菜单1-1-1-1-1-1-1", rank: 7 },
]

console.log(formatTree(data, {id: 'no', parentId: 'parentNo', quit: ['parentNo', null]}));