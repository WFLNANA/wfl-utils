/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-12-10 10:38:13
 * @LastEditTime: 2021-12-10 10:46:27
 */
const useClipboard = {
  getPreference(cb) {
    navigator.permissions
      .query({
        name: 'clipboard-read'
      })
      .then(result => {
        if (result.state == 'granted' || result.state == 'prompt') {
          cb();
        } else {
          console.error('用户拒绝访问剪贴板');
        }
      })
  },
  readText() {
    this.getPreference(() => {
      navigator.clipboard.readText().then(text => {
        console.log(text)
      })
    })
  },
  writeText(text) {
    navigator.clipboard.writeText(text)
  }
}