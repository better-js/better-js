# v-model

给表单元素使用，用于让表单的value值与data中的数据进行双向数据绑定，彼此间互相影响（可以快速 获取 或 设置 表单元素内容）

**双向数据绑定：**

- 数据变化 => 视图自动更新
- 视图变化 => 数据自动更新

## 文本框

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

## 下拉框

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

## 单选按钮

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

## 复选按钮

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













