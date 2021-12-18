/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 11:53:35
 * @LastEditTime: 2021-12-17 16:40:46
 */
declare module 'wfl-utils' {
  export function loadFile(fileSrc: string, type: string, fn?: Function): void
  export function getUrlParam(name: string, href?: string): any[]
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
    function setItem(name: string, value: any, time?: number | Date): void
    function getItem(name: string): any
    function removeItem(name: string): void
    function clear(name?: string): void
  }

  export namespace sessionStore {
    function setItem(name: string, value: any, time?: number | Date): void
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

  export function formatWeek(date: Date | string, isArr?: boolean): string | (string | number)[];

  export function getWeek(date: any): {
    date: any;
    datemon: any;
    week: string | number;
    week1: string | number;
    week2: string | number;
    week3: string | number;
  }[]

  export function getMonth(date: any): {
    date: string;
    datemon: string;
    week: string | number;
    week1: string | number;
    week2: string | number;
    week3: string | number;
  }[]

  export function getMonthComple(date: any): {
    date: string;
    datemon: string;
    week: string | number;
    week1: string | number;
    week2: string | number;
    week3: string | number;
  }[]

  export function getMonthDay(year: string | number, month: string | number): number

  /**
 * @description: 函数防抖
 * @param {*} fn 函数
 * @param {*} delay 延迟时间
 * @param {*} immediate 立即执行
 * @param {*} cb 回调函数
 * @return {*}
 */
  export function debounce(fn: Function, delay?: number, immediate?: boolean, cb?: Function | null)

  /**
 * @description: 函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数
 * @param {*} fn 函数
 * @param {*} delay 延迟时间
 * @param {*} cb 回调函数
 * @param {*} immediate 立即执行
 * @return { Function } 
 */
  export function throttle(fn: Function, delay?: number, immediate?: boolean, cb?: Function | null)

  /**
   * @description: 全屏
   * @param {*} id dom元素id
   * @return {*}
   */
  export namespace fullScreen {
    function open(id?: HTMLElement): Function
    function exit(): Function
    function toggle(id?: HTMLElement): Function
  }
  interface ITree {
    id?: string
    parentId?: string
    children?: string
    quit?: [string | number, string | number]
  }
  export function formatTree<T>(data: T[], param?: ITree): T[]

  export function treeFlat<T>(tree: T[] | T, children?: string): T[]
}
