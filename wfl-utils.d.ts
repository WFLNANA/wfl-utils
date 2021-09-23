/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 11:53:35
 * @LastEditTime: 2021-09-22 17:24:46
 */
declare module 'wfl-utils' {
  export function loadFile(fileSrc: string, type: string, fn: Function): void
  export function getUrlParams(name: string, href?: string): any[]
  export function getType(param: any, isAll?: boolean): string
  export function compareType(param: any, type: string, strict?: boolean): boolean
  export function compareType(param1: any, param2: any): boolean
  export function removeSpace(str: string, type?: string, replace?: string)
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
    function set(name: string, value: any, time: number | Date)
    function get(name: string): any
    function del(name: string): void
  }
  export namespace localStore {
    function setItem(name: string, value: any, time: number | Date): void
    function getItem(name: string): any
    function removeItem(name: string): void
    function clear(name?: string): void
  }
  export namespace checkRegexp {
    const space: RegExp;
    const space_s: RegExp;
    const space_e: RegExp;
    const phone_s: RegExp;
    const phone: RegExp;
    const tel: RegExp;
    const id_card: RegExp;
    const postal: RegExp;
    const email: RegExp;
    const URL: RegExp;
    const IP: RegExp;
    const number: RegExp;
    const en: RegExp;
    const ch: RegExp;
    const html: RegExp;
  }

  export function chenkingStr(str: string, type: string): boolean;

  export function getUuid(str?: string, position?: string): string;

  export function formatDate(fstr: string, date?: string | Date, backList?: boolean): string;

  export function flatArr(arr: Array<T>): Array<T>;
}