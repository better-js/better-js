# script元素

## 使用方式

### 1.行内代码

将要嵌入的 JavaScript 代码直接放在 `<script>` 元素中，包含在 `<script>` 内的代码会被从上到下解释，代码在被计算完成之前，页面的其余内容不会被加载，也不会被显示。

```html
<script>
	function sayHi() {
		console.log("Hi!");
  }
</script>
```

在使用行内 JavaScript 代码时，代码中不能出现字符串 `</script>`，否则会导致浏览器报错。

```html
<script>
	function sayScript() {
		console.log("</script>");
  }
</script>
```

这是因为浏览器解析行内脚本的方式决定了它在看到字符串 `</script>` 时，会将其当成结束的 `</script>` 标签。想要避免这个问题，只需要使用转义字符 `\` 即可。

```html
<script>
	function sayScript() {
		console.log("<\/script>");
  }
</script>
```



### 2.外部文件

要包含外部文件中的 JavaScript，就必须使用 `src` 属性。这个属性的值是一个URL，指向包含 JavaScript 代码的文件。

```html
<script src="codebetter.js"></script>
```

与解释行内 JavaScript 一样，在解释外部 JavaScript 文件时，页面也会阻塞（阻塞时间也包含下载的时间）。

注意：

1. 使用了 `src` 属性的 `<script>` 元素不应该再在 `<script>` 和 `</script>` 标签中再包含其他 JavaScript 代码。如果两者都提供的话，浏览器会下载并执行脚本文件，从而忽略行内代码。
2. 浏览器在解析这个资源时，会向 `src` 属性指定的路径发送一个 **GET** 请求，以取得相应资源。这个初始的请求不受浏览器同源策略的限制，但返回并执行的 JavaScript 则受限制。
3. 在不使用 **defer** 和 **async** 属性的情况下，所有 `<script>` 元素会按照它们在网页中出现的次序被解释。



## 标签位置

过去，所有的 `<script>` 元素都被放在页面的 `<head>` 标签内。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Code Better</title>
    <script src="cdebetter.js"></script>
  </head>
  <body>
    <!-- 这里是页面内容 -->
  </body>
</html>
```

这种做法的主要目的是把外部的 CSS 和 JavaScript 文件都集中放到一起。不过把所有 JavaScript 文件都放在 `<head>` 里，也就意味着必须把所有 JavaScript 代码都下载、解析和解释完成后，才能开始渲染页面（页面在浏览器解析到 `<body>` 的起始标签时开始渲染）。对于需要很多 JavaScript的页面，这会导致页面渲染的明显延迟，在此期间浏览器窗口完全空白。

**为了解决这个问题，现代 Web应用程序通常将所有的 JavaScript 引用放在 `<body>` 元素中的页面内容后面。**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Code Better</title>
  </head>
  <body>
    <!-- 这里是页面内容 -->
    <script src="cdebetter.js"></script>
  </body>
</html>
```

这样一来，页面会在处理 JavaScript 代码之前完全渲染页面。用户会感觉页面加载更快了，因为浏览器显示空白页面的时间短了。



## 标签属性

将 JavaScript 插入 HTML 的主要方法就是使用 `<script>` 元素。script元素有如下8个属性：

| 属性        | 含义                                             |
| ----------- | ------------------------------------------------ |
| async       | 异步执行脚本（仅适用于外部脚本）                 |
| charset     | 规定在脚本中使用的字符编码（仅适用于外部脚本）。 |
| crossorigin | 配置相关请求的CORS（跨源资源共享）设置。         |
| defer       | 推迟执行脚本（仅适用于外部脚本）。               |
| integrity   |                                                  |
| src         | 规定外部脚本的 URL。                             |
| type        | 替代language，规定脚本的 MIME 类型。             |



### 推迟执行脚本

如果设置了 `defer` 属性，则指定脚本在解析页面的同时并行下载，并在页面解析完成后（浏览器解析到结束的 `</html>` 标签后）执行。

```html
<script src="codebetter.js" defer></script>
```



注意：

1. HTML5规范要求脚本应该按照它们的出现顺序执行，但在实际中推迟执行的脚本不一定总会按照出现顺序执行或者 `DOMContentLoaded` 事件之前执行，因此最好只包含一个这样的脚本。
2. HTML5中明确规定，`defer` 属性只对外部脚本文件才有效，因此支持HTML5的浏览器会忽略行内脚本的 `defer` 属性。
3. 对于 XHTML 文档，指定 `defer` 属性时应该写成 `defer="defer"`。



### 异步执行脚本

如果设置了 `async` 属性，脚本会在解析页面的同时并行下载，并在可用时立即执行（异步加载，同步执行）。一旦脚本完全下载，页面的解析就会中断，然后执行脚本，然后继续解析页面的其余部分。

 `<script>` 元素设置 `async` 属性后，并不能保证按照它们出现的次序执行，也就是第二个脚本可能先于第一个脚本执行。

```html
<script async src="codebetter.js"></script>
<script async src="helloworld.js"></script>
```



注意：

1. 异步脚本完全不考虑依赖，所以不应该在加载期间修改 DOM。
2. 异步脚本保证会在页面的 load 事件前执行，但可能会在 DOMContentLoaded 之前或之后。
3. 使用 `async` 也会告诉页面你不会使用 `document.write`，好的web开发实践不推荐使用这个方法。



### 动态执行脚本

除了 `<script>` 标签，还可以使用 JavaScript 的 DOM API，通过向 DOM 中动态添加 `script` 元素加载指定的脚本。

```js
let script = document.createElement("script");
script.src = "codebetter.js";
document.head.appendChild(script);
```

默认情况下，以这种方式创建的 `<script>` 元素是以异步方式加载的，相当于添加了 `async`属性。不过这样做可能会存在小问题，因为不是所有浏览器都支持 async 属性。因此，可以明确将其设置为同步加载。

``` js
let script = document.createElement("script");
script.src = "codebetter.js";
script.async = false;
document.head.appendChild(script);
```

以这种动态请求文件的方式获取的资源对浏览器预加载器是不可见的，这会严重影响它们在资源获取队列中的优先级，可能会严重影响性能。

要想让预加载器知道这些动态请求文件的存在，可以在文档头部显示声明它们：

```html
<link rel="preload" href="codebetter.js">
```



