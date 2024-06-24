# $route和$router的区别

$route：当前活动路由对象

$router：所有路由对象

`$route` 为当前 `router` 跳转对象里面可以获取 `name` 、 `path` 、 `query` 、 `params` 等

`$router` 为 `VueRouter` 实例，想要导航到不同 `URL`，则使用 `$router.push` 方法