/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-10-25 14:01:14
 * @LastEditTime: 2021-10-25 14:42:19
 */
export const fullScreen = {
  open: (el) => {
    const docElm = el ? document.getElementById(el) : document.documentElement
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen()
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen()
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen()
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen()
    }
  },

  exit: () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen()
    }
  },
  toggle(el) {
    if (!document.fullscreenElement) {
      this.open(el)
    } else {
      this.exit()
    }
  }
}