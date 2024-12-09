# 字体属性

## font 复合写法

`font`属性允许您以复合形式一次性设置多个字体相关的属性。

```css
.code-better {
  font: font-style font-weight font-size/line-height font-family;
}
```

::: details 注意

字体连写是有顺序的，不能随意换位置，其中**font-size**和**font-family**必须同时出现。

- `font-style`, `font-variant`, `font-weight` 必须位于`font-size`之前。
- `line-height` 必须紧随`font-size`之后，两者用`/`分隔。
- `font-family` 必须最后指定，并且多个字体之间用逗号分隔。

:::

## font-family 字体族

```css {2}
.code-better {
  font-family: "Arial", sans-serif;
}
```

::: details 注意

- 在Windows系统中，默认字体为`微软雅黑`。

- 字体名称包含空格时，必须用引号包裹。
- 可以设置多个字体，浏览器会按顺序查找，直到找到可用的字体。

:::

## font-size 字体大小

```css {2}
.code-better {
  font-size: 16px;
}
```

::: details 注意

- 默认单位为`px`，也可以使用`em`等相对单位。
- Chrome浏览器支持的最小字体大小为`12px`，默认字体大小为`16px`。
- 通常为`body`元素设置`font-size`，以便其他元素继承。
- 字体实际显示大小可能因设计而异，并不完全等同于`font-size`值。
- 文字通常不是垂直居中，而是稍微靠下。

:::



## font-style 字体风格

```css {2}
.code-better {
  font-style: italic;
}
```

::: details font-style属性值

- `normal`：默认值，正常字体。
- `italic`：斜体，推荐使用。
- `oblique`：斜体，强制倾斜效果。 

:::

## font-weight 字体粗细

```css {2}
.code-better {
  font-weight: bold;
}
```

:::details font-weight属性值

- `normal` ：正常（默认值），等同于数值 `400~500`。
- `lighter` ：细，等同于数值 `100~300`。
- `bold` ：粗体，等同于数值 `600及以上`。
- `bolder` ：很粗（多数字体不支持）

:::

