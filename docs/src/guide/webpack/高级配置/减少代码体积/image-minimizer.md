# Image Minimizer

## 为什么

开发如果项目中引用了较多图片，那么图片体积会比较大，将来请求速度比较慢。

我们可以对图片进行压缩，减少图片体积。

注意：如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。

## 是什么

image-minimizer-webpack-plugin: 用来压缩图片的插件

## 怎么用

### 安装依赖

```shell
npm i image-minimizer-webpack-plugin imagemin -D
```


还有剩下包需要下载，有两种模式：

无损压缩：对文件本身的压缩，和其它数据文件的压缩一样，是对文件的数据存储方式进行优化，采用某种算法表示重复的数据信息，文件可以完全还原，不会影响文件内容，对于数码图像而言，也就不会使图像细节有任何损失
安装命令 

```shell
npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D
```

有损压缩：对图像本身的改变，在保存图像时保留了较多的亮度信息，而将色相和色纯度的信息和周围的像素进行合并，合并的比例不同，压缩的比例也不同，由于信息量减少了，所以压缩比可以很高，图像质量也会相应的下降

安装命令 

```shell
npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D
```


备注：如果包下载失败，可以使用cnpm进行下载

### 配置

以无损压缩配置为例，修改config/webpack.prod.js

```js
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
...
optimization: {
  minimize: true,
  minimizer: [
    // css压缩
    new CssMinimizerPlugin(),
    // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了
    new TerserPlugin({
      parallel: threads // 开启多进程
    }),
    // 压缩图片
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminGenerate,
        options: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            [
              "svgo",
              {
                plugins: [
                  "preset-default",
                  "prefixIds",
                  {
                    name: "sortAttrs",
                    params: {
                      xmlnsOrder: "alphabetical",
                    },
                  },
                ],
              },
            ],
          ],
        },
      },
    }),
  ]
},
```



### 测试

执行npm run build，对比dist/images下图片大小。
