# Vue组件传值

## 父传子

自定义属性 props

## 子传父

自定义事件 $emit

## 兄弟传值

EventBus（`$emit`发送 `$on`接收）

## 多层嵌套组件传值

有时候需要通讯的组件不是直接的父子组件，而是祖父和孙子，嵌套的层级比较多的情况下，需要传递的事件和属性比较多，会导致代码混乱，这个时候就需要用到Vue提供的更高阶方法：provide/inject

## 没有关系的组件传值

Vuex

## v-modal

我们都在表单中使用过 v-model 来绑定数据，其实组件之间也是可以用 v-model 进行双向绑定的

v-model 的本质就是绑定一个属性和事件

```js
// 父组件
<aa class="abc" v-model="test" ></aa> 

// aa子组件实现一：
<template>
  <div>
    <ul>
      <li>{{'里面的值：'+ msg}}</li>
      <button @click="fn2">里面改变外面</button>
    </ul>
  </div>
</template>

<script>
  export default {
    model: {    // 使用model
      prop: 'msg', //prop属性将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，
      event: 'cc' // event中的cc就是父组件上的自定义事件，用来更新父组件上的test值
    },
    props: {
      msg: ''
    },
    methods: {
      fn2 () {
        this.$emit('cc', this.msg+2)
      }
    }
  }
</script>

// aa子组件实现方法二：
<template>
 <div>
    <ul>
      <li>{{'里面的值：'+ value}}</li> // value会被赋值为v-model绑定的test的值。
      <button @click="fn2">里面改变外面</button>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      value: { // 必须要使用value
　　　　　default: '',
　　　　},
    },

    methods: {
      fn2 () {
        this.$emit('input', this.value+2) // 这儿必须用input 发送数据，发送的数据会被父级v-model=“test”接受到，再被value=test传回来。
      }
    }
  }
```

##### 
