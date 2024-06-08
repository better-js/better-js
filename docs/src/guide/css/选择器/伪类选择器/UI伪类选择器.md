# UI伪类选择器

::: tip 作用

`:checked` ：被选中的复选框或单选按钮。

`:disabled` ：可用的表单元素（没有 **disabled** 属性）。

`:enabled` ：不可用的表单元素（有 **disabled** 属性）。

:::

::: info 语法

:::code-group

```html {7-11,15-16} [:checked]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>UI伪类选择器</title>
    <style>
      /* 选中的是勾选的复选框or单选按钮 */
      input:checked {
        width: 50px;
        height: 50px;
      }
    </style>
  </head>
  <body>
    <input type="checkbox" />
    <input type="radio" />
  </body>
</html>
```

```html {7-10,15} [:disabled]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>UI伪类选择器</title>
    <style>
      /* 选中的是被禁用的input元素 */
      input:disabled {
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <input type="text" />
    <input type="text" disabled />
  </body>
</html>
```

```html {7-10,14} [:enabled]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>UI伪类选择器</title>
    <style>
      /* 选中的是可用的input元素 */
      input:enabled {
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <input type="text" />
    <input type="text" disabled />
  </body>
</html>
```

:::

