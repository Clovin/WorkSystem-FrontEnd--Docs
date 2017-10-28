# API Manager
本文是对 API Manager 的总体介绍
## 目录
- [使用方法](#use)

<h2 id="use">使用方法</h2>
将需要的 API function 从 api/index.js 导入即可

代码示例：
```js
import {
  fetchIsLogin,
  postCheckWork
} from '../api'

fetchIsLogin()
  .then(data => {
    // do something
  })
  .catch(() => {
    // do something
  })
```
