# 类

## 定义类

 `class` 体内部的代码总是在严格模式下执行

### 类声明

```js
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
```

### 类表达式

**类表达式**是定义类的另一种方法。类表达式可以命名或不命名。命名类表达式的名称是该类体的局部名称。

```js
let Person = class {
  name;
  
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
```



**函数声明**和**类声明**之间的一个重要区别在于，函数声明会提升，类声明不会。



## 属性

### 私有属性

私有数据属性必须在类的声明中声明，而且其名称需以 `#` 开头。



### 公有静态字段



### 公有实例字段



## 构造方法

在一个类中只能有一个名为“constructor”的特殊方法。一个类中出现多次构造函数 (`constructor)`方法将会抛出一个 `SyntaxError`) 错误。

在一个构造方法中可以使用`super`关键字来调用一个父类的构造方法。

如果没有显式指定构造方法，则会添加默认的 constructor 方法。

如果不指定一个构造函数 (constructor) 方法，则使用一个默认的构造函数 (constructor)。



构造函数使用 `constructor` 关键字来声明。就像在类声明外的构造函数一样，它会：

- 创建一个新的对象
- 将 `this` 绑定到这个新的对象，你可以在构造函数代码中使用 `this` 来引用它
- 执行构造函数中的代码
- 返回这个新的对象

一个类只能拥有一个名为“constructor”的特殊方法。



### 省略构造函数

如果你不需要任何特殊的初始化内容，你可以省略构造函数，默认的构造函数会被自动生成

```js
class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'
```



## 方法

### 原型方法

### 静态方法

`static` 关键字用来定义一个类的一个静态方法。

不能在类的实例上调用静态方法，而应该通过类本身调用。

### 私有方法

以 `#` 开头，只能在类自己的方法中调用





## 继承

我们使用 `extends` 关键字来声明这个类继承自另一个类。

构造函数中需要做的第一件事是使用 `super()` 调用父类的构造函数，并传递父类构造函数期望的任何参数。

如果子类有任何自己的初始化内容需要完成，它也**必须**先使用 `super()` 来调用父类的构造函数，并传递父类构造函数期望的任何参数。

