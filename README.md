# **[wfl-utils]()**

**常用JS工具库**

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
<<<<<<< HEAD
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
=======
>>>>>>> 5846b39f60053a18301d9df855f281638f8cc712
