# 拖拽API

::: code-group

```html [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>课程表</h1>
    <div class="container">
      <div class="left" data-drop="move">
        <div draggable="true" data-effect="copy" class="item color1">语文</div>
        <div draggable="true" data-effect="copy" class="item color2">数学</div>
        <div draggable="true" data-effect="copy" class="item color3">英语</div>
        <div draggable="true" data-effect="copy" class="item color4">音乐</div>
        <div draggable="true" data-effect="copy" class="item color5">政治</div>
        <div draggable="true" data-effect="copy" class="item color6">历史</div>
        <div draggable="true" data-effect="copy" class="item color7">体育</div>
      </div>
      <div class="right">
        <table>
          <!-- 列的分组 -->
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <td></td>
            <th>星期一</th>
            <th>星期二</th>
            <th>星期三</th>
            <th>星期四</th>
            <th>星期五</th>
            <th>星期六</th>
            <th>星期日</th>
          </thead>
          <tbody>
            <tr>
              <th rowspan="4" class="span">上午</th>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
            </tr>
            <tr>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
            </tr>
            <tr>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
            </tr>
            <tr>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th rowspan="4" class="span">下午</th>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
            </tr>
            <tr>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
            </tr>
            <tr>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
            </tr>
            <tr>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
              <td data-drop="copy"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

```js [index.js]
const container = document.querySelector(".container");

let source;
container.ondragstart = (e) => {
  e.dataTransfer.effectAllowed = e.target.dataset.effect;
  source = e.target;
};

container.ondragover = (e) => {
  e.preventDefault();
};

function clearDropStyle() {
  const dropNodes = document.querySelectorAll(".drop-over");
  dropNodes.forEach((node) => {
    node.classList.remove("drop-over");
  });
}

function getDropNode(node) {
  console.log(node);
  while (node) {
    if (node?.dataset?.drop) {
      return node;
    }
    node = node.parentNode;
  }
}

container.ondragenter = (e) => {
  clearDropStyle();
  const dropNode = getDropNode(e.target);
  if (!dropNode) {
    return;
  }
  if (e.dataTransfer.effectAllowed === dropNode.dataset.drop) {
    dropNode.classList.add("drop-over");
  }
};

container.ondrop = (e) => {
  clearDropStyle();
  const dropNode = getDropNode(e.target);
  if (!dropNode) {
    return;
  }
  if (e.dataTransfer.effectAllowed !== dropNode.dataset.drop) {
    return;
  }
  if (dropNode.dataset.drop === "copy") {
    dropNode.innerHTML = "";
    const cloned = source.cloneNode(true);
    cloned.dataset.effect = "move";
    dropNode.appendChild(cloned);
  } else {
    source.remove();
  }
};
```

```css [style.css]
.container {
  display: flex;
}
.left {
  width: 100px;
  height: 478px;
  background-color: #f0f0f0;
  box-sizing: border-box;
}
.item {
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  cursor: pointer;
  margin: 10px;
}
.color1 {
  background-color: rgb(238, 112, 133);
}
.color2 {
  background-color: rgb(57, 230, 57);
}
.color3 {
  background-color: rgb(226, 39, 157);
}
.color4 {
  background-color: rgb(240, 107, 240);
}
.color5 {
  background-color: rgb(236, 182, 80);
}
.color6 {
  background-color: rgb(190, 86, 86);
}
.color7 {
  background-color: rgb(192, 255, 219);
}

.right {
  height: 478px;
  background-color: #f0f0f0;
  margin-left: 10px;
}

.drop-over {
  background-color: #ccc;
}

table {
  border-collapse: collapse;
}
tr,
th,
td {
  border: 1px solid #ccc;
  height: 50px;
  width: 100px;
}
```

:::