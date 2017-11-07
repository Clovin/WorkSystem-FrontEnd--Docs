# tasks module
本文是对 tasks module 的介绍

## 目录
- [State](#State)
  - [tasks](#tasks)
  - [currentTask](#currentTask)
  - [repairDetail](#repairDetail)
  - [repairWorkers](#repairWorkers)
  - [repairStatus](#repairStatus)
  - [workers](#workers)
- [Mutation](#Mutation)
  - [SET_ISP_TASKS](#SET_ISP_TASKS)
  - [SET_ISP_CURRENT_TASK](#SET_ISP_CURRENT_TASK)
  - [SET_ISP_REPAIR_DETAIL](#SET_ISP_REPAIR_DETAIL)
  - [SET_ISP_REPAIR_WORKERS](#SET_ISP_REPAIR_WORKERS)
  - [SET_ISP_REPAIR_STATUS](#SET_ISP_REPAIR_STATUS)
  - [SET_ISP_CURRENT_TYPE](#SET_ISP_CURRENT_TYPE)
  - [SET_ISP_WORKERS](#SET_ISP_WORKERS)
- [Action](#Action)
  - [updateTasks](#updateTasks)
  - [changeCurrentTasks](#changeCurrentTasks)
  
<h2 id="State">State</h2>

<h3 id="tasks">tasks</h3>

- 简介

  任务列表
  
- 值

  {Array<Object>}
  
  ```js
  [
    {
      addTime:"2017-05-24T17:14:34.742",
      id:193,
      lastChangeTime:"2017-06-01T16:57:08.056",
      netAccount:"",
      netInfo:"中国电信",
      repairIntro:"主线端口坏了，2线不亮(误操作)",
      repairStatus:3,
      taskProperty:0,
      userHouse:"8-421",
      userPhone:"12345678909",
      userPlace:"北门",
    }
  ]
  ```
  
<h3 id="currentType">currentTask</h3>

- 简介

  当前选择的任务id
  
- 值

  {Int}

<h3 id="repairStatus">repairStatus</h3>

- 简介

  报修状态
  
- 值

  {String}
  
  可选值为：'已解决', '推迟', '已上报', '未解决'
  
<h3 id="repairDetail">repairDetail</h3>

- 简介
  
  维修简介
  
- 值

  {String} 不能超过200个字节
  
<h3 id="repairWorkers">repairWorkers</h3>

- 简介

  完成该报修的人员
  
- 值

  {Array}
  
  ```js
  ['1547 XXX']
  ```
  
<h3 id="workers">workers</h3>

- 简介

  当前可选工作人员
  
- 值

  {Array<String>}
  
  ```js
  [ '1547 xxx' ]
  ```
  
<h2 id="Mutation">Mutation</h2>

<h3 id="SET_ISP_TASKS">SET_ISP_TASKS</h3>

- 简介

  设置tasks值
  
<h3 id="SET_ISP_CURRENT_TASK">SET_ISP_CURRENT_TASK</h3>

- 简介

  设置currentTask值
  
<h3></h3>

<h3 id="SET_ISP_REPAIR_STATUS">SET_ISP_REPAIR_STATUS</h3>

- 简介

  设置repairStatus值
  
  
<h3 id="SET_ISP_REPAIR_DETAIL">SET_ISP_REPAIR_DETAIL</h3>

- 简介

  设置repairDetail值
  
<h3 id="SET_ISP_REPAIR_WORKERS">SET_ISP_REPAIR_WORKERS</h3>

- 简介

  设置repairWorkers
  
<h3 id="SET_ISP_WORKERS">SET_ISP_WORKERS</h3>

- 简介

  设置workers值
  
<h2 id="Action">Action</h2>

<h3 id="updateTasks">updateTasks</h3>

- 简介

  更新tasks列表
  
<h3 id="changeCurrentTasks">changeCurrentTasks</h3>

- 简介

  切换任务选择
