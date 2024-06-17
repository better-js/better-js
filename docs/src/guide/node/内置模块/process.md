# process 进程

`process` 是Nodejs操作和控制当前进程的API，并且是挂载到 `globalThis` 下面的全局API

```js
import process from 'node:process';
```



## process.arch

返回操作系统 CPU 架构 跟我们之前讲的os.arch 一样 `'arm'`、`'arm64'`、`'ia32'`、`'mips'`、`'mipsel'`、`'ppc'`、`'ppc64'`、`'s390'`、`'s390x'`、以及 `'x64'`

```js
log(process.arch); // arm64
```



## process.cwd()

返回当前的工作目录，等价于 `__dirname`，ESM模式下用不了 `__dirname`，可以使用 `cwd()` 代替。

```js
log(process.cwd()); // /Users/dongxu/Desktop/demo/node-demo
```



## process.argv

获取执行进程后面的参数，返回是一个数组

```js
log(process.argv);
```



## process.memoryUsage()

用于获取当前进程的内存使用情况。

该方法返回一个对象，其中包含了各种内存使用指标：

- rss（Resident Set Size，常驻集大小）：这是进程当前占用的物理内存量，不包括共享内存和页面缓存。它反映了进程实际占用的物理内存大小
- heapTotal（堆区总大小）：这是 V8 引擎为 JavaScript 对象分配的内存量。它包括了已用和未用的堆内存
- heapUsed（已用堆大小）：
- external（外部内存使用量）：这部分内存不是由 Node.js 进程直接分配的，而是由其他 C/C++ 对象或系统分配的
- arrayBuffers：用于处理二进制数据的对象类型，它使用了 JavaScript 中的 ArrayBuffer 接口。这个属性显示了当前进程中 ArrayBuffers 的数量

```js
log(process.memoryUsage());
```



## process.exit()

调用 `process.exit()` 将强制进程尽快退出，即使仍有未完全完成的异步操作挂起

下面例子 `xiaosu` 不会被打印出来，因为在2秒钟的时候就被退出了。

```js
setTimeout(() => {
  log("xiaosu");
}, 5000);

process.on('exit', () => {
  log('进程退出了');
})

setTimeout(() => {
  process.exit();
}, 2000);
```



## process.kill

与exit类似，kill用来杀死一个进程，接受一个参数进程id可以通过process.pid 获取

```js
process.kill(process.pid)
```



## process.env

用于读取操作系统所有的环境变量，也可以修改和查询环境变量。

> 修改 注意修改并不会真正影响操作系统的变量，而是只在当前线程生效，线程结束便释放。

```js
log(process.env);
```





