#  CSS引入方式

## 内部样式

将CSS代码放置于HTML文档的`<style>`标签中。

内部样式有助于保持HTML文档的结构清晰，但仅限于当前页面使用。

```html {6-10}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>内部样式示例</title>
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

将CSS代码保存在独立的`.css`文件中，并通过`<link>`标签引入HTML文档。

外部样式是最推荐的方式，它支持样式的多页面复用，并且有助于结构与样式的彻底分离。

:::code-group

```html {6} [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>外部样式示例</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <h1>Hello CSS</h1>
</body>
</html>
```

```css [styles.css]
h1 {
  color: blue;
}
```

:::



## 内联样式

写在标签的 `style` 属性中。

- `style` 属性的值不能随便写，写要符合 `CSS` 语法规范，是 `名:值;` 的形式。
- 内联样式只能控制当前标签的样式，对其他标签无效。
- 内联样式具有最高的优先级，但不利于样式复用和维护。

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

- 同名属性时，行内样式优先，内部和外部样式按书写顺序决定，后出现的覆盖先出现的。

| 分类     | 优点                                                         | 缺点                                 | 适用场景         |
| -------- | ------------------------------------------------------------ | ------------------------------------ | ---------------- |
| 行内样式 | 最高优先级，即时生效                                         | 结构与样式未分离，不利于维护         | 特定元素快速样式 |
| 内部样式 | 样式可复用，代码结构清晰                                     | 样式局限于当前页面，不利于多页面复用 | 单页面项目       |
| 外部样式 | 样式多页面复用，代码结构清晰，可触发浏览器缓存，结构与样式彻底分离 | 需要额外的文件引入                   | 多页面项目       |

- **最佳实践**：推荐使用外部样式，以实现结构与样式的最佳分离。







