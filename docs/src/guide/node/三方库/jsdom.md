# jsdom

> 由于 `Node.js` 中没有 `DOM` 和 `BOM`，所以也就无法直接操作 `DOM` 和 `BOM`。
>
>  `jsdom` 是一个模拟浏览器环境的库，可以在 `Node.js` 中使用 DOM API

:::code-group

```sh [安装jsdom]
npm install jsdom
```

```js [小案例]
// 运行完该脚本会在执行目录下生成html文件
const fs = require("node:fs");
const { JSDOM } = require("jsdom");

const dom = new JSDOM(`<!DOCTYPE html><div id='app'></div>`);

const document = dom.window.document;

fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1")
  .then((res) => res.json())
  .then((data) => {
    const app = document.getElementById("app");
    data.forEach((item) => {
      const img = document.createElement("img");
      img.src = item.url;
      img.style.width = "200px";
      img.style.height = "200px";
      app.appendChild(img);
    });
    fs.writeFileSync("./index.html", dom.serialize());
  });
```

:::