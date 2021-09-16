/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 11:53:35
 * @LastEditTime: 2021-09-16 10:26:48
 */
declare module 'wfl-utils' {
  export function loadFile(fileSrc: string, type: string, fn: Function): void
  export function getUrlParams(name: string, href?: string): any[]
  export function getType(param: any, isAll: boolean): string
  export function compareType(param: any, type: string, strict: boolean = true): boolean
  export function compareType(param1: any, param2: any): boolean
  export function removeSpace(str: string, type: string = '', replace: string = '')
  export function getCardInfo(cardId: string | number, split: string): {
    birthData: string,
    birthDataSplit: string,
    birthYear: string,
    birthMounth: string,
    birthDay: string,
    sex: string,
    sexNum: string,
    sexBolNum: number
  }
  export namespace cookie {
    function set(name: string, value: any, time: number | Date) { }
    function get(name: string): any { }
    function del(name: string): void { }
  }
  export namespace localStore {
    const setItem = (name: string, value: any, time: number | Date) => { }
    const getItem = (name: string): any => { }
    const removeItem = (name: string) => { }
    const clear = (name?: string) => { }
  }
}