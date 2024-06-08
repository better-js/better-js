# font 复合写法

::: tip 语法

属性名：`font`

font: 字体风格 字体粗细 字体大小/行高 字体族科;

```css
.code-better {
  font: font-style font-weight font-size/line-height font-family;
}
```

:::

::: warning 注意

字体连写是有顺序的，不能随意换位置，其中**font-size**和**font-family**必须同时出现。

- `font-style`, `font-variant` 和 `font-weight` 必须在 `font-size` 之前
- `line-height` 必须跟在 `font-size` 后面，由 `/` 分隔，例如 `16px/3`
- `font-family` 必须最后指定

:::


