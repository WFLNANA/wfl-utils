/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 10:48:44
 * @LastEditTime: 2021-09-15 15:26:26
 */
// 加载js || css || style
const loadFile = (fileSrc, type, fn) => {
  let ref
  if (type === 'js') {
    ref = document.createElement('script')
    ref.setAttribute('type', 'text/JavaScript')
    ref.setAttribute('src', fileSrc)
  } else if (type === 'css') {
    ref = document.createElement('link')
    ref.setAttribute('rel', 'stylesheet')
    ref.setAttribute('type', 'text/css')
    ref.setAttribute('href', fileSrc)
  } else if (type === 'style') {
    ref = document.createElement('style')
    ref.innerhtml = fileSrc
  }
  if (typeof ref !== 'undefined') {
    document.getElementsByTagName('head')[0].appendChild(ref)
    ref.onload = function () {
      typeof fn === 'function' && fn()
    }
  }
}

export default loadFile