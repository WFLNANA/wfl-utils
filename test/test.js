// import { removeSpace, getType } from '../dist/wfl-utils.es.js';

// console.log(removeSpace('  dsd asd as5d45 as45d4 s5ad '));

// console.log(getType(123));


// let a = '三百八十一'
// console.log(a.toLocaleLowerCase())

// const u = ['亿', '万', '千', '百', '十']
// const n = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
// const sn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // let b = a.map((v) => v);
// console.log(new Array(a));


// 下班
const ltime = new Date('2021-09-29 18:30:00').getTime();
let time = 0;
let a = setInterval(()=>{
  time = new Date().getTime();
  const t = Math.round((ltime - time) / 1000);
  console.log(t <= 0 ? '%cGo Home, Go Home' : `%c距离下班还有：${t}秒`, 'color: green;font-weight: bold;font-size:16px;')
}, 1000)

const stop = () => {
  clearInterval(a)
}