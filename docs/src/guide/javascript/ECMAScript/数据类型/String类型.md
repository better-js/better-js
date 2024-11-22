# String类型

通过 `单引号（''）`、`双引号（""）` 或 `反引号（``）`包裹的数据都叫字符串，单引号和双引号没有本质上的区别，需要注意的是开头和结尾的引号必须是同一种。

```js
console.log('')
```



JavaScript中字符串是不可变的



## 字符字面量

字符串数据类型包含一些字符字面量，用于表示非打印字符或有其他用途的字符。

| 字面量 | 含义                                                         |
| ------ | ------------------------------------------------------------ |
| \n     | 换行                                                         |
| \t     | 制表                                                         |
| \b     | 退格                                                         |
| \r     | 回车                                                         |
| \f     | 换页                                                         |
| \\\    | 反斜杠（\）                                                  |
| \\'    | 单引号（'）                                                  |
| \\"    | 双引号（"）                                                  |
| \\`    | 反引号（`）                                                  |
| \xnn   | 以十六进制编码nn表示的字符（其中n是十六进制数字0～F），例如：`\x41` 等于 'A' |
| \unnnn | 以十六进制编码nnnn表示的Unicode字符（其中n是十六进制数字0～F），例如：`\u03a3` 等于希腊字母 `Σ` |

这些字符字面量可以出现在字符串中的任意位置，且可以作为单个字符被解释。

```js
console.log('\u03a3'); // Σ
console.log('\u03a3'.length); // 1，转义序列表示1个字符
```



注意：

- 如果字符串中包含双字节字符，那么length属性返回的值可能不是准确的字符数。



## 字符串的特点

ECMAScript中的字符串是不可变的（immutable），意思是一旦创建，它们的值就不能变了。

要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量

```js
let lang = "Java";
lang = lang + "Script"; // 首先会分配一个足够容纳10个字符的空间，然后填充上 'Java' 和 'Script'。最后销毁原始的字符串 'Java' 和字符串 'Script'。
```



## 转换为字符串

有三种方式可以把值转换为字符串“

- `toString()`
- `String()`
- 用 `+` 加号操作符给一个值加上一个空字符串`""`，也可以将其转换为字符串

### toString()

`toString()` 方法唯一的用途就是返回当前值的字符串等价物，该方法可用于**数值**、**布尔值**、**对象**和**字符串值**（字符串值的 `toString()` 方法只是简单返回自身的一个副本）。

注意：`null` 和 `undefined` 值没有 `toString()` 方法

```js
let age = 28;
console.log(age.toString()); // "28"
```

多数情况下，`toString()` 方法不接收任何参数。不过，对数值调用这个方法时，`toString()` 可以接收一个底数参数，**默认情况下，`toString()` 返回数值的十进制字符串表示**。

```js
let num = 10;
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"

```



### String()

`String()` 转型函数，它始终会返回相应类型值的字符串。

`String()` 函数遵循如下规则：

- 如果值有 `toString()` 方法，则调用该方法（不传参数）并返回结果。
- 如果值是null，返回 `null`
- 如果值是 undefined，返回 `undefined`

```js
let value1 = 10;
let value2 = true;
let value3 = null;
let value4;
console.log(String(value1)); // "10"
console.log(String(value2)); // "true"
console.log(String(value3)); // "null"
console.log(String(value4)); // "undefined"
```

因为 `null` 和 `undefined` 没有 `toString()` 方法，所以 `String()` 方法就直接返回了这两个值的字面量文本。



## 模版字面量

ES6 新增了使用模版字面量定义字符串的能力，与使用单引号或双引号不同，模版字面量保留换行字符，可以跨行定义字符串。

```js
let myMultiLineString = "第一行\n第二行";
let myMultiLineTemplateLiteral = `第一行
第二行`;

console.log(myMultiLineString);
// 第一行
// 第二行

console.log(myMultiLineTemplateLiteral);
// 第一行
// 第二行
console.log(myMultiLineString === myMultiLineTemplateLiteral); // true
```

由于模版字面量会保持反引号内部的空格，因此在使用时要格外注意。

## 字符串插值

模版字面量最常用的一个特性就是支持字符串插值，字符串插值通过在 `${}` 中使用一个 JavaScript 表达式实现。

```js
let age = 28;
console.log(`I am ${age} years old.`); // I am 28 years old.
```

所有插入的值都会使用 `toString()` 强制转型为字符串，而且任何 JavaScript 表达式都可以用于插值。

```js
let foo = {
  toString: () => "codebetter",
};
console.log(`${foo}`); // "codebetter"
```



## 模版字面量标签函数

模版字符串也支持定义**标签函数**（tag function），而通过标签函数可以自定义插值行为。标签函数会接收被插值记号分隔后的模版和对每个表达式求值的结果。

标签函数本身是一个常规函数，通过前缀到模版字面量来应用自定义行为。

标签函数接收到的参数依次是原始字符串数组和对每个表达式求值的结果，这个函数的返回值是对模版字面量求值得到的字符串。

```js
let a = 6;
let b = 9;

function simpleTag(strings, a, b, sum) {
  console.log(strings); // [ '', '+', '=', '' ]
  console.log(a); // 6
  console.log(b); // 9
  console.log(sum); // 15
  return "codebetter";
}

let taggedresult = simpleTag`${a}+${b}=${a + b}`;
console.log(taggedresult); // codebetter
```

对于有 `n`个插值的模版字面量，传给标签函数的表达式参数的个数始终是 `n`，而传给标签函数的第一个参数所包含的字符串个数始终是 `n+1`。

```js
let a = 6;
let b = 9;

function simpleTag(strings, ...expressions) {
  return (
    strings[0] + expressions.map((e, i) => `${e}${strings[i + 1]}`).join("")
  );
}

let taggedresult = simpleTag`${a}+${b}=${a + b}`;
console.log(taggedresult); // "6+9=15"
```



## 原始字符串

使用模版字面量也可以直接获取原始的模版字面量内容，而不是被转换后的字符表示。

可以使用默认的 `String.raw` 标签函数

```js
// Unicode示例
console.log(`\u00A9`); // ©
console.log(String.raw`\u00A9`); // \u00A9

// 换行符示例
console.log(`第一行\n第二行`);
// 第一行
// 第二行
console.log(String.raw`第一行\n第二行`); // 第一行\n第二行

// 对实际的换行符来说是不行的，它们不会被转换成转义序列的形式
console.log(`第一行
第二行`);
// 第一行
// 第二行
console.log(String.raw`第一行
第二行`); 
// 第一行
// 第二行
```

另外，也可以通过标签函数的第一个参数，即 `字符串数组的.raw` 属性取得每个字符串的原始内容

```js
function printRaw(strings) {
  console.log(strings); // [ '©', '\n' ]
  for (const string of strings) {
    console.log("s", string);
  }
  for (const rawString of strings.raw) {
    console.log("r", rawString);
  }
}

printRaw`\u00A9${"and"}\n`;
```













