#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 清空build生成的dist目录下的内容
rm -rf ./docs/.vitepress/dist/*

# 生成静态文件 yarn docs:build 
yarn build

# 进入生成的文件夹
cd ./docs/.vitepress/dist

#git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'dancysu'
git branch -M pages

# 如果你想要发布到 https://<USERNAME>.github.io
git push -f git@github.com:dancysu/dancysu.github.io.git pages