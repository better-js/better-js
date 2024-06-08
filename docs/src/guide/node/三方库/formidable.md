# formidable模块

接收表单数据

```js
//该模块不是nodejs内置模块，需要手动下载
const form = require('formidable');

//判断表单提交
if(url == "/路径" && req.method == "POST"){
    //1.实例化
    let 变量 = new form.IncomingForm();
    //2.设置文件上传路径（将本地文件上传到服务器的哪个文件夹）
    变量.uploadDir='./xxxx';
    //3.设置是否保留文件的扩展名，默认是false
    变量.keepExtensions = true;
    //4.解析
    变量.parse(req,(err,fields,files)={
        // err 错误信息
        // fields 普通字段信息（接收表单中的信息）
        // files 上传文件的详细信息
        console.log(fields);
        console.log(files);
        res.end()
    })
}

//如果是上传文件，需要在html的form标签中添加属性：enctype='multipart/form'
```

