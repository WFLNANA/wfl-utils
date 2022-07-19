/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description:
 * @updateInfo:
 * @Date: 2022-05-06 17:55:05
 * @LastEditTime: 2022-05-06 19:11:51
 */
import os from 'os';

const geIpAddress = function () {
  let interfaces = os.networkInterfaces();
  for (let devName in interfaces) {
    let iface = interfaces[devName];
    // @ts-ignore
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal && !alias.address.includes('::')) {
        return alias.address;
      }
    }
  }
}

export const getServerInfo = () => {
  const ip = geIpAddress();
  const arch = os.arch();
  const platform = os.platform();
  const cpus = os.cpus();
  const cpu = cpus[0].model;
  const memory = os.totalmem();
  const freeMemory = os.freemem();
  const type = os.type()
  return {
    ip,
    arch,
    platform,
    cpu,
    memory,
    freeMemory,
    type
  }
}
// console.log(getServerInfo());