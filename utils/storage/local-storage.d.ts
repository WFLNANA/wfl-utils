/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-15 09:32:14
 * @LastEditTime: 2021-09-15 09:44:23
 */
declare namespace localStore {
  export const setItem = (name: string, value: any, time: number | Date) => { }
  export const getItem = (name: string): any => { }
  export const removeItem = (name: string) => { }
  export const clear = (name?: string) => { }
}