# SSH

## github

[github 生成ssh密钥](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

```shell
ssh-keygen -t ed25519 -C "codebetter@163.com"
```

[github 添加ssh密钥](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

```shell
pbcopy < ~/.ssh/id_ed25519.pub
```

## gitee

1. 我的 ==> 设置 ==> 安全设置(ssh公钥)
2. 怎样生成公钥(https://gitee.com/help/articles/4181#article-header0) ==> ssh-keygen -t ed25519 -C "192966603@qq.com"  

## ssh和https的区别

- ssh属于项目的管理者，之后提交不需要验证身份，因为只有管理者才能操作

- https谁都可以下载，每次需要输入用户名和密码

