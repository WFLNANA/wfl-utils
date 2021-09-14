/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-13 18:59:13
 * @LastEditTime: 2021-09-14 11:29:42
 */
// 根据身份证获取信息
const getCardInfo = (cardId, split = '-') => {
  if (typeof cardId !== 'string') {
    console.error('请传入字符串类型')
    return
  }
  let card = null;
  // 获取身份证长度
  const isNew = cardId.length === 18
  // 根据长度计算日期
  const birthData = isNew ? cardId.substr(6, 8) : `19${cardId.substr(6, 6)}`;
  const birthYear = birthData.substr(0, 4);
  const birthMounth = birthData.substr(4, 2);
  const birthDay = birthData.substr(6, 2);
  const birthDataSplit = `${birthYear}${split}${birthMounth}${split}${birthDay}`
  // 18位的第17为代表性别奇数：男 偶数：女
  // 15位的第15为代表性别奇数：男 偶数：女
  const sexId = cardId.charAt(isNew ? 16 : 14);
  const isBoy = Number(sexId) % 2;
  const sex = isBoy ? '男' : '女'
  card = {
    birthData,
    birthDataSplit,
    birthYear,
    birthMounth,
    birthDay,
    sex,
    sexNum: sexId,
    sexBolNum: isBoy ? 1 : 0,
  }
  return card
}