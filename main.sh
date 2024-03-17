#!/usr/bin/env sh

#git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'deploy'
git branch -M main

# 如果你想要发布到 https://<USERNAME>.github.io
git push -f git@github.com:dormainty/dormainty.github.io.git main