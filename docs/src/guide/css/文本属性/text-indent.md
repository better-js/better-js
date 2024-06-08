# text-indent 文本缩进

::: tip 语法

属性：`text-indent`

单位：可以使用 `px` 单位，也可以使用 `em` 单位。

> em 是一个相对单位，就是当前元素（font-size) 1 个文字的大小，如果当前元素没有设置大小，则会按照父元素的 1 个文字大小。

:::

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>文本缩进</title>
    <style>
      div {
        text-indent: 20px;
      }
    </style>
  </head>
  <body>
    <div>Code Better</div>
    <p>Code Better</p>
  </body>
</html>
```

::: warning 注意

有正负值 正值向右缩进 负值向左缩进 (正负值通常都是和方向有关)

:::


