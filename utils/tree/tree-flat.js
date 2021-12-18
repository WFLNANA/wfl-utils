/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description:
 * @updateInfo:
 * @Date: 2021-12-17 16:10:51
 * @LastEditTime: 2021-12-17 17:03:30
 */
import { compareType } from '../types/get-type'

export function treeFlat(tree, children = "children") {
  if (!compareType(tree, 'array') && !compareType(tree, 'object')) {
    throw new TypeError('Tree must be an Array or Object')
  }
  if (compareType(tree, 'object') && !tree[children]) {
    return [tree]
  }

  const _tree = compareType(tree, 'object') ? [tree] : tree
  const arr = _tree.reduce((prev, cur) => {
    prev = cur[children] ? [...prev, cur, ...treeFlat(cur[children])] : [...prev, cur];
    return prev;
  }, [])

  return arr
}

// console.log(treeFlat([{ a: 123, children: [{ a: 234324 }, { a: 6666324 }] }]))