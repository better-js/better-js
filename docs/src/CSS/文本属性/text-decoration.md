# text-decoration 文本修饰

::: tip 语法

属性：`text-decoration`

属性值：

- `none` ：无装饰线（默认值）
- `underline` ：下划线 （链接a自带下划线）
- `overline` ：上划线                
- `line-through` ：删除线

:::

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>文本修饰</title>
    <style>
      p {
        /* 上划绿色虚线 */
        text-decoration: overline dotted green;
      }
      span {
        /* 下划红色波浪线 */
        text-decoration: underline wavy red;
      }
      div {
        /* 删除线 */
        text-decoration: line-through;
      }
      a {
        /* 无装饰线 */
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <p>Code Better</p>
    <span>Code Better</span>
    <div>Code Better</div>
    <a href="">Code Better</a>
  </body>
</html>
```


