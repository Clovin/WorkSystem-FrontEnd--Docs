# overview module
本文是对 overview module 的介绍

## 目录
- [State](#State)
  - [announce](#announce)
  - [overview](#overview)
- [Mutation](#Mutation)
  - [SET_ANNOUNCE](#SET_ANNOUNCE)
  - [SET_OVERVIEW](#SET_OVERVIEW)
- [Action](#Action)
  - [updateOverview](#updateOverview)
  
<h2 id="State">State</h2>

<h3 id="announce">announce</h3>

- 简介

  公告
  
- 值

  {String}
  
<h3 id="overview">overview</h3>

- 简介

  任务数量概览
  
- 值

  {Object}
  
  ```js
  {
    telecom:0,
    mobile:0,
    unicom:0,
    complaints:0
  }
  ```

  telecom为电信
  
  mobile为移动
  
  unicom为联通
  
  complaints为投诉
  
<h2 id="Mutation">Mutation</h2>

<h3 id="SET_ANNOUNCE">SET_ANNOUNCE</h3>

- 简介

  设置announce值
  
<h3 id="SET_OVERVIEW">SET_OVERVIEW</h3>

- 简介

  设置overview值
  
<h2 id="Action">Action</h2>

<h3 id="updateOverview">updateOverview</h3>

- 简介

  更新overview mudule的值
