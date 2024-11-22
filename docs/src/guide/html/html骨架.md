# HTML骨架

HTML文档的基本骨架是构建网页的基础，它定义了网页的结构和内容。

在HTML5标准下，一个标准的HTML文档骨架包括以下元素：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```



## 骨架解释

### `<!DOCTYPE html>`

声明文档类型，告诉浏览器使用 HTML5 标准解析文档

### `<html lang="en">`

`<html>` 标签是整个HTML文档的根标签

`lang="en"` 属性表示文档的语言是英文，可以根据实际情况设置为其他语言，如 `lang="zh-CN"` 表示中文。

### `<head>`

`<head>` 标签内包含描述文档的元数据（metadata），如字符集、页面标题、引入CSS文件等。

### `<meta charset="UTF-8">`

声明字符编码的标签，`UTF-8` 是最常用的字符编码，支持几乎所有的字符。

### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

这行代码用来设置视口（viewport），使网页在各种设备上具有良好的显示效果。

`width=device-width` 表示视口宽度与设备宽度相同

`initial-scale=1.0` 表示初始缩放比例为1

### `<title>Document</title>`

`<title>` 标签定义了网页的标题，它会显示在浏览器的标签栏上。

### `<body>`

`<body>` 标签包含网页的所有可见内容，如文本、图像、链接等。
