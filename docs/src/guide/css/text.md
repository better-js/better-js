# 文本属性

## color 文本颜色

```css
div {
  color: red;
}
```

::: details color属性值

- 支持颜色名、`rgb`/`rgba`、`HEX`/`HEXA`（十六进制）、`HSL`/`HSLA`。
- 开发中常用的是：`rgb/rgba` 或 `HEX/HEXA`（十六进制）。 

:::

## letter-spacing 字母间距

属性值为像素（px），正值增大间距，负值缩小间距。 

```css
div {
  letter-spacing: 2px; /* 增加字母间距 */
}
```



## word-spacing 单词间距

单词间距通过空格识别，属性值同为像素（px）。

```css
div {
  word-spacing: 2px; /* 增加单词间距 */
}
```



## text-decoration 文本修饰

```css
p {
  text-decoration: overline green dotted; /* 上划绿色虚线 */
}
span {
  text-decoration: underline red wavy; /* 下划红色波浪线 */
}
div {
  text-decoration: line-through; /* 删除线 */
}
a {
  text-decoration: none; /* 无装饰线 */
}
```

::: details text-decoration属性值

- `none` ：无装饰线（默认值）
- `underline` ：下划线 （链接a自带下划线）
- `overline` ：上划线                
- `line-through` ：删除线

:::

## text-indent 文本缩进

```css
div {
  text-indent: 20px; /* 文本首行缩进 */
}
```

::: warning 注意

单位：可以使用 `px` 单位，也可以使用 `em` 单位。正值向右缩进，负值向左缩进，通常与方向有关。

> em 是一个相对单位，就是当前元素（font-size) 1 个文字的大小，如果当前元素没有设置大小，则会按照父元素的 1 个文字大小。

:::

## text-align 文本对齐

```css
div {
  text-align: center; /* 文本居中对齐 */
}
```

::: details text-align属性值

- `left` ：靠左（默认值）
- `right` ：靠右
- `center` ：居中
- `justify` ：两端对齐

:::

## line-height 行间距

```css
div {
  line-height: 1.5; /* 行间距基于字体大小的倍数 */
}
```

::: details line-height属性值

1. normal ：由浏览器根据文字大小决定的一个默认值。
2. 像素（px）
3. 数字：参考自身 `font-size` 的倍数（推荐）
4. 百分比：参考自身 `font-size` 的百分比

> 由于字体设计原因，文字在一行中，并不是绝对垂直居中，若一行中都是文字，不会太影响观感。

:::

::: warning 注意

- 行高过小可能导致文字重叠，最小值为0，不能为负数。

- 行高可以继承，推荐使用数值以更好地呈现文字。
- 设置了`height`的元素，高度就是`height`的值；未设置时，高度为`line-height * 行数`。

:::

## vertical-align 垂直对齐方式

用于同一行元素之间或表格单元格内文字的垂直对齐。

```css
div {
  vertical-align: middle; /* 垂直居中对齐 */
}
```

::: details vertical-align属性值

| 属性值   | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| baseline | 默认值，使元素的基线与父元素的基线对齐。                     |
| top      | 使元素的<font color=red>顶部</font>与其<font color=red>所在行的顶部</font>对齐 |
| middle   | 使元素的<font color=red>中部</font>与<font color=red>父元素的基线</font>加上父元素<font color=red>字母x的一半</font>对齐 |
| bottom   | 使元素的<font color=red>底部</font>与其<font color=red>所在行的底部</font>对齐 |

- 基线：浏览器文字类型元素排版中存在用于对齐的基线。
- 浏览器处理行内元素和行内块元素时，默认按照文字的特点去解析，基于基线对齐。
- vertical-align用于处理**行内块**和文字对齐，或者行内块和行内块对齐，或转为块元素。
- 多数用于图片和文字对齐。

:::

::: warning 解决的问题

- 文本框和表单按钮对齐问题。
- `input`和`img`对齐问题。
- `div`中的文本框贴顶问题。
- `div`不设高度由`img`标签撑开时的间隙问题。
- 使用`line-height`让`img`标签垂直居中问题。 

:::
