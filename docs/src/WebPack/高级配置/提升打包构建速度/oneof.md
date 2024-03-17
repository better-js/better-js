# OneOf

## 为什么

打包时每个文件都会经过所有loader处理，虽然test正则原因实际没有处理上，但是都要过一遍，是比较慢的。

## 是什么

顾名思义就是只能匹配上一个loader, 剩下的就不匹配了。

## 怎么用

修改 `webpack.dev.js` 和 `webpack.prod.js` ，如下：

```js
module.exports = {
  // 加载器
module: {
  rules: [
    {
      oneOf: [
        {
          // 匹配css结尾文件
          test: /\.css$/,
          // loader执行顺序是从右到左
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
        },
        {
          test: /\.s[ac]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.styl$/,
          use: ["style-loader", "css-loader", "stylus-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|webp|svg)$/,
          type: "asset",
          parser: {
            // 小于10kb的图片转base64
            // 优点：减少请求数量  缺点：体积会增大三分之一
            dataUrlCondition: {
              maxSize: 20 * 1024 // 20kb
            }
          },
          generator: {
            // 将图片文件输出到 static/imgs 目录中
            // 将图片文件命名 [hash:8][ext][query]
            // [hash:8]: hash值取8位
            // [ext]: 使用之前的文件扩展名
            // [query]: 添加之前的query参数
            filename: "static/imgs/[hash:8][ext][query]",
          }
        },
        {
          /**

   * 处理图标字体、媒体等资源
      "asset/resource" 相当于file-loader, 将文件转化成 Webpack 能识别的资源，其他不做处理
     type: "asset" 相当于url-loader, 将文件转化成 Webpack 能识别的资源，同时小于某个大小的资源会处理成 data URI 形式
                */
               test: /\.(ttf|woff2?|map4|map3|avi)$/,
               type: "asset/resource",
               generator: {
                 filename: "static/media/[hash:8][ext][query]",
               },
             },
             {
               test: /\.js$/,
               exclude: /node_modules/, // 排除node_modules代码不编译
               loader: "babel-loader",
             },
           ]
         }
       ]
     },
}
```

