# Date

JavaScript 的时间由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。

> GMT：格林尼治标准时间



> UTC：协调世界时间，又称世界统一时间、世界标准时间、国际协调时间。由于英文（CUT）和法文（TUC）的缩写不同，作为妥协，简称UTC。
>
> 中国时间为UTC+8



> UTS：unix时间戳
>
> 即自 1970 年 1 月 1 日（UTC）起经过的毫秒数。

| 时间            | 秒       | 毫秒        |
| --------------- | -------- | ----------- |
| 1分钟           | 60       | 60000       |
| 1小时           | 3600     | 3600000     |
| 1天             | 86400    | 86400000    |
| 1周             | 604800   | 604800000   |
| 1月（30.44天）  | 2629743  | 2629743000  |
| 1年（365.24天） | 31556736 | 31556736000 |

## 语法

```js
new Date()
// 表示实例化时刻的日期和时间（为国际标准时间格式,例如2022-11-26T13:15:58.525Z）
// T表示分隔符，Z表示的是UTC。
// UTC：世界标准时间，在标准时间上加上8小时，即东八区时间，也就是北京时间。

new Date(value)
// value表示一个Unix时间戳

new Date(dateString)
// dateString表示日期的字符串值，该字符串应该能被Date.parse()识别
// dateString一个符合 RFC2822 或 ISO 8601 日期格式的字符串（其他格式也许也支持，但结果可能与预期不符）。
// RFC2822：如 "Mon, 25 Dec 1995 13:30:00 GMT"。该方法能够理解美国大陆时区的缩写，但是为了更通用，应该使用时区偏移，如 "Mon, 25 Dec 1995 13:30:00 +0430"（格林威治的子午线向东偏移 4 小时 30 分钟）。如果没有指定时区，默认使用本地时区。
// ISO8601标准：例如，"2011-10-10"（仅日期）或 "2011-10-10T14:48:00"（日期和时间）能够作为参数被传递和解析

new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
// year：年份的整数值。0-99会被映射至1900年至1999年。
// monthIndex：表示月份的整数值，从 0（1 月）到 11（12 月）。
// date（可选）：表示一个月中的第几天的整数值，从 1 开始。默认值为 1。
// hours（可选）：表示一天中的小时数的整数值 (24 小时制)。默认值为 0（午夜）。
// minutes（可选）：表示一个完整时间（如 01:10:00）中的分钟部分的整数值。默认值为 0。
// seconds（可选）：表示一个完整时间（如 01:10:00）中的秒部分的整数值。默认值为 0。
// milliseconds（可选）：表示一个完整时间的毫秒部分的整数值。默认值为 0。
```

## 属性

```js
Date.length
// 值为7，表示该构造函数可接受的参数个数，即year、monthIndex、day、hours、minutes、seconds、milliseconds
```

## 方法

### Date.now()

> 返回自 1970-1-1 00:00:00 UTC（世界标准时间）至今所经过的毫秒数。



### Date.parse()

> `Date.parse() `方法解析一个表示某个日期的字符串，并返回从 1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的 UTC 时间）的毫秒数，如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2022-02-31），则返回值为 NaN。
>
> `Date.parse(dateString)` 等价于 `new Date(dateString).getTime()`

参数：

dateString：一个符合 RFC2822或 ISO 8601 日期格式的字符串（其他格式也许也支持，但结果可能与预期不符）。

返回值：

一个表示从 1970-1-1 00:00:00 UTC 到给定日期字符串所表示时间的毫秒数的数值。如果参数不能解析为一个有效的日期，则返回`NaN`。



```js
console.log(Date.parse("01 Jan 1970 00:00:00 GMT")); // 0
console.log(Date.parse("04 Dec 1995 00:12:00 GMT")); // 818035920000
console.log(Date.parse("Mon, 25 Dec 1995 13:30:00 +0430")); // 819882000000
```

### Date.UTC()

```js
使用：
Date.UTC(year)
Date.UTC(year, month)
Date.UTC(year, month, day)
Date.UTC(year, month, day, hour)
Date.UTC(year, month, day, hour, minute)
Date.UTC(year, month, day, hour, minute, second)
Date.UTC(year, month, day, hour, minute, second, millisecond)

console.log(new Date(Date.UTC(96, 1, 2, 3, 4, 5)).toUTCString());
// Fri, 02 Feb 1996 03:04:05 GMT
```

### new Date().valueOf()

> **`valueOf()`** 方法返回一个 `Date` 对象的原始值。

```js
const date= new Date();
console.log(date); // 2022-11-26T14:44:30.225Z
console.log(date.valueOf()); // 1669473870225
```



## Get

### new Date().getDate()

> `getDate()`方法根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从 1--31）。

```js
const date= new Date();
console.log(date); // 2022-11-26T13:22:06.657Z
console.log(date.getDate()); // 26
```

### new Date().getDay()

> **`getDay()`** 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:22:06.657Z
console.log(date.getDay()); // 6
```

### new Date().getFullYear()

> **`getFullYear()`** 方法根据本地时间返回指定日期的年份。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:22:06.657Z
console.log(date.getFullYear()); // 2022
```

### new Date().getHours()

> **`getHours()`** 方法根据本地时间，返回一个指定的日期对象的小时。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:22:06.657Z
console.log(date.getHours()); // 21
```

### new Date().getMilliseconds()

> `getMilliseconds()` 方法根据本地时间，返回一个指定的日期对象的毫秒数。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getMilliseconds()); // 27
```

### new Date().getMinutes()

> **`getMinutes()`** 方法根据本地时间，返回一个指定的日期对象的分钟数。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getMinutes()); // 57
```



### new Date().getMonth()

> `getMonth()`根据本地时间，返回一个指定的日期对象的月份，为基于 0 的值（0 表示一年中的第一月）。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getMonth()); // 10
```



### new Date().getSeconds()

> **`getSeconds()`** 方法根据本地时间，返回一个指定的日期对象的秒数。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getSeconds()); // 21
```



### new Date().getTime()

> **`getTime()`** 方法返回一个时间的格林威治时间数值。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getTime()); // 1669471041027
```



### new Date().getTimezoneOffset()

> **`getTimezoneOffset()`** 方法返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getTimezoneOffset()); // -480 即当前时区为UTC+8小时
```



### new Date().getUTCDate()

> **`getUTCDate()`** 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getUTCDate()); // 26
```



### new Date().getUTCDay()

> **`getUTCDay()`** 方法以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getUTCDay()); // 6
```



### new Date().getUTCFullYear()

> **`getUTCFullYear()`** 以世界时为标准，返回一个指定的日期对象的年份。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getUTCFullYear()); // 2022
```



### new Date().getUTCHours()

> **`getUTCHours()`** 方法以世界时为标准，返回一个指定的日期对象的小时数。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getUTCHours()); // 13
```



### new Date().getUTCMilliseconds()

> **`getUTCMilliseconds()`** 方法以世界时为标准，返回一个指定的日期对象的毫秒数。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getUTCMilliseconds()); // 27
```



### new Date().getUTCMinutes()

> **`getUTCMinutes()`** 方法以世界时为标准，返回一个指定的日期对象的分钟数。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getUTCMinutes()); // 57
```



### new Date().getUTCMonth()

> **`getUTCMonth()`** 方法以世界时为标准，返回一个指定的日期对象的月份，它是从 0 开始计数的（0 代表一年的第一个月）。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getUTCMonth()); // 10
```



### new Date().getUTCSeconds()

> **`getUTCSeconds()`** 方法以世界时为标准，返回一个指定的日期对象的秒数。

```js
const date = new Date();
console.log(date); // 2022-11-26T13:57:21.027Z
console.log(date.getUTCSeconds()); // 21
```



## Set

### new Date().setDate()

> **`setDate()`** 方法根据本地时间来指定一个日期对象的天数。

```js
```



### new Date().setFullYear()

> **`setFullYear()`** 方法根据本地时间为一个日期对象设置年份。

```js

```



### new Date().setHours()

> **`setHours()`** 方法根据本地时间为一个日期对象设置小时数，返回从 1970-01-01 00:00:00 UTC 到更新后的 `日期`对象实例所表示时间的毫秒数。

```js

```



### new Date().setMilliseconds()

> **`setMilliseconds()`** 方法会根据本地时间设置一个日期对象的豪秒数。

```js

```



### new Date().setMinutes()

> **`setMinutes()`** 方法根据本地时间为一个日期对象设置分钟数。

```js

```



### new Date().setMonth()

> **`setMonth()`** 方法根据本地时间为一个日期对象设置月份。

```js

```



### new Date().setSeconds()

> **`setSeconds()`** 方法根据本地时间设置一个日期对象的秒数。

```js

```



### new Date().setTime()

> **`setTime()`** 方法以一个表示从 1970-1-1 00:00:00 UTC 计时的毫秒数为来为 `Date` 对象设置时间。

```js

```



### new Date().setUTCDate()

> **`setUTCDate()`** 方法就是根据全球时间设置特定 date 对象的日期。

```js

```



### new Date().setUTCFullYear()

> **`setUTCFullYear()`** 方法根据世界标准时间为一个具体日期设置年份。

```js

```



### new Date().setUTCHours()

> **`setUTCHours()`**方法根据世界标准时间设置指定日期的小时，并返回从1970-1-1 00:00:00 UTC到更新的date实例所表示的时间的毫秒数。

```js

```



### new Date().setUTCMilliseconds()

> **`setUTCMilliseconds()`** 方法会根据世界时来设置指定时间的毫秒数。

```js

```



### new Date().setUTCMinutes()

> **`setUTCMinutes()`**方法会根据世界协调时（UTC）来设置指定日期的分钟数。

```js

```



### new Date().setUTCMonth()

> **`setUTCMonth()`** 方法根据通用的时间来设置一个准确的月份。

```js

```



### new Date().setUTCSeconds()

> `此 setUTCSeconds()` 方法为一个依据国际通用时间的特定日期设置秒数。

```js

```



## To

### new Date().toDateString()

> **`toDateString()`** 方法以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。

```js
const date = new Date();
console.log(date); // 2022-11-26T14:27:38.788Z
console.log(date.toDateString()); // Sat Nov 26 2022
```



### new Date().toISOString()

> toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是 UTC（协调世界时），加一个后缀“Z”标识。

```js
const date = new Date();
console.log(date); // 2022-11-26T14:27:38.788Z
console.log(date.toISOString());	// 2022-11-26T14:27:38.788Z
```



### new Date().toJSON()

> **`toJSON()`** 方法返回 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的字符串形式。

```js
const date = new Date();
console.log(date); // 2022-11-26T14:27:38.788Z
console.log(date.toJSON());	// 2022-11-26T14:27:38.788Z
```



### new Date().toLocaleDateString()

> **`toLocaleDateString()`** 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 `locales` 和 `options` 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。

```js
const date = new Date();
console.log(date); // 2022-11-26T14:27:38.788Z
console.log(date.toLocaleDateString());	// 11/26/2022	
```



### new Date().toLocaleString()

> **`toLocaleString()`** 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。新增的参数 `locales` 和 `options` 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。

```js
const date = new Date();
console.log(date); // 2022-11-26T14:27:38.788Z
console.log(date.toLocaleString());	// 11/26/2022, 10:27:38 PM
```



### new Date().toLocaleTimeString()

> **`toLocaleTimeString()`** 方法返回该日期对象时间部分的字符串，该字符串格式因不同语言而不同。新增的参数 `locales` 和 `options` 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。

```js
const date = new Date();
console.log(date); // 2022-11-26T14:27:38.788Z
console.log(date.toLocaleTimeString()); // 10:27:38 PM 
```



### new Date().toString()

> **`toString()`** 方法返回一个字符串，以本地的时区表示该 `Date` 对象。

```js
const date = new Date();
console.log(date); // 2022-11-26T14:27:38.788Z
console.log(date.toString()); // Sat Nov 26 2022 22:27:38 GMT+0800 (China Standard Time)
```



### new Date().toTimeString()

> **`toTimeString()`** 方法以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。

```js
const date = new Date();
console.log(date); // 2022-11-26T14:27:38.788Z
console.log(date.toTimeString()); // 22:27:38 GMT+0800 (China Standard Time)
```



### new Date().toUTCString()

> **`toUTCString()`** 方法把一个日期转换为一个字符串，使用 UTC 时区。

```js
const date = new Date();
console.log(date); // 2022-11-26T14:27:38.788Z
console.log(date.toUTCString()); // Sat, 26 Nov 2022 14:27:38 GMT
```

