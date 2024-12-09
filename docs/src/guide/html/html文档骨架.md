# HTML文档骨架

HTML文档的基本骨架是网页构建的核心，它定义了网页的整体结构和内容。

在HTML5标准下，一个完整的HTML文档骨架包括以下关键元素：

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

:::details HTML文档骨架的主要元素及其作用

| 标签名                                                       | 定义         | 说明                                                   |
| ------------------------------------------------------------ | ------------ | ------------------------------------------------------ |
| `<!DOCTYPE html>`                                            | 文档类型声明 | 声明文档类型为HTML5，告诉浏览器使用HTML5标准解析文档。 |
| `<html></html>`                                              | HTML根标签   | 包含整个HTML文档，是所有HTML元素的容器。               |
| `<head></head>`                                              | 文档头部     | 包含文档的元数据，如字符集声明、视口设置、文档标题等。 |
| `<meta charset="UTF-8">`                                     | 字符集声明   | 指定文档使用UTF-8编码，确保国际化内容正确显示。        |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | 视口设置     | 确保页面在移动设备上正确缩放和显示。                   |
| `<title></title>`                                            | 文档标题     | 定义文档的标题，显示在浏览器标签页上。                 |
| `<body></body>`                                              | 文档主体     | 包含文档的所有可见内容，如文本、图片、链接等。         |

:::

## 骨架的重要性

- **结构清晰**：HTML文档骨架为网页提供了清晰的结构，使得内容组织有序。
- **语义化**：通过使用语义化的标签，如`<html>`、`<head>`和`<body>`，增强了文档的可读性和可维护性。
- **兼容性**：遵循HTML5标准，确保网页在不同浏览器和设备上的兼容性。
- **搜索引擎优化**：合理的文档结构有助于搜索引擎更好地理解网页内容，从而提高SEO效果。
