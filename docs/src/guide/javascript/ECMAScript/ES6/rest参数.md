# rest参数和扩展运算符

`...rest` 的出现就是为了取代 `arguments`

`...rest` 主要解决形参实参不对等的问题，用于收集剩余实参，并将其放入一个数组中

## rest参数

> `arguments` 是函数内置的方法，用于接取全部的参数，是个伪数组，不能使用数组的方法
>
> 箭头函数没有 `arguments`

```js
function fn() {
  console.log(arguments)	// Arguments(3) [10, 20, 30, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
fn(10, 20, 30);
```

## rest的使用

1. rest得到的是真数组，可以使用数组的方法，如：foreach
2. 获取剩余参数时，rest只能放到最后，作为最后一个形参，否则会报错
3. rest是个变量，其名可换，重点是...不能多也不能少

```js
function fn(...rest) {
	console.log(rest)	// (3) [10, 20, 30]
}
fn(10, 20, 30);
```











