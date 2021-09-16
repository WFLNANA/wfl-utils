/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-16 20:19:34
 * @LastEditTime: 2021-09-16 20:39:04
 */
export const getUuid = (str="", position="start") => {
  let s = [];
  let hexDigits = 'ABCDE0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';
  let uuid = s.join('');
  if (str) {
    uuid = position === 'start' ? `${str}${uuid}` : `${uuid}${str}`
  }
  return uuid
}
// console.log(getUuid('-ZI', 'end'));