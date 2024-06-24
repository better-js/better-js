# this



this在运行时进行绑定，并不是在编译时绑定，它的上下文取决于函数调用时的各种条件。

this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当函数被调用时，会创建一个 `执行上下文`，这个执行上下文会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息，this就是这个执行上下文中的一个属性，会在函数执行的过程中用到。



如果要判断一个运行中的函数的this绑定，就需要找到这个函数的直接调用位置，找到之后就可以顺序应用四条绑定规则来判断this的绑定对象。





## 调用位置

在理解this的绑定过程中，首先要理解**调用位置**。调用位置就是**函数在代码中被调用的位置**；通常来说寻找调用位置最重要的是要分析调用栈（就是为了到达当前执行位置所调用的所有函数），我们关心的调用位置就在**当前执行的函数的前一个调用中**。

```js
function baz() {
  // 当前调用栈是：baz
  // 当前调用位置是全局作用域
  console.log("baz");
  bar(); // <-- bar的调用位置
}
function bar() {
  // 当前调用栈是：baz -> bar
  // 当前调用位置是baz
  console.log("bar");
  foo(); // <-- foo的调用位置
}
function foo() {
  // 当前调用栈是：baz -> bar -> foo
  // 当前调用位置是bar
  console.log("foo");
}

baz(); // <-- baz的调用位置
```



## 函数调用中this绑定的四条规则

> 找到函数的调用位置并判断应该调用下面哪条规则
>
> 1. 函数是否在 new 中调用（new绑定），如果是的话，this绑定的是新创建的对象
> 2. 函数是否通过call、apply（显示绑定），如果是的话，this绑定的是指定的对象
> 3. 函数是否在某个上下文对象中调用（隐式绑定），如果是的话，this绑定的就是那个上下文对象
> 4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefiend，否则就绑定到全局对象。



### 1 默认绑定

独立函数调用

对于默认绑定来说，决定this绑定对象的并不是调用位置是否处于严格模式，而是函数体是否处于严格模式。如果函数体处于严格模式，this会被绑定到undefined，否则this会被绑定到全局对象。

```js
function foo() {
  console.log(this.a);
}
var a = 2;

// 函数调用时应用了this的默认绑定，因此this指向全局对象window
foo(); // 2
```



### 2 隐式绑定

> 调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含。

当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象。

大白话：在一个对象内部包含一个指定函数的属性，并通过这个属性间接引用函数，从而把this间接（隐式）绑定到这个对象上。

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo,
};

obj.foo(); // 2
```

对象属性引用链中只有上一层或者说最后一层在调用位置中起作用

```js
function foo() {
  console.log(this.a);
}
var obj2 = {
  a: 42,
  foo,
};

var obj1 = {
  a: 2,
  obj2,
};

obj1.obj2.foo(); // 42
```

#### 隐式丢失

一个最常见的this绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把this绑定到全局对象或者undefined上，取决于是否是严格模式。

```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo,
};

var bar = obj.foo; // 函数别名，这里引用的是函数本身
var a = "global";

bar(); // global
```



### 3 显示绑定

可以使用函数的 `call()` 和 `apply()` 方法，因为你可以直接指定this的绑定对象，因此称之为显示绑定。

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};

// 通过 call()，我们可以在调用foo时强制把它的this绑定到obj上
foo.call(obj); // 2
```

如果你传入了一个原始值（字符串类型、布尔类型或者数字类型）来当作this的绑定对象，这个原始值会被转换成它的对象形式（也就是 new String()、new Boolean()、new Number()），者通常称为“装箱”。

> 显示绑定仍然无法解决丢失绑定的问题
>
> 解决方式：硬绑定 和 API调用上下文

#### 硬绑定（强制绑定）

`Function.prototype.bind`

bind() 会返回一个硬编码的新函数，它会把你指定的参数设置为 this 的上下文并调用原始函数。

> 硬绑定会大大降低函数的灵活性，使用硬绑定之后就无法使用隐式绑定或者显示绑定来修改this的能力

```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
};

var bar = function () {
  foo.call(obj);
};
bar(); // 2
setTimeout(bar, 100); // 2
bar.call(window); // 2
```

#### API调用的“上下文”

第三方库的许多函数，以及JavaScript语言和宿主环境中许多新的内置函数，都提供了一个可选参数，通常被称为“上下文”（context），其作用和 `bind()` 一样，确保你的回调函数使用指定的this。

```js
function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: "awesome",
};
// 调用foo()时把this绑定到obj
[1, 2, 3].forEach(foo, obj); // 1 awesome 2 awesome 3 awesome
```

这些函数实际上就是通过 call() 或 apply() 实现了显示绑定。

### 4 new绑定

> 在 JavaScript 中，构造函数只是一些使用 new 操作符被调用的函数。它们并不会属于某个类，也不会实例化一个类，实际上它们甚至都不能说是一种特殊的函数类型，它们只是被new操作符调用的普通函数而已。

包含内置对象在内的所有函数都可以用 new 来调用，这种函数调用被称为构造函数调用。

使用 new 来调用函数，会自动执行下面的操作：

1. 创建（或者说构造）一个全新的对象。
2. 这个新对象会被执行 `[[Prototype]]` 连接。
3. 这个新对象会绑定到函数调用的 this。
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。

```js
function foo() {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2
```





## 优先级

如果某个调用位置可以应用多条规则该怎么办？

解决这个问题，必须给这些规则设定优先级

【new绑定】>【显示绑定】>【隐式绑定】>【默认绑定】

## 绑定例外

一定要注意，有些调用可以在无意中使用默认绑定规则。

1. 如果把 `null` 或者 `undefined` 作为 this 的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认绑定规则。
2. 有意无意地创建一个函数的“间接引用”，在这种情况下，调用这个函数会应用默认绑定规则。
3. 软绑定：如果给默认绑定指定一个全局对象和undefined以外的值，那就可以实现和硬绑定相同的效果，同时保留隐式绑定或者显示绑定修改this的能力。

:::code-group

```js [softBind]
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function (obj) {
    var fn = this;
    // 捕获所有 curried 参数
    var curried = [].slice.call(arguments, 1);
    var bound = function () {
      return fn.apply(
        !this || this === (window || global) ? obj : this,
        curried.concat.apply(curried, arguments)
      );
    };
    bound.prototype = Object.create(fn.prototype);
    return bound;
  };
}
```

```js
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function (obj) {
    var fn = this;
    // 捕获所有 curried 参数
    var curried = [].slice.call(arguments, 1);
    var bound = function () {
      return fn.apply(
        !this || this === (window || global) ? obj : this,
        curried.concat.apply(curried, arguments)
      );
    };
    bound.prototype = Object.create(fn.prototype);
    return bound;
  };
}
function foo() {
  console.log("name:" + this.name);
}

var obj = { name: "obj" },
  obj2 = { name: "obj2" },
  obj3 = { name: "obj3" };

var fooOBJ = foo.softBind(obj);
fooOBJ(); // name: obj

obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2

fooOBJ.call(obj3); // name: obj3

setTimeout(obj2.foo, 10); // name: obj
```

:::



## this词法

ES6中介绍了一种无法使用这些规则的特殊函数类型：箭头函数。

箭头函数并不是使用 function 关键字定义的，而是使用被称为“胖箭头”的操作符 `=>` 定义的。

ES6中的箭头函数并不会使用this的四条标准的绑定规则，而是根据当前词法作用域来决定this，具体来说，箭头函数会继承外层函数调用的this绑定（无论this绑定到什么）。

```js
function foo() {
  // 返回一个箭头函数
  return (a) => {
    // this继承自foo()
    console.log(this.a);
  };
}
var obj1 = {
  a: 2,
};
var obj2 = {
  a: 3,
};
var bar = foo.call(obj1);
bar.call(obj2); // 2
```

