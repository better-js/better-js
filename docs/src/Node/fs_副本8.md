```sh
npm root -g
```



```js
// process.argv 是一个包含命令行参数的数组。
// 它的第一个元素是 node 的路径
// 第二个元素是正在执行的 JavaScript 文件的路径
// 之后的元素则是任何附加的命令行参数
console.log(process.argv);

[
  '/Users/sudongxu/.nvm/versions/node/v21.2.0/bin/node',
  '/Users/sudongxu/.nvm/versions/node/v21.2.0/bin/dormant-cli',
  '--help'
]
```

