/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-15 09:32:14
 * @LastEditTime: 2021-09-15 19:17:47
 */
declare namespace localStore {
  const setItem = (name: string, value: any, time: number | Date) => { }
  const getItem = (name: string): any => { }
  const removeItem = (name: string) => { }
  const clear = (name?: string) => { }
}