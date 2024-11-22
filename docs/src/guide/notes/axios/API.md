# API

`axios.request(config)`

`axios.get(url[, config])`

`axios.delete(url[, config])`

`axios.head(url[, config])`

`axios.options(url[, config])`

`axios.post(url[, data, [config]])`

`axios.put(url[, data, [config]])`

`axios.patch(url[, data, [config]])`



## axios.request()

```javascript
const requestApi = () => {
  axios.request({
    method: "GET",
    url: "http://127.0.0.1:3000/posts"
  }).then((response) => {
    console.log(response);
  });
}
```

## axios.get()

```javascript
const getApi = () => {
  axios.get("http://127.0.0.1:3000/posts").then((response) => {
    console.log(response);
  });
};
```



## axios.delete()

```javascript
const deleteApi = () => {
  axios.delete("http://127.0.0.1:3000/posts/2").then((response) => {
    console.log(response);
  });
};
```



axios.head()

axios.options()

## axios.post()

```javascript
const postApi = () => {
  axios.post(
    "http://127.0.0.1:3000/posts", 
    { 
        author: "dancy", 
        title: "学习axios" 
    }).then((response) => {
      console.log(response);
    });
};
```



## axios.put()

```javascript
const putApi = () => {
  axios.put(
    "http://127.0.0.1:3000/posts/2", 
    { 
        author: "dancy", 
        title: "学习Javascript" 
    }).then((response) => {
      console.log(response);
    });
};
```



axios.patch()