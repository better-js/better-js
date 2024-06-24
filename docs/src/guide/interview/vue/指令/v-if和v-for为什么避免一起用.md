# v-if和v-for为什么避免一起用

因为v-for具有比v-if更高的优先级，会先遍历再控制元素显示与销毁

1. 为了过滤一个列表中的项目（比如v-for = "user in users" v-if = "user.isActive"）。在这种情况下，请将users替换为一个计算属性（比如activeUsers），让其返回过滤后的列表。

2. 为了避免渲染本应该被隐藏的列表（比如v-for = "user in users" v-if = "shouldShowUsers"）。这种情况下，请将v-if移动至容器元素上（比如ul，ol）



Vue2中，v-for的优先级高于v-if的优先级，会先执行循环再判断条件，会造成严重的性能浪费

Vue3中，v-if的优先级时高于v-for的，因此v-if执行时要调用的变量可能还不存在，会导致报错。