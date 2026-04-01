#!/bin/bash
# WordPress更新后运行此脚本触发构建

cd /c/Users/JIUTIAN/Desktop/tanjincarnbon/tanjin

# 创建一个空提交来触发GitHub Actions
git commit --allow-empty -m "Trigger build: WordPress content updated"
git push

echo "✓ 构建已触发，GitHub Actions将自动部署"
