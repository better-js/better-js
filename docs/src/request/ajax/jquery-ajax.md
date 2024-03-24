# jQuery中的AJAX

## $.get

```js
$("button").eq(0).click(function () {
  $.get(
    "http://127.0.0.1:8000/server",
    {},
    function (data) {
      console.log(data);
    },
    "json"
  );
});
```



## $.post

```js
$("button").eq(1).click(function () {
  $.post(
    "http://127.0.0.1:8000/server",
    { a: 100 },
    function (data) {
      console.log(data);
    },
    "json"
  );
});
```



## $.ajax

```js
$("button").eq(2).click(function () {
  $.ajax({
    url: "http://127.0.0.1:3001/server",
    type: "post",
    data: {
      a: 123,
    },
    dataType: "json",
    timeout: 3000,
    headers: {
      name: "Dancy",
    },
    success: function (data) {
      console.log(data);
    },
    error: function () {
      console.log("err");
    },
  });
});
```

