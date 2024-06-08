#  CSS的编写位置

## 行内样式

- 写在标签的 `style` 属性中，又称 **内联样式**。
- `style` 属性的值不能随便写，写要符合 `CSS` 语法规范，是 `名:值;` 的形式。
- 行内样式只能控制当前标签的样式，对其他标签无效。

```html {8}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS_行内样式</title>
  </head>
  <body>
    <h1 style="color: blue;">Hello CSS</h1>
  </body>
</html>
```





## 内部样式

- 写在 `HTML` 页面内部，将所有的 `CSS` 代码提取出来，单独放在 `<style>` 标签中。
- `<style>` 标签理论上可以放在 `HTML` 文档中的任何地方，但一般都放在 `<head>` 标签中。

```html {6-10}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS_内部样式</title>
    <style>
      h1 {
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Hello CSS</h1>
  </body>
</html>
```



## 外部样式

- 写在单独的 `.css` 文件中，随后在 `HTML` 文件中通过 `<link>` 标签引入使用。
- `<link>` 标签理论上写在哪都行，但是建议写在 `<head>` 标签中。
  - **rel**：（relation：关系）说明引入的文档与当前文档之间的关系。
  - **href**：引入的文档来自于哪里。

:::code-group
```html {6} [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS_外部样式</title>
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <h1>Hello CSS</h1>
  </body>
</html>
```
```css [index.css]
h1 {
  color: blue;
}
```
:::

