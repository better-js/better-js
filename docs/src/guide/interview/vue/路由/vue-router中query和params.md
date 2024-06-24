#  vue-router中query和params

路由跳转传参的两种不同方式：

## query

查询字符串参数

```js
// 跳转
$router.push("/list?pageNum=1&pageSize=10")

$router.push({
  path:"/list",
  query:{
    pageNum:1,
    pageSize:10
  }
})

$router.push({
  name:"List",
  query:{
    pageNum:1,
    pageSize:10
  }
})

// 获取
$route.query
```

## params

路经信息参数

```js
// 修改路由表
{
  path:"/List/:id"
}

// 跳转 （不支持path的写法）
$router.push("/list/123")

$router.push({
  name: "List",
  params:{
    id: 123
  }
})

// 获取
$route.params
```

