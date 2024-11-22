# 文本属性

## color 文本颜色

::: tip 语法

属性名：`color`

属性值：

1. 颜色名
2. `rgb` 或 `rgba`
3. `HEX` 或 `HEXA`（十六进制）
4. `HSL` 或 `HSLA`

> 开发中常用的是：`rgb/rgba` 或 `HEX/HEXA`（十六进制）

:::

```css
div {
  color: red;
}
```



## letter-spacing 字母间距

- 字母间距（文字间距）：`letter-spacing`

- 属性值为像素（px），正值让间距增大，负值让间距缩小。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>字母间距</title>
    <style>
      div {
        /* 字母间距 */
        letter-spacing: 20px;
      }
    </style>
  </head>
  <body>
    <div>Code Better</div>
  </body>
</html>
```

## word-spacing 单词间距

- 单词间距：`word-spacing`（靠识别空格设置间距）

- 字母间距（文字间距）：`letter-spacing`

- 属性值为像素（px），正值让间距增大，负值让间距缩小。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>单词间距</title>
    <style>
      div {
        /* 单词间距 */
        word-spacing: 20px;
      }
    </style>
  </head>
  <body>
    <div>Code Better</div>
  </body>
</html>
```

## text-decoration 文本修饰

::: tip 语法

属性：`text-decoration`

属性值：

- `none` ：无装饰线（默认值）
- `underline` ：下划线 （链接a自带下划线）
- `overline` ：上划线                
- `line-through` ：删除线

:::

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>文本修饰</title>
    <style>
      p {
        /* 上划绿色虚线 */
        text-decoration: overline dotted green;
      }
      span {
        /* 下划红色波浪线 */
        text-decoration: underline wavy red;
      }
      div {
        /* 删除线 */
        text-decoration: line-through;
      }
      a {
        /* 无装饰线 */
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <p>Code Better</p>
    <span>Code Better</span>
    <div>Code Better</div>
    <a href="">Code Better</a>
  </body>
</html>
```

## text-indent 文本缩进

::: tip 语法

属性：`text-indent`

单位：可以使用 `px` 单位，也可以使用 `em` 单位。

> em 是一个相对单位，就是当前元素（font-size) 1 个文字的大小，如果当前元素没有设置大小，则会按照父元素的 1 个文字大小。

:::

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>文本缩进</title>
    <style>
      div {
        text-indent: 20px;
      }
    </style>
  </head>
  <body>
    <div>Code Better</div>
    <p>Code Better</p>
  </body>
</html>
```

::: warning 注意

有正负值 正值向右缩进 负值向左缩进 (正负值通常都是和方向有关)

:::

## text-align 文本对齐

::: tip 语法

属性：`text-align`

属性值：

- `left` ：靠左（默认值）
- `right` ：靠右
- `center` ：居中
- `justify` ：两端对齐

:::

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>文本对齐</title>
    <style>
      div {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div>Code Better</div>
  </body>
</html>
```

## line-height 行间距

::: tip 语法

属性名：`line-height`

可选值：

1. normal ：由浏览器根据文字大小决定的一个默认值。
2. 像素（px）
3. 数字：参考自身 `font-size` 的倍数（推荐）
4. 百分比：参考自身 `font-size` 的百分比

> 由于字体设计原因，文字在一行中，并不是绝对垂直居中，若一行中都是文字，不会太影响观感。

应用场景

- 调整多行文字的间距
- 单行文字的垂直居中

:::

```css
div {
	line-height: 60px;
}
```



::: warning 注意

- 行高过小，文字会重叠，且最小值是0，不能为负数。

- 行高是可以继承的，且为了能更好的呈现文字，最好写数值。
- 设置了 `height`，高度就是 `height` 的值，没有设置 `height`，高度就是 `line-height * 行数`。

:::

## vertical-align 垂直对齐方式

::: tip 语法

属性名：`vertical-align`

作用：用于指定<font color=red>同一行元素之间</font>，或<font color=red>表格单元格</font>内文字的<font color=red>垂直对齐方式</font>。

属性值：

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

```css
div {
  vertical-align: middle;
}
```



::: warning vertical-align解决的问题

1. 文本框和表单按钮无法对齐
   - vertical-align或者浮动（浮动元素顶部对齐）
2. input和img无法对齐
   - img设置vertical-align
3. div中的文本框，文本框无法贴顶问题
4. div不设高度由img标签撑开，此时img标签下面会存在额外间隙问题
   - img设置vertical-align或者转为块元素	
5. 使用line-height让img标签垂直居中问题
   - 父元素设置line-height，子元素img设置vertical-align

:::

