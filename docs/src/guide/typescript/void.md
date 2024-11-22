# Void

void代表的是空类型

void一般只用在函数没有返回值的情形下。

```tsx
// 可以把undefined类型赋值给void类型（undefined是void的子类型），但是反过来不行
let vd: void = undefined; 

// 函数没有返回值，那么函数的返回值类型就是void
function fn(): void {
  return undefined;
}
```

