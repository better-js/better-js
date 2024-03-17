# 组件

## 全局组件

```vue
<template>
  <div>
    <!-- 3.调用组件 -->
    <globalComponent />
    <global-component />
  </div>
</template>
<!-- 1.定义模版 -->
<template id="global">
  <div>我是全局组件</div>
</template>
<script>
import Vue from "vue";
// 2.注册组件
Vue.component("globalComponent", {
  template: "#global",
});
export default {
  data() {
    return {};
  }
};
</script>
```



## 局部组件



```vue
<template>
  <div>
    <!-- 3.调用组件 -->
    <localComponent title="标题" />
    <local-component />
  </div>
</template>
<!-- 1.定义模版 -->
<template id="local">
  <div>{{ title }}</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  // 2.注册组件
  components: {
    localComponent: {
      template: "#local",
      // props:["title"]
      
      props:{
      	title:{
      default:"默认值",
      type:String
    		}
    	}
    },
  },
};
</script>
```



## 动态组件

动态组件其实可以认为是组件的占位，在使用组件的时候，不直接使用组件名的形式而是使用一个内置的标签

`:is` 的值是一个变量，这个变量是哪个组件名，该元素所占的位置就加载并渲染哪个组件

```vue
<div id="app">
  <component :is="变量"></component>
</div>
```



## 组件传值

组件之间是不能通讯的（默认数据是不能互相使用的）

### 父传子

```vue
<template>
  <div>
    <h1>我是父组件</h1>
    <son-comp :father="father"></son-comp>
  </div>
</template>

<script>
import sonComp from "./sonComp.vue";
export default {
  data() {
    return {
      father: "父组件data",
    };
  },
  components: {
    sonComp,
  },
};
</script>
```

```vue
<template>
  <div>
    <h1>我是子组件</h1>
    <h2>我是子组件，我在使用{{ father }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    father: {
      default: "",
      type: String,
    },
  },
};
</script>
```



### 子传父

在子组件中通过`this.$emit('自定义事件名',参数)` 来触发自定义事件，从而执行父组件的函数

> 什么时候会用到子传父？？
>
> 修改父组件数据的时候

```vue
<template>
  <div>
    <h1>我是父组件</h1>
    <h2>我接收了{{ sonData }}</h2>
    <son-comp @father="fn"></son-comp>
  </div>
</template>

<script>
import sonComp from "./sonComp.vue";
export default {
  data() {
    return {
      sonData: "",
    };
  },
  components: {
    sonComp,
  },
  methods: {
    fn(value) {
      console.log("子组件data", value);
      this.sonData = value;
    },
  },
};
</script>
```

```vue
<template>
  <div>
    <h1>我是子组件</h1>
    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      son: "子组件的data",
    };
  },
  methods: {
    send() {
      this.$emit("father", this.son);
    },
  },
};
</script>
```



## 插槽

插槽的作用：就是可以让我们封装的组件更灵活，可以让使用组件的人去决定组件中出现的内容，通常把组件的灵活不确定的内容使用slot标签进行占位，在使用组件的时候 在组件标签中间给插槽设置内容。

### 匿名插槽

`<slot></slot>`

默认情况下，浏览器不会渲染在子组件标签内插入的内容，这个时候就需要在子组件中定义 `solt` 插槽来接收插入的内容，`slot` 插槽的位置就是后续插入内容渲染的位置。

```vue
<template>
  <div>
    <h1>我是父组件</h1>
    <son-comp>
      <h2>我是子组件匿名插槽要渲染的内容</h2>
    </son-comp>
  </div>
</template>

<script>
import sonComp from "./sonComp.vue";
export default {
  data() {
    return {};
  },
  components: {
    sonComp,
  },
};
</script>
```

```vue
<template>
  <div>
    <h1>我是子组件</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
```



### 具名插槽

`<slot name=""></slot>`

`slot` 标签添加上name属性，相当于给插槽起名字，称为具名插槽。

为子组件标签内插入的内容添加slot属性，其值为name的值，这样就可以将该内容与name属性对应的插槽绑定。

```vue
<template>
  <div>
    <h1>我是父组件</h1>
    <son-comp>
      <h2 slot="son">我是子组件具名插槽的title</h2>
      <h2>我是匿名插槽要渲染的内容</h2>
    </son-comp>
  </div>
</template>

<script>
import sonComp from "./sonComp.vue";
export default {
  data() {
    return {};
  },
  components: {
    sonComp,
  },
};
</script>
```

```vue
<template>
  <div>
    <h1>我是子组件</h1>
    <slot name="son"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
```



### 作用域插槽

`slot-scope` 属性专门收集所在标签对应slot插槽身上的属性为自己用

```vue
<template>
  <div>
    <h1>我是父组件</h1>
    <son-comp>
      <h2 slot="son" slot-scope="obj">
        我是 {{ obj.title }} 的title {{ obj.sonNum }}
      </h2>
    </son-comp>
  </div>
</template>

<script>
import sonComp from "./sonComp.vue";
export default {
  data() {
    return {};
  },
  components: {
    sonComp,
  },
};
</script>
```

```vue
<template>
  <div>
    <h1>我是子组件</h1>
    <slot name="son" :sonNum="num" title="子组件具名插槽"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 100,
    };
  },
};
</script>
```

作用域插槽的多种写法

```jsx
// 1.基本写法
<son-comp>
	<h2 slot="title" slot-scope="obj">
		我是 {{ obj.title }} 的title {{ obj.sonNum }}
	</h2>
</son-comp>

// 2.模版写法
<son-comp>
	<template slot="title" slot-scope="obj">
  	<h2>我是 {{ obj.title }} 的title {{ obj.sonNum }}</h2>
  </template>
</son-comp>

// 3.指令写法
<son-comp v-slot:son="obj">
  <h2 >我是 {{ obj.title }} 的title {{ obj.sonNum }}</h2>
</son-comp>

// 4.指令的模版写法
<son-comp>
	<template v-slot:son="obj">
		<h2 >我是 {{ obj.title }} 的title {{ obj.sonNum }}</h2>
	</template>
</son-comp>
```



