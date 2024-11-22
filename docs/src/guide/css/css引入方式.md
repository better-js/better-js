#  CSS引入方式

## 内部样式

写在 `HTML` 页面内部，将所有的 `CSS` 代码提取出来，单独放在 `<style>` 标签中。

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

> `<style>` 标签理论上可以放在 `HTML` 文档中的任何地方，但一般都放在 `<head>` 标签中。

## 外部样式

写在单独的 `.css` 文件中，随后在 `HTML` 文件中通过 `<link>` 标签引入使用。

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

> `<link>` 标签理论上写在哪都行，但是建议写在 `<head>` 标签中。
>
> - **rel**：（relation：关系）说明引入的文档与当前文档之间的关系。
> - **href**：引入的文档来自于哪里。



## 行内样式

写在标签的 `style` 属性中，又称 **内联样式**。

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



## 样式表的优先级

- 优先级规则：**行内样式** > **内部样式** = **外部样式**

  - 同名属性 **行内优先，内部和外部按书写顺序，遵循就近原则（后来者居上）。**

  - 同一个样式表中，优先级也和编写顺序有关，遵循就近原则。

| 分类     | 优点                                                         | 缺点                                                         | 使用频率 | 作用范围 |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------- | -------- |
| 行内样式 | 优先级最高                                                   | 1. 结构与样式未分离<br />2. 代码结构混乱<br />3. 样式不能复用 | 很低     | 当前标签 |
| 内部样式 | 1. 样式可复用<br />2. 代码结构清晰                           | 1. 结构与样式未彻底分离<br />2. 样式不能多页面复用           | 一般     | 当前页面 |
| 外部样式 | 1. 样式可多页面复用<br />2. 代码结构清晰<br />3. 可触发浏览器的缓存机制<br />4. 结构与样式彻底分离 | 需要引入才能使用                                             | 最高     | 多个页面 |

- 前端代码思想：结构（html）和 样式（css）实现分离。



 :::code-group

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>样式表优先级</title>
    <link rel="stylesheet" href="./index.css" />
    <style>
      h1 {
        color: yellow;
      }
    </style>
  </head>
  <body>
    <h1>Hello CSS</h1>
  </body>
</html>
```

```css
h1 {
  color: blue;
}
```

:::







