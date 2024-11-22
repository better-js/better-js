## 静态方法

Number.isFinite()
Number.isInteger()
Number.isNaN()
Number.isSafeInteger()
Number.parseFloat()
Number.parseInt()

## 静态属性

Number.EPSILON
Number.MAX_SAFE_INTEGER
Number.MAX_VALUE
Number.MIN_SAFE_INTEGER
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

## 实例方法

### Number.prototype.toExponential()

### Number.prototype.toFixed()

指定小数部分的显示位数，输出结果实际上是给定数字的字符串形式，如果指定的小数部分的显示位数多余实际位数就用0补齐

```js
let a = 42.59;

a.toFixed(0); // '43'
a.toFixed(1); // '43.6'
a.toFixed(2); // '43.59'
a.toFixed(3); // '43.590'
a.toFixed(4); // '43.5900'
```



### Number.prototype.toLocaleString()

### Number.prototype.toPrecision()

指定有效位数的显示位数

```js
let a = 42.59;

a.toPrecision(1); // '4e+1'
a.toPrecision(2); // '43'
a.toPrecision(3); // '42.6'
a.toPrecision(4); // '43.59'
```



### Number.prototype.toString()

### Number.prototype.valueOf()
