# Axios中的AJAX

## get

```js
axios.get("http://127.0.0.1:8000/server", {
  params: {
    a: 100,
  },
  Headers: {
    name: "Dancy",
  },
}).then(function (response) {
    console.log(response);
});;
```

## post

```js
axios.post(
    "http://127.0.0.1:8000/server",
    {
      username: "dancy",
      password: 123,
    },
    {
      params: {
        a: 100,
      },
      Headers: {
        name: "Dancy",
      },
    }
).then(function (response) {
    console.log(response);
});
```

## axios

```js
axios({
  url: "http://127.0.0.1:8000/server",
  method: "POST",
  data: {
    username: "dancy",
    password: 123,
  },
  params: {
    a: 100,
  },
  Headers: {
    name: "Dancy",
  },
}).then(function (response) {
  console.log(response);
});
```

