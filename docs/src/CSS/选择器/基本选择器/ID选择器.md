# ID选择器

::: tip 作用

根据元素的 `id` 属性值，来精准的找到页面中带有这个id属性值的元素，设置样式。

:::

::: info 语法

```css
#idName {
  属性名: 属性值;
}

[id="idName"] {
  属性名: 属性值;
}
```

:::

::: warning 注意

- id属性值在一个页面中是唯一的，不可重复的。
- id属性值：尽量由字母、数字、下划线(_)、短杠(-)组成，最好以字母开头、不要包含空格、区分大小写。
- 一个标签上只能有一个id属性值，一个id选择器只能选中一个标签。
- id选择器通常配合js使用。

:::



::: code-group

```html {7-11,13-17} [举例]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>ID选择器</title>
    <style>
      #box1 {
        width: 100px;
        height: 100px;
        background-color: orange;
      }

      [id="box2"] {
        width: 100px;
        height: 100px;
        background-color: orange;
      }
    </style>
  </head>
  <body>
    <div id="box1"></div>
    <div id="box2"></div>
  </body>
</html>
```

:::



