/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: Symbol.iterator
 * @updateInfo: 本次更新内容：
 * @Date: 2021-10-11 16:38:19
 * @LastEditTime: 2021-10-11 16:55:09
 */
function iterator() {
  let index = -1
  let keyValues = Object.entries(this)
  let len = keyValues.length
  return {
    next() {
      ++index
      return len > index ? {
        value: keyValues[index],
        done: false
      } : {
        value: keyValues[index],
        done: true
      }
    }
  }
}

export const mapObject = (obj = null) => {
  obj[Symbol.iterator] = iterator
}


// const obj = { age: 18, sex: 1, name: 1 }
// mapObject(obj)
// for (let [v, i] of obj) {
//   console.log(v, i);
// }