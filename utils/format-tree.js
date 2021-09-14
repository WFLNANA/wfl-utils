/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 13:41:56
 * @LastEditTime: 2021-09-13 19:38:43
 */
import { getType } from './types/get-type'
/**
 * @description: 
 * @param {
 *  data: 原数据
 *  id: 标识
 *  parentId: 父标识
 *  children: 子存放属性名
 *  quit：返回条件
 * }
 * @return {tree data}
 */
class Tree {
   formatTree = () =>{
    
  }
}
// export const formatTree = (data, id = 'id', parentId = 'parentId', children = 'children', quit = ['parentId', 0]) => {
//   if (getType(data) !== 'Array') return

//   // 防止污染原数据
//   const copyData = JSON.parse(JSON.stringify(data));
//   return copyData.filter((parent) => {
//     const branchs = copyData.filter((child) => parent[id] === child[parentId]);
//     branchs.length ? parent[children] = branchs : undefined;
//     return parent[quit[0]] == quit[1];
//   })
// }