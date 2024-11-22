# Never

`never` 类型表示的是那些**永不存在**的值的类型。

`never` 类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never` 类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。

```ts
function whileTrue():never {
  // 函数无法达到执行完毕的状态
  while(true){}
}

function throwError(): never {
  // 抛出错误无法执行完毕
	throw new Error("error")
}

function toArray(val: number | string | boolean) {
	if (typeof val === "number") {
		return val.toString().split("").map(Number)
	}
	if (typeof val === "string") {
		return val.split("")
	}
	if (typeof val === "boolean") {
		return val.toString().split("")
	}

  // 代码的完整性保护（never类型只能被never类型来赋予值）
	const n: never = val
}
```

