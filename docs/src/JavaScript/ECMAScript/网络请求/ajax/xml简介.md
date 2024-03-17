# XML

最开始Ajax进行数据交换的时候所使用的格式就是XML，服务器端给客户浏览器返回XML格式的字符串，前端js对拿到结果进行解析并把数据提取出来然后进行处理。

现在进行Ajax应用时使用的是JSON格式，JSON格式相对于XML格式更加简洁，而且数据转换也更加容易，可以借助一些JSON的API，快速将字符串转成js对象，灵活度要远胜于XML。

## XML简介

XML可扩展标记语言

XML被设计用来传输和存储数据

XML和HTML类似，不同的是HTML中都是预定义标签，而XML中没有预定义标签，全部都是自定义标签，用来表示一些数据。

例如：用XML表示这个数据 `name="钢铁侠"; age=30; gender="男";`

```xml
<student>
	<name>钢铁侠</name>
  <age>30</age>
  <gender>男</gender>
</student>
```

现在已经被JSON取代了

```json
{
  "name": "钢铁侠",
  "age": 30,
  "gender":"男"
} 
```
