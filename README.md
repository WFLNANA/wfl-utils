# **[wfl-utils]()**

**常用JS工具库 - 持续完善中...**
#### 目前已有：
- ***localStorage***: 增加了可设置过期时间
- ***cookie***: 简化了cookie的操作
- ***空格***：去除首、尾、全部空格，将空格替换为其它字符
- ***URL***：获取URL参数
- ***数据类型***：获取数据类型、类型比较
- ***身份证***：根据身份证获取出生日期、性别；支持15、18位身份证
- ***树形数据***：通用树形数据封装方法(使用了ES6 filter)没用递归
- ***资源加载***：向页面加载JS、CSS、Style；支持加载完成后调用方法
### 用法
****
####  获取URL参数
参数：
**name**：要获取的字段名
**href**：url地址
**例：**
```javascript
import { getUrlParam } from 'wfl-utils'

getUrlParam('name', 'https://www.wfl.utils/?name=zhangsan&age=12')
//  'zhangsan'

getUrlParam('age', 'https://www.wfl.utils/?name=zhangsan&age=12')
// '12'
```
####  类型获取
参数： 
**param**: 需要判断类型的参数
**isAll**: 是否返回全字符："[object String]" 默认只返回类型字符："String"
**例：**
```javascript
// 获取类型
import { getType } from 'wfl-utils'

let a = 123456;
getType(a)
// "Number"

getType(a, true)
// "[object Number]"
```
####  类型比较 - 属性和某一类型的类型比较
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
####  类型比较 - 属性和属性的类型比较
参数： 
**param1**: 需要比较类型的参数1
**param2**: 需要比较类型的参数2
**例：**
```javascript
// 获取类型
import { compareParamType } from 'wfl-utils'
	
let a = {}; 
let b = [];
compareParamType(a, b)
// false

let a = 123; 
let b = 567;
compareParamType(a, b)
// true

let a = []; 
let b = [];
compareParamType(a, b)
// true

```
####  根据身份证获取出生日期、性别 支持15位、18位新旧身份证
参数： 
**cardId**: 身份证号 string | number
**split**: 出身日期分隔符默认'-'，即‘2001-01-05’
**例：**
```javascript
// 获取类型
import { getCardInfo } from 'wfl-utils'

getCardInfo('612731200405231412')

//	{
//		birthData: "19990518",
//		birthDataSplit: "1999-05-18",
//		birthDay: "18",
//		birthMounth: "05",
//		birthYear: "1999",
//		sex: "男",
//		sexBolNum: 1, //1 -男 ，0 - 女
//		sexNum: "1",
//	}

getCardInfo('612731200405231412',  '.')
//	{
//		birthData: "19990518",
//		birthDataSplit: "1999.05.18",
//		birthDay: "18",
//		birthMounth: "05",
//		birthYear: "1999",
//		sex: "男",
//		sexBolNum: 1, //1 -男 ，0 - 女
//		sexNum: "1",
//	}

```
####  数据整合为树型数据
参数： 
** data**:  数据 any[]
** param** : {
		 id: 标识
		 parentId: 父标识
		 children: 子存放属性名
		 quit：返回条件
  }
**例：**

```javascript
import { formatTree } from 'wfl-utils';

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
]

formatTree(data)
//	 [
//		{
//			id: 1, 
//			iparentId: 0, 
//			iname: '菜单1',
//			irank: 1,
//			children: [
//				id: 4
//				name: "菜单1-1"
//				parentId: 1
//				rank: 2,
//				children: [....]
//			]
//		},
//		{
//			id: 2, parentId: 0, name: '菜单2', rank: 1,
//			.......
//		},
//		{
//			id: 3, parentId: 0, name: '菜单3', rank: 1,
//			.......
//		}
//	]
```
####  localStorage处理(含过期处理)
参数： 
**  name**: 存/取字段名
** value**: 值
** time**：过期时间，单位：秒
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
####  cookie处理
参数： 
**  name**: 存/取字段名
** value**: 值
** time**：
- string | number: 设置多久后(秒)过期
- Date: 设置什么时间过期
**例：**

```javascript
import { cookie } from 'cookie'

cookie.set('age', 25, 60 * 60 * 24) // 有效时间一天
cookie.set('age', 25, new Date('2022-05-25')) // 有效期至2022年5月25日
cookie.set('age', 25) // 不设置过期时间

cookie.get('age')
// 25
cookie.get('sex')
// 不存在或已过期返回 undefined
```

####  移除空格
参数：
** str**: 需处理字符串
** type**: 移除类型 不传：移除全部空格 start: 移除开始空格 end: 移除结束空格
** replace**：空格替换成什么，默认为空
**例：**

```javascript
import { removeSpace } from 'wfl-utils'

let str = '  12  sdad asdas45d asfsa ff   ';

removeSpace(str)
// 12sdadasdas45dasfsaff
removeSpace(str1, 'start')
//'12  sdad asdas45d asfsa ff   '
removeSpace(str1, 'end')
//'  12  sdad asdas45d asfsa ff'
removeSpace(str1, '', '-') //将空格替换为'-'
// '--12--sdad-asdas45d-asfsa-ff---'
```

####  资源加载
参数：
** fileSrc**: 资源路径
** type**: 资源类型 js、css、style
** cb**：加载后执行的回调函数
**例：**

```javascript
import { loadFile } from 'wfl-utils'

loadFile('/assets/js/a.js', 'js')

loadFile('/assets/js/a.js', 'js', ()=>{
	console.log('加载完成')
})
// 加载完成

loadFile('/assets/css/c.css', 'css')
```

####  其它文档待完善