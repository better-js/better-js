# Number

Number类型使用 `IEEE 754` 格式表示整数和浮点值。

不同数值类型相应地也有不同的数值字面量格式：十进制字面量、八进制字面量、十六进制字面量。

- 十进制：直接写出来即可

  ```js
  let intNum = 55;
  ```

- 八进制（以8为基数）：前缀必须是 `0o`（不区分大小写），然后是相应的八进制数字（0～7）

  ```js
  let octalNum = 0o70; // 八进制的56
  ```

- 十六进制（以16为基数）：前缀是 `0x`（区分大小写），然后是十六进制数字（0～9以及A～F）。十六进制数字中字母大小写均可。

  ```js
  let hexNum1 = 0xa; // 十六进制10
  let hexNum2 = 0xA; // 十六进制10
  ```



注意：

1. 数值类型在控制台输出 **<font color="blue">蓝色</font>**。
2. **使用八进制和十六进制格式创建的数值在所有数学操作中都被视为十进制数值。**



## 浮点值

要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。

```js
let floatNum = 1.1;
```

因为存储浮点值使用的内存空间是存储整数值的两倍，所以ECMAScript总是想方设法把值转换为整数。

- 小数点后面没有数字的情况下，数值就会变成整数
- 数值本身就是整数，只不过小数点后跟着0（如1.0），也会被转换为整数

```js
let floatNum1 = 1.; // 1
let floatNum2 = 10.0; // 10
```

**对于非常大或非常小的数值，浮点值可以用科学计数法来表示。**

科学计数法用于表示一个应该乘以10的给定次幂的数值，ECMAScript中科学计数法的格式要求是一个数值（整数或浮点数）后跟一个大写或小写的字母e，再加上一个要乘的10的多少次幂。

```js
let floatNum = 2.125e7; // 31250000，以3.125作为系数，乘以10的7次幂
```

科学计数法也可以用于表示非常小的数值，默认情况下，ECMAScript会将小数点后至少包含6个零的浮点值转换为科学计数法。

```js
let floatNum = 3e-7; // 0.0000003
```

**浮点值的精确度最高可达17位小数**，但在算术计算中远不如整数精确，比如：**<font color="red">0.1 + 0.2 ≠ 0.3</font>**，而是`0.30000000000000004`。这是因为使用了 `IEEE 754` 数值，这种错误并非 ECMAScript 所独有。



## 值的范围

由于内存的限制，ECMAScript并不支持表示在这个世界上的所有数值。



| 属性                     | 值的范围                | 描述     |
| ------------------------ | ----------------------- | -------- |
| Number.MIN_VALUE         | 5e-324                  | 最小数值 |
| Number.MAX_VALUE         | 1.7976931348623157e+308 | 最大数值 |
| Number.NEGATIVE_INFINITY | -Infinity               | 负无穷大 |
| Number.POSITIVE_INFINITY | Infinity                | 正无穷大 |

如果某个计算得到的数值超过了 JavaScript 可以表示的范围，那么这个数值会被自动转换为一个特殊的 `Infinity`（无穷）值。

- 任何无法表示的负数以 `-Infinity`（负无穷大）表示。
- 任何无法表示的正数以 `Infinity`（正无穷大）表示。

如果计算返回 `Infinity` 或 `-Infinity` ，则该值将不能再进一步用于任何计算。这是因为 `Infinity` 没有可用于计算的数值表示形式。要确定一个值是不是有限大（介于 JavaScript 能表示的最小值和最大值之间），可以使用 `isFinite()` 函数。

```js
let rusult = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(rusult)); // false
```



## NaN

NaN（Not a Number），是一个特殊值，用于表示本来要返回数值的操作失败了（而不是抛出错误）。

用0除任意数值在其他语言中通常都会导致错误，从而终止代码的执行，但在 ECMAScript 中，`0`、`+0` 或 `-0` 相除会返回 `NaN`。

```js
console.log(0 / 0); // NaN
console.log(-0 / +0); // NaN
```

如果分子是非0值，分母是有符号0或无符号0，则会返回 `Infinity` 或 `-Infinity`

```js
console.log(5 / 0); // Infinity
console.log(5 / -0); // -Infinity
```



### 特性

1. 任何涉及NaN的操作始终返回NaN

   ```js
   console.log(NaN / 10); // NaN
   ```

2. NaN不等于包括NaN在内的任何值

   ```js
   console.log(NaN == NaN); // false
   ```

ECMAScript提供了 `isNaN()` 函数，该函数可以接收一个任意数据类型的参数，然后判断这个参数是否 “不是数值”。

```js
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN("10")); // false
console.log(isNaN("blue")); // true
console.log(isNaN(true)); // false
```

`isNaN()` 还可以用于测试对象。此时，首先会调用对象的 `valueOf()` 方法，然后再确定返回的数值是否可以转换为数值。如果不能，再调用 `toString()` 方法并测试其返回值。



## 数值转换

有3个函数可以将非数值转换为数值：`Number()`、`parseInt()`、`parseFloat()`。

Number()是转型函数，可以用于任何数据类型。后两个函数主要用于将字符串转换为数值。

### Number()

- 布尔值：true转换为1，false转换为0

  ```js
  console.log(Number(true)); // 1
  console.log(Number(false)); // 0
  ```

- 数值：直接返回

  ```js
  console.log(Number(10)); // 10
  ```

- null：返回0

  ```js
  console.log(Number(null)); // 0
  ```

- undefined：返回 NaN

  ```js
  console.log(Number(undefined)); // NaN
  ```

- 字符串

  - 如果字符串包含数值字符（包括数值字符前面带加、减号），则转换为一个十进制数值。

    ```js
    console.log(Number("1")); // 1
    console.log(Number("-1")); // -1
    console.log(Number("011")); // 11
    ```

  - 如果字符串包含有效的浮点值格式，则会转换为相应的浮点值（同样，忽略前面的0）

    ```js
    console.log(Number("1.1")); // 1.1
    console.log(Number("-1.1")); // -1.1
    console.log(Number("01.1")); // 1.1
    ```

  - 如果字符串包含有效的十六进制格式，则会转换为与该十六进制对应的十进制整数值

    ```js
    console.log(Number("0xA")); // 10
    ```

  - 如果是空字符串，则返回0

    ```js
    console.log(Number("")); // 0
    ```

  - 如果字符串中包含除上述情况之外的其他字符，则返回NaN

    ```js
    console.log(Number("123abc")); // NaN
    ```

- 对象：调用对象的 `valueOf()` 方法，并按照上述规则转换返回的值。如果返回结果为 NaN，则调用 `toString()` 方法，再按照转换字符串的规则转换。

### parseInt()

`parseInt()` 函数专注于字符串是否包含数值模式。

字符串最前面的空格会被忽略，从 第一个非空格字符开始转换，如果第一个字符不是数值字符、加号或减号，则立即返回 NaN（空字符串也会返回NaN）。如果第一个字符是数值字符、加号或减号，则继续依次检测每个字符，直到字符串结尾，或碰到非数值字符为止。

```js
console.log(parseInt("123abc")); // 123
console.log(parseInt("")); // NaN
console.log(parseInt("11.1")); // 11
```

`parseInt()` 也能识别不同的整数格式（十进制、八进制、十六进制）

```js
console.log(parseInt("10")); // 10，解释为十进制
console.log(parseInt("0xA")); // 10，解释为十六进制整数
```

`parseInt()` 也接收第二个参数，用于指定底数（**进制数**）。

```js
console.log(parseInt("0xAF", 16)); // 175

// 如果指定了十六进制参数，那么字符串的 "0x" 可以省掉
console.log(parseInt("AF", 16)); // 175
console.log(parseInt("AF")); // NaN
```

通过第二个参数可以极大扩展转换后获得的结果类型

```js
console.log(parseInt("10", 2)); // 2，按二进制解析
console.log(parseInt("10", 8)); // 8，按8进制解析
console.log(parseInt("10", 10)); // 10，按十进制解析
console.log(parseInt("10", 16)); // 16，按十六进制解析
```

### parseFloat()

`parseFloat()` 函数的工作方式跟 `parseInt()` 函数类似，都是从位置0开始检测每个字符。同样，它也是解析到字符串末尾或解析到一个无效的浮点数值字符为止。（第一次出现的小数点是有效的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会被忽略）

`parseFloat()` 函数始终忽略字符串开头的0，并且只解析十进制值，因此不能指定底数（**进制数**）。十六进制数值会始终返回0。

```js
console.log(parseFloat("123abc")); // 123，按整数解析
console.log(parseFloat("0xA")); // 0，十六进制始终返回0
console.log(parseFloat("11.1")); // 11.1
console.log(parseFloat("011.1")); // 11.1
console.log(parseFloat("10.1.5")); // 10.1
console.log(parseFloat("3.125e7")); // 31250000
```
