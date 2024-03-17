# keep-alive

## keepAlive

keepAlive是vue中的一个内置组件，它可以在组件切换的时候保留状态，防止重复渲染DOM

`keep-alive` 做组件级别的缓存，原理是不让组件 `destroyed` 和 `created` 。

`keep-alive` 提供了两个生命周期函数 `activated` 和 `deactivated` 替代 `destroyed` 和 `created` 。

```vue
<template>
	<div>
    <keep-alive>
  		<router-view />
  	</keep-alive>
  </div>
</template>
```

## 利用路由元信息设置是否缓存

meta对象里面可以定义一些和路径相关的参数配置，可以使用$route获取meta中的isKeep的值来实现选择性保留状态

```js
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			isKeep: true
		}
	}
]
```

```jsx
// 写法一：
<template>
	<div>
    <keep-alive>
  		<router-view v-if="$route.meta.isKeep" />
  	</keep-alive>
    <router-view v-if="!$route.meta.isKeep" /> 
  </div>
</template>

// 写法二：
<template>
	<div>
    <!-- include指定谁可以缓存，数组里的值为组件内部的name属性 -->
    <keep-alive :include="['Home']">
  		<router-view />
  	</keep-alive>
  </div>
</template>

// 写法三：
<template>
	<div>
    <!-- include指定谁不可以缓存，数组里的值为组件内部的name属性 -->
    <keep-alive :exclude="['Home']">
  		<router-view />
  	</keep-alive>
  </div>
</template>
```

## activated

```jsx
activated() {
	// 组件被激活的时候执行,被切换回来的时候
}
```

## deactivated

```jsx
deactivated() {
  // 组件被取消激活的时候执行，被切换出去的时候
}
```

