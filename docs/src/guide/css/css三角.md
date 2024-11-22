# CSS三角

```css
/* 设置1个盒子 */
div {
  /* 将盒子宽高设为0 */
	width: 0;
  height: 0;
  /* 为盒子设置边框，并将颜色设置为transparent */
  border: 30px solid transparent;
  /* 单独为想要的三角形设置颜色 */
  border-bottom-color: pink;
  /* 照顾低版本浏览器的兼容性 */
  font-size: 0;  
  line-height: 0;
}
```

- 画任意三角形
  - 每个边的宽度对应内部三角形的高

