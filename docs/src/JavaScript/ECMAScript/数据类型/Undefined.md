# undefined

1. 未定义是比较特殊的类型，只有一个值undefined。
2. 只声明变量，不赋值的情况下，变量的默认值就是undefined。
3. 一般很少直接为某个变量赋值为undefined）
4. 在控制台输出 **<font color="gray">灰色</font>**。

5. 未赋值与未定义的变量值都为 `undefined` ，建议声明变量设置初始值，以便区分变量状态。

6. 数值类型环境中 `undefined` 值会被转换为 `NaN`。

```javascript
let age   //声明变量但未赋值
document.write(age)   //输出undefined
```

#### undefined开发中的使用场景：

- 定义变量未给值就是 undefined
- 开发中经常声明一个变量，等待传送过来的数据，如果检测变量是undefined就说明没有值传递过来	
