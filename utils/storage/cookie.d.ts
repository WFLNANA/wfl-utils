/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-15 19:19:50
 * @LastEditTime: 2021-09-15 19:25:44
 */
declare namespace cookie {
  function set (name: string, value: any, time: number | Date) { }
  function get (name: string): any{ }
  function del (name: string): void { }
}