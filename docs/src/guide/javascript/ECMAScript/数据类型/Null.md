# null

Null类型同样只有一个值，即特殊值 `null`.

逻辑上讲，null值表示一个空对象指针，这也是给 `typeof` 传一个 `null` 会返回 `"object"` 的原因。

```js
let message = null;
console.log(typeof message); // "object"
```

在定义将来要保存对象值的变量时，建议使用 `null` 来初始化，不要使用其他变值。这样就可以只检查这个变量的值是不是 `null` 来判断其是否在后来被重新赋予了一个对象的引用。

```js
if (message != null) {
  // message是一个对象的引用
}
```

`undefined` 值是由 `null` 值派生而来的，因此 ECMA-262将它们定义为**表面上相等**，用 `==` 操作符比较 `null` 和 `undefined` 始终返回 `true`。

```js
console.log(null == undefined); // true
```



注意：

1. 即使 `null` 和 `undefined` 有关系，它们的用途也是完全不一样的。（永远不必显示地将变量值设置为 `undefined`，而任何时候，只要变量要保存对象，而当时又没有那个对象可保存，就要用 `null` 来填充该变量。这样可以保持 `null` 是空对象指针的语义，并进一步将其与 `undefined` 区分开来）

2.  `null` 在数值类型环境中会被当作 0 来对待，而布尔类型环境中会被当作 `false`。

   ```js
   console.log(Number(null)); // 0
   console.log(Boolean(null)); // false
   ```

   





## null 和 undefined 区别

- null表示变量没有值
- undefined表示变量已被声明，但是并未赋值。

## 使用场景

- 官方解释：把null作为尚未创建的对象
- 大白话：看将来有个变量里面存放一个对象，如果还没准备好对象，可以放个null









