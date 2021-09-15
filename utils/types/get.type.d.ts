/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-14 10:02:44
 * @LastEditTime: 2021-09-15 09:40:35
 */
declare function getType(param: any, isAll: boolean): string
declare function compareType(param: any, type: string, strict: boolean = true): boolean
declare function compareType(param1: any, param2: any): boolean