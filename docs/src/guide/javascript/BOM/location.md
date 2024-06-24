# location

location 的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分

常用属性：

| 属性            | 描述                                      |
| --------------- | ----------------------------------------- |
| ancestorOrigins |                                           |
| href            | 获取完整的URL地址，对其赋值用于地址的跳转 |
| origin          |                                           |
| protocol        |                                           |
| host            |                                           |
| hostname        |                                           |
| port            |                                           |
| pathname        |                                           |
| search          | 获取地址中携带的参数，符号 `?` 后面部分   |
| hash            | 获取地址中的哈希值，符号 `#` 后面部分     |

常用方法：

| 方法     | 描述                                       |
| -------- | ------------------------------------------ |
| reload() | 刷新当前页面，传入参数 true 时表示强制刷新 |
|          |                                            |



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>location</title>
  </head>
  <body>
    <a href="http://www.codebetter.cn">支付成功,5秒之后跳转到首页</a>
    <script>
      // 1.获取a元素
      const a = document.querySelector("a");
      // 2.开启定时器
      // 3.声明倒计时变量
      let num = 5;
      let timer = setInterval(() => {
        num--;
        a.innerHTML = `支付成功,${num}秒之后跳转到首页`;
        if (num === 0) {
          clearInterval(timer);
          location.href = "http://www.codebetter.cn";
        }
      }, 1000);
    </script>
  </body>
</html>
```

