# noscript元素

针对早期浏览器不支持 JavaScript 的问题，需要一个页面优雅降级的处理方案，最终 `<noscript>` 元素出现。

被用于给不支持或禁用 JavaScript 的浏览器提供替代内容。

`<noscript>` 元素可以包含任何出现在 `<body>` 中的 HTML 元素，`<script>` 元素除外。

以下两种情况下，浏览器将显示包含在 `<noscript>` 中的内容：

- 浏览器不支持脚本
- 浏览器对脚本的支持被关闭

任何一个条件被满足，包含在 `<noscript>` 中的内容就会被渲染。否则，浏览器不会渲染 `<noscript>` 中的内容。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Code Better</title>
    <script src="cdebetter.js"></script>
  </head>
  <body>
    <noscript>您的浏览器不支持 Javascript！</noscript>
  </body>
</html>
```

