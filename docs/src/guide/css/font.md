# 字体属性

## font 复合写法

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

## font-family 字体族

::: tip 语法

属性名：`font-family`

```css {2}
.code-better {
  font-family: "宋体", "楷体";
}
```

:::

::: warning 注意

1. windows系统中，默认字体为 `微软雅黑`。

2. 使用字体的英文名字兼容性更好，如果字体名包含空格，必须使用引号包裹起来。

3. 可以设置多个字体，按照从左到右的顺序逐个查找，找到就用，没有找到就使用后面的，且通常在最后面写上`serif` （衬线字体）或 `sans-serif` （非衬线字体）

   <img src="/images/image-20240211213038848.png" alt="image-20240211213038848" style="width:80%;" />

:::

## font-size 字体大小

::: tip 语法

属性名：`font-size`

```css {2}
.code-better {
  font-size: 40px; /* 字体大小为40px */
}
```

:::

::: warning 注意

1. `font-size` 的默认单位为 `px` 像素，还可以使用 `em`（等于一个字体的大小 相对单位）。

2. Chrome浏览器支持的最小字体为 `12px`，默认的文字大小为 `16px` ，并且 `0px` 会自动消失（默认字号和最小字号支持自定义）。

   <img src="/images/image-20240211211320046.png" alt="image-20240211211612538" style="width:80%;" />

3. 通常可以给 `body` 设置 `font-size` 属性，这样 `body` 中的其他元素就都可以继承了。

4. 由于字体设计原因，文字最终呈现的大小，并不一定与 `font-size` 的值一致，可能大，也可能小。

5. 通常情况下，文字相对字体设计框，并不是垂直居中的，通常都**靠下**一些。

:::



## font-style 字体风格

::: tip 语法

属性名：`font-style`

常用值：

- `normal` ：正常（默认值）
- `italic` ：斜体（使用字体自带的斜体效果）
- `oblique` ：斜体（强制倾斜产生的斜体效果）

> 实现斜体时，更推荐使用 `italic`。

```css {2}
.code-better {
  font-style: italic;
}
```

:::

## font-weight 字体粗细

::: tip 语法

属性名：`font-weight`

常用值：

- `normal` ：正常（默认值），等同于数值 `400~500`。
- `lighter` ：细，等同于数值 `100~300`。
- `bold` ：粗体，等同于数值 `600及以上`。
- `bolder` ：很粗（多数字体不支持）

```css {2}
.code-better {
  font-weight: 700;
}
```

:::

