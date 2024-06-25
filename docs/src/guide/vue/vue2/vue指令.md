# Vue指令

## 系统指令

Vue会根据不同的【指令】，针对标签实现不同的【功能】

指令：带有 v-前缀的特殊标签属性



### \{\{\}\}

{{}} 插值表达式是一种 Vue 的模版语法，**不具备解析标签的能力**。

作用：利用表达式进行插值，渲染到页面中，`{{}}` 除了可以进行**数据的渲染**和**方法的调用**外，还支持一些书写业务逻辑，复杂的业务逻辑不建议书写在内，影响代码的可读性。

表达式：是可以被求值的代码。JS引擎会将其计算出一个结果

```jsx
// 1.支持三元运算符
<div> {{ a > b ? c : d }} </div>

// 2.支持方法调用
<div> {{ 'abc'.split('').reverse().join('') }} </div>
```

注意点：

- 使用的数据必须在data存在
- 支持的是表达式，而非语句，比如：if、for...
- 不能在标签属性中使用 `{{}}` 插值



### v-text

设置元素的 `textContent`，等价于 `{{}}`，**也不具备解析标签的能力**，可以用来防治 XSS攻击。

XSS攻击：XSS攻击通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法往页面中注入恶意指令代码。

```jsx
<div v-text="str"></div>
```



### v-html

设置元素的 `innerHTML`

```jsx
<template>
  <div>
    <div v-html="link"></div>
  </div>
</template>

<script>
export default {
  name: "XiaoSu",
  components: {},
  data() {
    return {
      link: `<a href="https://codemydreams.github.io">小苏同学的博客</a>`,
    };
  },
};
</script>
```



### v-show

根据表达式真假，动态切换元素css的display属性，实现控制元素的显示隐藏

- 表达式为真时，display的属性值为block
- 表达式为假时，display的属性值为none

适用场景：频繁切换显示隐藏的场景

```jsx
<span v-show="true">展示</span>
<span v-show="false">隐藏</span>
```



### v-if

条件渲染，根据表达式真假，通过控制DOM元素的创建和移除，来实现显示隐藏

当和v-for一起使用时，v-for的优先级更高

场景：要么显示、要么隐藏，不频繁切换的场景

```jsx
<span v-if="flag"></span>
```



### v-else

辅助v-if进行判断渲染

为 v-if 或 v-else-if 添加 else 块，所以前一兄弟元素必须有 v-if 或 v-else-if

```jsx
<div v-if="type === 'A'">
  A
</div>
<div v-else>
  B
</div>
```



### v-else-if

辅助v-if进行判断渲染

表示 v-if 的 else if 块，所以前一兄弟元素必须有 v-if 或 v-else-if

```jsx
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else>
  C
</div>
```



### v-for

#### key

key是给Vue内部使用的，是一个用于判断节点需不需要进行更新的标识，**若key的值没改变则不需要更新节点，反之**。

`:key` 给列表项添加的唯一标识，便于Vue进行列表项的正确排序复用。

**作用：**

- 减少不必要的节点更新，提高更新效率（高效更新虚拟DOM）。
- 若组件需要重新加载，可以改变key的值。

**key值的选择：**

- key的值只能是字符串或数字类型
- key的值必须具有唯一性
- 推荐使用 id 作为 key（唯一），不推荐使用index作为key（会变化，不对应）

**不写key属性的隐患：**

v-for的默认行为会尝试原地修改元素（就地复用）

```jsx
<div v-for="item,index in arr" :key="arr.id">
  {{ arr.name }}
</div>
```



### v-on

缩写：@

```jsx
<button v-on:click="count++">
  内联语句
</button>

<button @click="add">
  methods中的函数名
</button>
```



| 事件修饰符 | 功能         |
| ---------- | ------------ |
| .stop      | 阻止冒泡     |
| .prevent   | 阻止默认行为 |



### v-bind

html标签中的属性默认是不能解析变量的（默认不能写vue语法），我们需要解决这个问题就需要进行**属性绑定**，属性绑定是单向的，即数据流向视图。

缩写：`:`

#### 动态设置html的标签属性

```jsx
<img v-bind:src="url"></img>
```

#### 操作 class

```jsx
// 对象：键就是类名，值是布尔值。如果值为true则有这个类，反之则无
<div class="box" :class="{box1: bool, box2: flag}"></div>
 
// 数组：数组中所有的类都会添加到标签上，本质上就是一个class列表
<div :class:"[box, box1, box2]"></div>

// 三元写法
<div :class="bool ? 'active':''}"></div>
```

#### 操作 style

```jsx
// 对象写法
<div :style="{width, height}"></div>
```



### v-model

给表单元素使用，用于让表单的value值与data中的数据进行双向数据绑定，彼此间互相影响（可以快速 获取 或 设置 表单元素内容）

**双向数据绑定：**

- 数据变化 => 视图自动更新
- 视图变化 => 数据自动更新

#### 文本框

```jsx
<template>
  <div>
    <input type="text" v-model="txtVal" />
    <p>{{ txtVal }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtVal: "",
    };
  },
};
</script>
```

#### 下拉框

```jsx
<template>
  <div>
    <select v-model="selVal">
      <option value="beijing">北京</option>
      <option value="shanghai">上海</option>
      <option value="guangzhou">广州</option>
      <option value="shenzhen">深圳</option>
    </select>
    <p>{{ selVal }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selVal: "",
    };
  },
};
</script>
```

#### 单选按钮

```jsx
<template>
  <div>
    <input type="radio" v-model="gender" value="man" />男
    <input type="radio" v-model="gender" value="woman" />女
    <p>{{ gender }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: "man",
    };
  },
};
</script>
```

#### 复选按钮

```jsx
<template>
  <div>
    <input type="checkbox" v-model="hobby" value="eat" />吃饭
    <input type="checkbox" v-model="hobby" value="sleep" />睡觉
    <input type="checkbox" v-model="hobby" value="play" />打豆豆
    <p>{{ hobby }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hobby: [],
    };
  },
};
</script>
```



### v-slot

### v-pre

可以让设置该指令的元素不解析胡子语法

```jsx
<p v-pre>这是vue的插值语法：{{val}}</p> 
```



### v-clock

隐藏数据渲染到页面之前，胡子语法在界面上的展示

```jsx
<style>
[v-cloak]{
	display: none;
}
</style>

<div v-cloak>
  {{ str }}
</div>
```



### v-once





## 自定义指令

### 全局自定义指令

书写在main.js中

```jsx
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 全局自定义指令
Vue.directive("myshow", {
  bind(el, binding) {
    el.style.display = binding.value ? "block" : "none";
  },
  update(el, binding) {
    el.style.display = binding.value ? "block" : "none";
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

`bind` 和 `update` 函数都属于钩子函数

钩子函数：不需要手动调用，在某种条件满足时，会自动触发的函数就叫做钩子函数。

### 局部自定义指令

```jsx
<template>
  <div>
    <button @click="isShow = !isShow">按钮</button>
    <h1 v-myshow="isShow">xiaosutongxue</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  directives: {
    myshow: {
      bind(el, binding) {
        // 当指令绑定到标签身上时执行这里的代码，且只执行一次，页面一刷新就绑定上去了。
        // el 绑定该指令的DOM元素
        // binding 是一个记录一些指令信息的对象，binding.value获取指令值
        console.log(el);
        console.log(binding);
        el.style.display = binding.value ? "block" : "none";
      },
      update(el, binding) {
        // 当指令值发生变化时就会执行这里的代码
        console.log(el);
        console.log(binding);
        el.style.display = binding.value ? "block" : "none";
      },
    },
  },
};
</script>
```



## 修饰符

Vue中常用的修饰符就三种，分别是事件修饰符、按键修饰符和表单修饰符。

### 事件修饰符

`.stop` 阻止事件冒泡，需要写在事件的后面

`.prevent` 阻止浏览器默认行为

`.prevent.stop` 阻止默认行为通知阻止冒泡

`.once` 阻止事件重复触发（once和stop不能一起使用，否则再次触发事件，依然会冒泡）

```jsx
<template>
  <div>
    <div class="big" @click="bc">
      <!-- 阻止事件冒泡 -->
      <div class="small" @click.stop="sc">
        <!-- 超链接存在默认行为和事件冒泡，可以同时使用.stop.prevent，这样既能阻止默认行为，又能阻止冒泡 -->
        <a href="#" @click.stop.prevent>这里是a标签</a>
      </div>
    </div>
    <!-- 阻止事件重复触发 -->
    <button @click.once="btn">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    bc() {
      console.log("点击了大盒子");
    },
    sc() {
      console.log("点击了小盒子");
    },
    btn() {
      console.log("我被点击了");
    },
  },
};
</script>

<style lang="less" scoped>
.big {
  width: 300px;
  height: 300px;
  background-color: #ff6700;
  .small {
    width: 200px;
    height: 200px;
    background-color: #ffc;
  }
}
</style>

```

### 按键修饰符

Vue允许为 `v-on` 在监听键盘事件时添加按键修饰符

`.enter`

`.tab`

`.delete` 捕获删除和退格键

`.esc`

`.space`

`.up`

`.down`

`.left`

`.right`

```vue
<template>
  <div>
    <input type="text" @keyup.enter="submit" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit() {
      console.log("点击了enter键");
    },
  },
};
</script>

<style lang="less" scoped></style>

```



### 表单修饰符

`.trim` 在获取用户输入的文本之前去除两端空格

`.number` 在获取用户输入的数字之后自动转为数字类型

`.lazy` 等到按下回车或者失焦的时候才更新页面显示的数据，节省了性能的损耗

```jsx
<input type="text" v-model.trim="textVal" />

<input type="number" v-model.number="numVal" />

<input type="text" v-model.lazy="textVal" />
```















