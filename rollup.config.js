/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-09-15 20:01:51
 * @LastEditTime: 2022-05-07 09:43:06
 */
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import clear from 'rollup-plugin-clear'

export default {
  input: 'index.js',
  cache: false,
  output: [{
    file: 'dist/wfl-utils.es.js',
    format: 'es',
    name: 'wfl-utils'
  },
  {
    file: 'dist/wfl-utils.umd.js',
    format: 'umd',
    name: 'wfl-utils'
  },
    // {
    // file: 'dist/wfl-utils.system.js',
    // format: 'system',
    // name: 'wfl-utils-system'
    // }
  ],
  exclude: ['node_modules'],
  plugins: [
    terser(),
    clear({
      target: ['./dist'],
      watch: false
    }),
    copy({
      targets: [
        {
          src: 'wfl-utils.d.ts',
          dest: 'dist/types'
        }
      ]
    })
  ]
}