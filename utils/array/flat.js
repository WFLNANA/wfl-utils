/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 数组扁平化
 * @Date: 2021-09-22 16:46:24
 * @LastEditTime: 2021-09-22 17:23:33
 */
export const flatArr = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('参数不是Array类型')
  }
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatArr(cur) : cur)
  }, [])
}

// let a = [[1, 2], 3, [[4, 5, 6], [7, 8]]]
// console.log(flatArr(a));
// [1, 2, 3, 4, 5, 6, 7, 8]
