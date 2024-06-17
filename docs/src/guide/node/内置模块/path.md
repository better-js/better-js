# path 路径

`path` 模块提供了用于处理文件和目录的路径的实用工具。

```js
const path = require('node:path');
```



> path模块在不同的操作系统是有差异的(windows | posix)

`windows`大家肯定熟悉，`posix`可能大家没听说过

**posix（Portable Operating System Interface of UNIX）**

posix表示可移植操作系统接口，也就是定义了一套标准，遵守这套标准的操作系统有（unix,like unix,linux,macOs,windows wsl），为什么要定义这套标准，比如在Linux系统启动一个进程需要调用`fork`函数,在 `windows` 启动一个进程需要调用 `creatprocess` 函数，这样就会有问题，比如我在linux写好了代码，需要移植到 `windows` 发现函数不统一，posix标准的出现就是为了解决这个问题。

`windows` 并没有完全遵循 POSIX 标准。`windows` 在设计上采用了不同于 POSIX 的路径表示方法。

在 `windows` 系统中，路径使用反斜杠（`\`）作为路径分隔符。这与 POSIX 系统使用的正斜杠（`/`）是不同的。这是 `windows` 系统的历史原因所致，早期的 `Windows` 操作系统采用了不同的设计选择。



## path.basename()

`path.basename(path,[,ext])` 方法返回 `path` 的最后一部分

- path \<string>：路径
- ext \<string>：可选的扩展名

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'
```



在posix处理windows路径

:::code:group

```js [posix]
path.basename("C:\\demo\\index.html"); 
// C:\demo\index.html
```

```js [window]
path.basename("C:\\demo\\index.html"); 
// index.html
```

:::

当使用 Windows 文件路径时，若要在任何操作系统上获得一致的结果，则使用 `path.win32`：

```js
log(path.win32.basename("C:\\demo\\index.html")); // index.html

// windows兼容正斜杠的写法
log(path.win32.basename("/demo/index.html")); // index.html
```

当使用 POSIX 文件路径时，若要在任何操作系统上获得一致的结果，则使用 `path.posix`：

```js
// posix处理不了windows的路径
log(path.posix.basename("C:\\demo\\index.html")); // C:\demo\index.html

log(path.posix.basename("/demo/index.html")); // index.html
```



## path.dirname

这个API用来返回 `path` 的目录名，和basename正好互补。

```js
log(path.dirname("/aaaa/bbbb/cccc/index.html")); // /aaaa/bbbb/cccc
```



## path.extname

这个API 用来返回 `path` 的扩展名

```js
log(path.extname("/a/b/v/index.html.md"));
// .md
```

> 如果有多个 **.** 返回最后一个 如果没有扩展名返回空



## path.join

这个API 主要是用来拼接路径的

```js
log(path.join("/a", "/b", "/c"));
// /a/b/c
```

> 可以支持 .. ./ ../操作符

```js
log(path.join("/a", "/b", "/c", "../"));
// /a/b/
```



## path.resolve

用于将相对路径解析并且返回绝对路径

```js
// 如果传入了多个绝对路径，它将返回最后一个
log(path.presolve("/a", "/b", "/c")); // /c

// 如果只传入相对路径
log(path.resolve("./index.js")); // /Users/dongxu/Desktop/demo/node-demo/index.js

// 传入绝对路径 + 相对路径
log(path.resolve(__dirname, "./index.js")); // /Users/dongxu/Desktop/demo/node-demo/index.js
```



## path.parse

用于解析文件路径。它接受一个路径字符串作为输入，并返回一个包含路径各个组成部分的对象

```js
log(path.parse("/a/b/c/index.html"));

{
  root: "/",
  dir: "/a/b/c",
  base: "index.html",
  ext: ".html",
  name: "index",
}
```

- `root`：路径的根目录，即 `/`。
- `dir`：文件所在的目录，即 `/a/b/c`。
- `base`：文件名，即 `index.html`。
- `ext`：文件扩展名，即 `.html`。
- `name`：文件名去除扩展名，即 `index`。

## path.format

path.format 和 path.parse 正好互补，format在把对象转回字符串

```js
log(
  path.format({
    root: "/",
  	dir: "/a/b/c",
  	base: "index.html",
  	ext: ".html",
  	name: "index",
  })
);
// /a/b/c/index.html
```

## path.sep

提供特定于平台的路径片段分隔符：

- Windows 上是 `\`
- POSIX 上是 `/`

```js
log(path.posix.sep); // /
log(path.win32.sep); // \
```

