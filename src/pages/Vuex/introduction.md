# Vuex 模块
本文是对 Vuex 模块的一个简介

## 目录
- [模块结构](#structure)

<h2 id="structure">模块结构</h2>
```text
├── actions.js              # actions
├── index.js                # 入口文件
├── module                  # 模块
│   ├── base.js             # 基础模块
│   ├── createRepair.js     # 完成纸质报修页面模块
│   ├── createWork.js       # 签到/签退页面模块
│   ├── newTask.js          # 新增任务页面模块
│   ├── overview.js         # 概览页面模块
│   └── tasks.js            # 任务页面模块
├── mutation-types.js       # mutation名字的集合
└── mutations.js            # mutation
```
