#### 类型获取# **[wfl-utils]()**

**常用 JS 工具库 - 持续完善中...**

#### 目前已有

- **_localStorage_**: 增加了可设置过期时间
- **_cookie_**: 简化了 cookie 的操作
- **_空格_**：去除首、尾、全部空格，将空格替换为其它字符
- **_URL_**：获取 URL 参数
- **_数据类型_**：获取数据类型、类型比较
- **_身份证_**：根据身份证获取出生日期、性别；支持 15、18 位身份证
- **_树形数据_**：通用树形数据封装方法(使用了 ES6 filter)没用递归
- **_资源加载_**：向页面加载 JS、CSS、Style；支持加载完成后调用方法
- **_常用正则_**：空格、手机号、座机、身份证、邮编、邮箱、网址、IP、数字、字母、汉字、HTML
- **_生成 UUID_**：36 字节的字符串;支持在 UUID 开始或末尾添加自定义字符串
- **_日期格式化_**：YYYY-MM-DD hh:mm:ss q S 年-月-日 时:分:秒 季度 毫秒
- **_数组扁平化(任意深度数组)_**：[[1, 2], 3, [[4, 5, 6], [7, 8]]] => [1, 2, 3, 4, 5, 6, 7, 8]
- **_获取某一周、某一月、某一月补全(日历)数据_**：见文档说明
- **_获取某一月有多少天_**：getMonthDay(2021, 9) => 30
- **_函数节流_**：见文档说明
- **_函数防抖_**：见文档说明

### 用法

```javascript
npm i wfl-utils -S
// 或
yarn add wfl-utils
```

```javascript
import { xx } from "wfl-utils";
// 或
import wflutils from "wfl-utils";
wflutils.xxx();
```

---

#### 获取 URL 参数

参数：
**name**：要获取的字段名
**href**：url 地址
**例：**

```javascript
import { getUrlParam } from "wfl-utils";

getUrlParam("name", "https://www.wfl.utils/?name=zhangsan&age=12");
//  'zhangsan'

getUrlParam("age", "https://www.wfl.utils/?name=zhangsan&age=12");
// '12'
```

#### 类型获取

参数：
**param**: 需要判断类型的参数
**isAll**: 是否返回全字符："[object String]" 默认只返回类型字符："String"
**例：**

```javascript
// 获取类型
import { getType } from "wfl-utils";

let a = 123456;
getType(a);
// "Number"

getType(a, true);
// "[object Number]"
```

#### 类型比较 - 属性和某一类型的类型比较

参数：
**param**: 需要比较类型的参数
**type**: string、number、boolean....等
**strict**: 严格模式
**例：**

```javascript
// 获取类型
import { compareType } from 'wfl-utils'

let a = 123456;
compareType(a， 'number')
// true
compareType(a， 'Number')
// true
compareType(a,  'string')
// false
```

#### 类型比较 - 属性和属性的类型比较

参数：
**param1**: 需要比较类型的参数 1
**param2**: 需要比较类型的参数 2
**例：**

```javascript
// 获取类型
import { compareParamType } from "wfl-utils";

let a = {};
let b = [];
compareParamType(a, b);
// false

let a = 123;
let b = 567;
compareParamType(a, b);
// true

let a = [];
let b = [];
compareParamType(a, b);
// true
```

#### 根据身份证获取出生日期、性别 支持 15 位、18 位新旧身份证

参数：
**cardId**: 身份证号 string | number
**split**: 出身日期分隔符默认'-'，即‘2001-01-05’
**例：**

```javascript
// 获取类型
import { getCardInfo } from "wfl-utils";

getCardInfo("612731200405231412");

// {
//  birthData: "19990518",
//  birthDataSplit: "1999-05-18",
//  birthDay: "18",
//  birthMounth: "05",
//  birthYear: "1999",
//  sex: "男",
//  sexBolNum: 1, //1 -男 ，0 - 女
//  sexNum: "1",
// }

getCardInfo("612731200405231412", ".");
// {
//  birthData: "19990518",
//  birthDataSplit: "1999.05.18",
//  birthDay: "18",
//  birthMounth: "05",
//  birthYear: "1999",
//  sex: "男",
//  sexBolNum: 1, //1 -男 ，0 - 女
//  sexNum: "1",
// }
```

#### 数据整合为树型数据

参数：
**data**:   数据 any[]
**param** : {
id:  标识
parentId:  父标识
children:  子存放属性名
quit['parentId', 0]：返回条件['parentId', 0]即 parentId == 0 为返回条件
}
**例：**

```javascript
import { formatTree } from "wfl-utils";

let data = [
  { id: 1, parentId: 0, name: "菜单1", rank: 1 },
  { id: 2, parentId: 0, name: "菜单2", rank: 1 },
  { id: 3, parentId: 0, name: "菜单3", rank: 1 },
  { id: 4, parentId: 1, name: "菜单1-1", rank: 2 },
  { id: 5, parentId: 1, name: "菜单1-2", rank: 2 },
  { id: 6, parentId: 2, name: "菜单2-1", rank: 2 },
  { id: 7, parentId: 4, name: "菜单1-1-1", rank: 3 },
  { id: 8, parentId: 7, name: "菜单1-1-1-1", rank: 4 },
  { id: 9, parentId: 8, name: "菜单1-1-1-1-1", rank: 5 },
  { id: 10, parentId: 9, name: "菜单1-1-1-1-1-1", rank: 6 },
  { id: 11, parentId: 10, name: "菜单1-1-1-1-1-1-1", rank: 7 },
  { id: 12, parentId: 11, name: "菜单1-1-1-1-1-1-1-1", rank: 8 },
  { id: 13, parentId: 12, name: "菜单1-1-1-1-1-1-1-1-1", rank: 9 },
  { id: 14, parentId: 13, name: "菜单1-1-1-1-1-1-1-1-1-1", rank: 10 },
];

formatTree(data);
// formatTree(data, 'parentId', 'children', ['parentId', 0])
//  [
//  {
//   id: 1,
//   iparentId: 0,
//   iname: '菜单1',
//   irank: 1,
//   children: [
//    id: 4
//    name: "菜单1-1"
//    parentId: 1
//    rank: 2,
//    children: [....]
//   ]
//  },
//  {
//   id: 2, parentId: 0, name: '菜单2', rank: 1,
//   .......
//  },
//  {
//   id: 3, parentId: 0, name: '菜单3', rank: 1,
//   .......
//  }
// ]
```

#### localStorage 处理(含过期处理)

参数：
**name**:  存/取字段名
**value**:  值
**time**：过期时间，单位：秒
**例：**

```javascript
import { localStore } from 'wfl-utils'

localStore.setItem('name', '李四')；// 不设置有效期
localStore.setItem('name', '李四', 60 * 60 * 24) // 有效期一天

localStore.getItem('name')
// 李四
// 若字段不存在或已过期则返回null

localStore.removeItem('name') // 移除某一项
localStore.clear('name') // 移除某一项
localStore.clear() // 清空localStorage

```

#### cookie 处理

参数：
**name**:  存/取字段名
**value**:  值
**time**：

- string | number: 设置多久后(秒)过期
- Date: 设置什么时间过期
  **例：**

```javascript
import { cookie } from "wfl-utils";

cookie.set("age", 25, 60 * 60 * 24); // 有效时间一天
cookie.set("age", 25, new Date("2022-05-25")); // 有效期至2022年5月25日
cookie.set("age", 25); // 不设置过期时间

cookie.get("age");
// 25
cookie.get("sex");
// 不存在或已过期返回 undefined

// 删除cookie
cookie.del("age");
```

#### 移除空格

参数：
**str**: 需处理字符串
**type**:  移除类型 不传：移除全部空格 start: 移除开始空格 end: 移除结束空格
**replace**：空格替换成什么，默认为空
**例：**

```javascript
import { removeSpace } from "wfl-utils";

let str = "  12  sdad asdas45d asfsa ff   ";

removeSpace(str);
// 12sdadasdas45dasfsaff
removeSpace(str1, "start");
//'12  sdad asdas45d asfsa ff   '
removeSpace(str1, "end");
//'  12  sdad asdas45d asfsa ff'
removeSpace(str1, "", "-"); //将空格替换为'-'
// '--12--sdad-asdas45d-asfsa-ff---'
```

#### 资源加载

参数：
**fileSrc**: 资源路径
**type**:  资源类型 js、css、style
**cb**：加载后执行的回调函数
**例：**

```javascript
import { loadFile } from "wfl-utils";

loadFile("/assets/js/a.js", "js");

loadFile("/assets/js/a.js", "js", () => {
  console.log("加载完成");
});
// 加载完成

loadFile("/assets/css/c.css", "css");
```

#### 生成 UUID

参数：
**str**: 需插入的字符串
**position**:  插入位置 start | end
**例：**

```javascript
import { getUuid } from "wfl-utils";

getUuid();
// 2BAB3964-4899-4316-31B6-519AB4D587E8

getUuid();
// 08347CEA-3E80-4799-55A1-BB142876CBED

getUuid("ZI-"); // 添加前缀
//ZI-A0821DD2-90ED-415D-3953-6C634A0EA108

getUuid("-ZI", "end"); // 添加后缀
//0D98DC6A-8A87-495E-5BA8-CBD7874351A3-ZI
```

#### 日期格式化

参数：
**fstr**: 需转换、获取的日期格式
**date**:  待转换的日期 string | Date
**backList**:  将结果已对象形式返回{data： 转换后的日期, list: 转换后的日期将年月日、时分秒、季度、毫秒以数组形式返回}
**例：**

```javascript
import { formatDate } from "wfl-utils";

// YYYY-MM-DD hh:mm:ss  q    S
//  年  月 日  时:分:秒 季度  毫秒

formatDate("YYYY-MM-DD hh:mm:ss");
// 2021-09-17 20:16:27

// 分隔符 - 和 : 可自己传入
formatDate("YYYY.MM.DD");
// 2021.09.17
formatDate("YYYY/MM/DD");
// 2021/09/17

formatDate("hh:mm:ss");
// 20:16:27
formatDate("YYYY-M-DD hh:mm:ss");
// 2021-9-17 20:16:27
formatDate("YYYY-MM-DD hh:mm:ss q");
// 2021-9-17 20:19:35 3
formatDate("YYYY-MM-DD hh:mm:ss q S");
// 2021-9-17 20:20:03 3 312

formatDate("YYYY-MM-DD hh:mm:ss", "", true);
//{
// data: '2021-9-17 20:17:55',
// list: [ '2021-9-17', '20:17:55' ]
//}
```

#### 数组扁平化(任意深度数组)

参数：
**arr**: Array<any>
**例：**

```javascript
import { flatArr } from "wfl-utils";

let a = [
  [1, 2],
  3,
  [
    [4, 5, 6],
    [7, 8],
  ],
];
console.log(flatArr(a));
// [1, 2, 3, 4, 5, 6, 7, 8]

let b = [[1, 2], 3, [7, 8]];
console.log(flatArr(a));
// [1, 2, 3, 7, 8]
```

参数：
**param**: 需要判断类型的参数
**isAll**: 是否返回全字符："[object String]" 默认只返回类型字符："String"
**例：**

```javascript
// 获取类型
import { getType } from "wfl-utils";

let a = 123456;
getType(a);
// "Number"

getType(a, true);
// "[object Number]"
```

###### 获取某个日期是星期几

```javascript
import { formatWeek } from "wfl-utils";

/*
参数：
 date：日期
 isArr: 是否已数组形式返回，默认true
*/
formatWeek();
// 默认返回包含常用写法数组，不传参默认当前日期
// [ '日', '星期日', '周日', 0 ]
formatWeek("", false);
// 日
formatWeek("2021-08-02");
// [ '一', '星期一', '周一', 1 ]
```

###### 获取某月有多少天

```javascript
import { getMonthDay } from "wfl-utils";

/*
参数：
 year: 年份
 month: 月份
*/
getMonthDay();
// 30
getMonthDay(2021, 5);
// 31
```

###### 获取某一周日期

```javascript
import { getWeek } from "wfl-utils";
/*
参数
 date: 日期， 默认当前日期
*/
getWeek();
/*
[
  {
    date: '2021-09-20',
    datemon: '09-20',
    week: '一',
    week1: '星期一',
    week2: '周一',
    week3: 1
  },
  {
    date: '2021-09-21',
    datemon: '09-21',
    week: '二',
    week1: '星期二',
    week2: '周二',
    week3: 2
  },
  {
    date: '2021-09-22',
    datemon: '09-22',
    week: '三',
    week1: '星期三',
    week2: '周三',
    week3: 3
  },
  {
    date: '2021-09-23',
    datemon: '09-23',
    week: '四',
    week1: '星期四',
    week2: '周四',
    week3: 4
  },
  {
    date: '2021-09-24',
    datemon: '09-24',
    week: '五',
    week1: '星期五',
    week2: '周五',
    week3: 5
  },
  {
    date: '2021-09-25',
    datemon: '09-25',
    week: '六',
    week1: '星期六',
    week2: '周六',
    week3: 6
  },
  {
    date: '2021-09-26',
    datemon: '09-26',
    week: '日',
    week1: '星期日',
    week2: '周日',
    week3: 0
  }
]
*/
```

###### 获取某一月日期(当前月，不会补全：补全即获取 6 周共 42 天常见日历数据)

```javascript
import { getMonth } from "wfl-utils";
/*
参数
 date: 日期， 默认当前日期
*/
/*
[
  {
    date: '2021-09-01',
    datemon: '09-01',
    week: '三',
    week1: '星期三',
    week2: '周三',
    week3: 3
  },
  {
    date: '2021-09-02',
    datemon: '09-02',
    week: '四',
    week1: '星期四',
    week2: '周四',
    week3: 4
  },
  {
    date: '2021-09-03',
    datemon: '09-03',
    week: '五',
    week1: '星期五',
    week2: '周五',
    week3: 5
  },
  ......
   {
    date: '2021-09-28',
    datemon: '09-28',
    week: '二',
    week1: '星期二',
    week2: '周二',
    week3: 2
  },
  {
    date: '2021-09-29',
    datemon: '09-29',
    week: '三',
    week1: '星期三',
    week2: '周三',
    week3: 3
  },
  {
    date: '2021-09-30',
    datemon: '09-30',
    week: '四',
    week1: '星期四',
    week2: '周四',
    week3: 4
  }
]
*/
```

###### 获取某一月补全日期(即日历)

```javascript
import { getMonthComple } from "wfl-utils";
/*
参数
 date: 日期， 默认当前日期
*/
getMonthComple();
/*
[
  {
    date: '2021-08-30',
    datemon: '08-30',
    week: '一',
    week1: '星期一',
    week2: '周一',
    week3: 1
  },
  {
    date: '2021-08-31',
    datemon: '08-31',
    week: '二',
    week1: '星期二',
    week2: '周二',
    week3: 2
  },
  {
    date: '2021-09-01',
    datemon: '09-01',
    week: '三',
    week1: '星期三',
    week2: '周三',
    week3: 3
  },
  ......
  {
    date: '2021-10-09',
    datemon: '10-09',
    week: '六',
    week1: '星期六',
    week2: '周六',
    week3: 6
  },
  {
    date: '2021-10-10',
    datemon: '10-10',
    week: '日',
    week1: '星期日',
    week2: '周日',
    week3: 0
  }
*/
```

#### 函数防抖

当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时
参数：
/\*\*

- @description: 函数防抖
- @param {\*} fn 函数
- @param {\*} delay 延迟时间-毫秒
- @param {\*} immediate 立即执行
- @param {\*} cb 回调函数
- @return {_}
  _/
  **例：**

```javascript
import { debounce } from "wfl-utils";

// function log() {
//   console.log(Date.now());
// }

// 首次调用不会立即执行
const fn = debounce(log, 1000);
// 首次调用会立即执行一次
const fn = debounce(log, 1000, true);
// 支持执行后的回调函数
const fn = debounce(log, 1000, false, () => {});

let num = 1;
setInterval(() => {
  console.log("-");
  fn();
}, 1000);
```

```

#### 函数节流：
当持续触发事件时，保证一定时间段内只调用一次事件处理函数
参数：
/\*\*

- @description: 函数节流
- @param {\*} fn 函数
- @param {\*} delay 延迟时间-毫秒
- @param {\*} immediate 立即执行
- @param {\*} cb 回调函数
- @return {_}
  _/

  **例：**
```javascript
import { throttle } from 'wfl-utils'

function log() {
   console.log(Date.now());
}
const fn = throttle(log)

setInterval(() => {
 console.log('-')
 fn()
}, 100)
```

```
#### 全屏：
整个页面或指定某一元素全屏
参数：
/\*\*

- @description: 函数节流
- @param {\*} id 可选DOM元素id
- @return {_}
  _/
  **例：**
```javascript
import { fullScreen } from 'wfl-utils'

// 网页全屏
fullScreen.open()
// 某个元素全屏
<div id="demo"></div>
fullScreen.open('demo')

// 退出全屏
fullScreen.exit()

// 切换全屏/取消全屏
fullScreen.toggle()
<div id="demo"></div>
fullScreen.toggle('demo')
```

#### 其它文档待完善
