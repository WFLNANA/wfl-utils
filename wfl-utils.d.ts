/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 11:53:35
 * @LastEditTime: 2021-09-13 11:57:42
 */
declare module 'wfl-utils' {
  export function loadFile(fileSrc: string, type: string, fn: Function): void
  export function getUrlParams(name: string, href?: string): any[]
}