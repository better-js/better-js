# 生命周期

从Vue创建、运行到销毁期间，总是伴随着各种各样的事件，这些事件统称为生命周期。

生命周期钩子函数就是生命周期事件的别名

**钩子函数**：不需要手动调用，在某种条件满足时，会自动触发的函数就叫做钩子函数

## 初始

初始化阶段：把data和methods初始化，挂载到对象上。

### beforeCreate

实例刚刚从内存中创建出来，此时还没有初始化 `data` 和 `methods` 属性。

### created

实例已经在内存中创建好，此时 `data` 和 `methods` 已经创建好，但还没有开始编译模版。

一般情况下在这个阶段做数据请求

|              | data      | methods   | 模版      |
| ------------ | --------- | --------- | --------- |
| beforeCreate | undefined | undefined | undefined |
| created      | finish    | finish    | undefined |



```vue
<template>
  <div>
    <h1 ref="h">{{ num }}</h1>
    <button @click="addFn">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    addFn() {
      this.num++;
    },
  },
  beforeCreate() {
    console.log("beforeCreate => data:", this.num); // undefined
    console.log("beforeCreate => methods:", this.addFn); // undefined
    console.log("beforeCreate => DOM:", this.$refs.h); // undefined
  },
  created() {
    console.log("created => data:", this.num); // 1
    console.log("created => methods:", this.addFn); // ƒ addFn() { this.num++; }
    console.log("created => DOM:", this.$refs.h); // undefined
  },
};
</script>
```



## 挂载

挂载阶段：模版准备好之后，把数据填到模版上

### beforeMount

此时已经完成了模版编译，但是还没有挂载到页面中

data的数据可以访问和修改

### mounted

此时已经将编译好的模版挂载到页面指定的容器里

|             | data   | methods | 模版      |
| ----------- | ------ | ------- | --------- |
| beforeMount | finish | finish  | undefined |
| mounted     | finish | finish  | finish    |



```vue
<template>
  <div>
    <h1 ref="h">{{ num }}</h1>
    <button @click="addFn">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    addFn() {
      this.num++;
    },
  },
  beforeMount() {
    console.log("beforeMount => data:", this.num); // 1
    console.log("beforeMount => methods:", this.addFn); // ƒ addFn() { this.num++; }
    console.log("beforeMount => DOM:", this.$refs.h); // undefined
  },
  mounted() {
    console.log("mounted => data:", this.num); // 1
    console.log("mounted => methods:", this.addFn); // ƒ addFn() { this.num++; }
    console.log("mounted => DOM:", this.$refs.h); // <h1 data-v-248f7008>1</h1>
  },
};
</script>

<style lang="less" scoped></style>
```



## 更新

更新阶段：数据已经发生了更新，只是视图还没更新。

手动触发

### beforeUpdate

状态更新之前执行此函数，此时的data中的数据是最新的，但是页面上显示的还是旧的，因为此时还没有开始重新渲染DOM节点。

### updated

实例更新完毕之后调用此函数，此时data中的状态和界面上显示的数据都已经完成了更新，界面已经被重新渲染好了

```vue
<template>
  <div>
    <h1 ref="h">{{ num }}</h1>
    <button @click="addFn">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    addFn() {
      this.num++;
    },
  },
  beforeUpdate() {
    console.log("beforeUpdate => data:", this.num); // 2
    console.log("beforeUpdate => methods:", this.addFn); // ƒ addFn() { this.num++; }
    console.log("beforeUpdate => DOM:", this.$refs.h.innerHTML); // <h1 data-v-248f7008>1</h1>
  },
  updated() {
    console.log("updated => data:", this.num); // 2
    console.log("updated => methods:", this.addFn); // ƒ addFn() { this.num++; }
    console.log("updated => DOM:", this.$refs.h.innerHTML); // <h1 data-v-248f7008>2</h1>
  },
};
</script>

<style lang="less" scoped></style>

```



## 销毁

### beforeDestroy

实例销毁之前调用，在这一步实例仍然完全可用

一般在这个阶段做一些回收和清理工作，比如：清理定时器、全局事件。

### destroyed

实例销毁后调用，调用后，Vue实例指向的所有东西会被解绑，所有的事件监听器会被移除，所有的子实例也会被销毁。

