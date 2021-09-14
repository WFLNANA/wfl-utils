/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description:
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 11:01:50
 * @LastEditTime: 2021-09-14 10:24:08
 */
const getUrlParam = (name, href) => { // 获取url参数
  let reg = new RegExp('(^|&?)' + name + '=([^&]*)(&|$)', 'i')
  let r = href ? href.substr(1).match(reg) : window.location.href.substr(1).match(reg)
  if (r != null) {
    return decodeURI(r[2])
  }
  return undefined
}
console.log(getUrlParam('name', 'https://www.wfl.utils/?name=zhangsan'));



export default getUrlParam