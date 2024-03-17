# any与unknown

- any 指的是一个任意类型（不确定类型），它是官方提供的一个选择性绕过静态类型检测的作弊方式。非常不建议使用；**Any is Hell（Any 是地狱）**

- unknown 是 TypeScript 3.0 中添加的一个类型，它主要用来描述类型并不确定的变量。和any的区别就是会进行类型检测。

```tsx
let unk: unknown;
let x = 1;
let y = "2";
if (x) {
    unk = x;
} else {
    unk = y;
}

// 使用unknown后，typescript会做类型检测
unk.toFixed(2); // 报错 
// any会绕过类型检测，所以下面不会有问题提示
let an1: any;
an1.toFixed(2);

// 通过缩小类型可以通过类型检测
if (typeof unk === 'number') {
    unk.toFixed(2);
}
```

**注意：**
	1. **可以把任何类型的值赋值给unknown，但是unknown类型的值只能赋值给any或者unknown；**
	2. **unknown比any好的地方，还有一个就是它可以通过缩小类型的手段类确定类型**

