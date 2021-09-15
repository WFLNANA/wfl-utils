/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-14 10:13:18
 * @LastEditTime: 2021-09-15 09:39:57
 */
declare function getCardInfo(cardId: string | number, split: string): {
  birthData: string,
  birthDataSplit: string,
  birthYear: string,
  birthMounth: string,
  birthDay: string,
  sex: string,
  sexNum: string,
  sexBolNum: number
}