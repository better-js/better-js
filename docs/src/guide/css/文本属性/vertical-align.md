# vertical-align 垂直对齐方式

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

