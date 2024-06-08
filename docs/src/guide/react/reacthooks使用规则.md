# ReactHooks使用规则

使用规则

1. 只能在组件中或者其他自定义Hook函数中调用
2. 只能在**组件的顶层**调用，不能嵌套在 if、for、组件内部函数。

::: code-group

```jsx [❌ 组件外使用]
import { useState } from "react";
// React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function
// React钩子“useState”不能在顶层被调用。React Hooks必须在React函数组件或自定义React Hook函数中调用
let [count, setCount] = useState(0);

export default function App() {
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>卸载子组件</button>
    </>
  );
}
```
```jsx [❌ if、for、组件内部函数]
import { useState } from "react";

export default function App() {
  if (Math.random() > 0.5) {
  	// React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
  	// React钩子“useState”是有条件调用的。React Hooks必须在每个组件渲染中以完全相同的顺序被调用
    let [count, setCount] = useState(0);
  }
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>卸载子组件</button>
    </>
  );
}
```

:::
