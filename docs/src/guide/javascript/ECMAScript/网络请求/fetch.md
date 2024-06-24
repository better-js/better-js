# Fetch

[fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch)函数发送AJAX

```js
const btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
  fetch("http://127.0.0.1:3001/server?a=100", {
    method: "POST",
    headers: {
      name: "Dancy",
    },
    body: JSON.stringify({
      username: "dancy",
      password: 123,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
};
```

