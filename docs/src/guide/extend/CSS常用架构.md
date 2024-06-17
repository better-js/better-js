# CSS常用架构

## 引言

### 痛点

痛点：CSS设计之初是不需要，也没有考虑到这些问题的

1. 缺乏复用机制
   - 解决方案：模块化（组件化）的设计模式（方法论）
2. 编写效率低
   - 解决方案：预处理器、PostCSS
3. 没有局部作用域
   - 解决方案：CSS Modules

### CSS的产生

20世纪90年代，样式是写在HTML中的，样式嵌入在HTML中就导致HTML越来越大，越来越难以维护，所以就需要将样式从HTML中分离。

### CSS的定义

CSS（Cascading Style Sheets，层叠样式表）

1. 是一门样式表语言，不是编程语言（编写效率低、难复用）
2. 可层叠的样式声明（层叠规则复杂导致难预测）
3. 全局作用域（容易命名冲突、难维护）



## 常见的CSS设计模式

### OOCSS

### BEM

### SMACSS

### Functional CSS



## 预处理器和PostCSS

## CSS Modules

## CSS in JS