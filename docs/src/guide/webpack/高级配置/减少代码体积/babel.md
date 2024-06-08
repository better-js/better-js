# Babel

## 为什么

Babel为编译的每个文件都插入了辅助代码，使代码体积过大！

Babel对一些公共方法使用了非常小的辅助代码，比如_extend，默认情况下会被添加到每一个需要它的文件中。

我们可以将这些辅助代码作为一个独立模块，来避免重复引入。

## 是什么

@babel/plugin-transform-runtime: 禁用了Babel自动对每个文件的runtime注入，而是引入@babel/plugin-transform-runtime并且使所有辅助代码从这里引用

## 怎么用

### 安装依赖

```shell
npm i @babel/plugin-transform-runtime -D
```



### 配置

config/webpack.prod.js中配置插件

```js
{
  test: /\.js$/,
  // exclude: /node_modules/, // 排除node_modules代码不编译
  include: path.resolve(__dirname, '../src'),
  use: [
    {
      loader: 'thread-loader',//开启多进程
      options: {
        workers: threads //数量
      }
    },
    {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,// 开启babel编译缓存
        cacheCompression: false, // 缓存文件不要压缩
        plugins: ['@babel/plugin-transform-runtime']//减少代码体积
      }
    }
  ]
},
```


