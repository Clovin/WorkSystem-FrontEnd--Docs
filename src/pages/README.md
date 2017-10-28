# WorkSystem--FrontEnd 文档
本文是对该项目的概览
## 项目简介
该项目是中山学院网维的工作系统前端，基于Vue.js实现，使用了Vue全家桶（vuex，vue-router）
##  项目结构
```$xslt
├── index.html                        # 入口html
├── build/                            # webpack配置文件
│   ├── dev-server.js                 # 本地测试服务器
│   └── ...                           # 其他构建配置文件
├── config/                           # 配置文件
├── src/                                   
│   ├── App.vue                       # main app component
│   ├── api/                               
│   │   ├── fetch_data.js             # fetch API文件
│   │   ├── index.js                  # export文件
│   │   └── post_data.js              # post API文件
│   ├── assets/                       # module用的资源
│   │   ├── css                         
│   │   └── images
│   ├── components/                   # 组件
│   ├── main.js                       # app入口文件
│   ├── nav.conf.json                 # navbar配置文件
│   ├── page/                         # page文件夹
│   │   ├── login/                    # login页面
│   │   ├── os/                       # os页面
│   │   └── user/                     # user页面
│   │       ├── addExp/               # user页面的子页面
│   │       │   └── addExp.vue  
│   │       ├── index.vue             # user页面的主组件
│   │       └── ...
│   ├── router/                       # 路由
│   │   └── index.js
│   ├── store/                        # vuex
│   │   ├── actions.js                # vuex的actions
│   │   ├── index.js                  # vuex的export文件
│   │   ├── module/                   # vuex的module
│   │   ├── mutation-types.js         # vuex各个mutation集合
│   │   └── mutations.js              # vuex的mutations
│   └── utils/                        # 工具
│       └── util.js                         
├── static/                           # 静态资源
│   └── images
└── test/                             # 测试
    ├── e2e/
    └── unit/
```
