# useState

useState 是一个 React Hook（函数），它允许我们向组件添加一个 **状态变量** ，从而控制影响组件的渲染结果。

本质：和普通JS变量不同的是，状态变量一旦发生变化，组件的视图UI也会跟着变化（**数据驱动视图**）

::: code-group

```jsx [语法]
const [count, setCount] = useState(0);
// useState是一个函数，返回值是一个数组
// 数组中的第一个参数是状态变量，第二个参数是set函数，用来修改状态变量
// useState函数的参数作为count的初始值
```

```jsx [示例]
import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  function handler() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handler}>{count}</button>
    </div>
  );
}
```
:::

## 修改状态的规则

### 状态不可变

在React中，状态被认为是只读的，我们应该始终**替换它而不是修改它**，直接修改状态不能引发视图更新。

::: code-group
```jsx [✖️]
let [count, setCount] = useState(0);
function handler() {
	// 直接修改，无法引发视图更新
  count++;
}
```
```jsx [✔️]
let [count, setCount] = useState(0);
function handler() {
	// 通过setCount函数，用传入的新值替换原来的count，重新使用新的count渲染UI
  setCount(count + 1);
}
```
:::

### 修改对象状态

对于对象类型的状态变量，应该始终传给set方法一个全新的对象来进行修改

::: code-group

```jsx [✖️]
let [form, setForm] = useState({
  name: "dancy",
});
function handler() {
	// 直接修改原对象，无法引发视图更新
  form.name = "xiaosu";
}
```

```jsx [✔️]
let [form, setForm] = useState({
  name: "dancy",
});
function handler() {
  // 调用set传入新对象用于修改
  setForm({
    ...form,
    name: "xiaosu",
  });
}
```

:::