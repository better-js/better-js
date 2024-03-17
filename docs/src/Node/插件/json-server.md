# json-server

在30秒内或得零编码的完整的模拟REST API

[json-server](https://github.com/typicode/json-server)

## 1.全局安装json-serve

```shell
npm install -g json-server
```

## 2.创建数据

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

## 3.开启服务

```shell
json-server --watch db.json
```

