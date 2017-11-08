# createRepair module
本文是对 createRepair module 的介绍

## 目录
- [State](#State)
  - [repairStatus](#repairStatus)
  - [userPhone](#userPhone)
  - [userPlace](#userPlace)
  - [userHouse](#userHouse)
  - [netInfo](#netInfo)
  - [netAccount](#netAccount)
  - [repairDetail](#repairDetail)
  - [repairWorkers](#repairWorkers)
- [Mutation](#Mutation)
  - [SET_REPAIR_STATUS](#SET_REPAIR_STATUS)
  - [SET_USER_PHONE](#SET_USER_PHONE)
  - [SET_USER_PLACE](#SET_USER_PLACE)
  - [SET_USER_HOUSE](#SET_USER_HOUSE)
  - [SET_NET_INF](#SET_NET_INF)
  - [SET_NET_ACCOUNT](#SET_NET_ACCOUNT)
  - [SET_REPAIR_DETAIL](#SET_REPAIR_DETAIL)
  - [SET_REPAIR_WORKERS](#SET_REPAIR_WORKERS)
  
<h2 id="State">State</h2>

<h3 id="repairStatus">repairStatus</h3>

- 简介

  报修状态
  
- 值

  {String}
  
  可选值为：'已解决', '推迟', '已上报', '未解决'
  
  后端代表数据： 1, 2, 3, 0
  
<h3 id="userPhone">userPhone</h3>

- 简介

  用户电话号码
  
- 值

  {String}
  
  可选值为：/\d{11}/
  
<h3 id="userPlace">userPlace</h3>

- 简介

  用户宿舍片区
  
- 值

  {String}
  
  可选值为：'香晖苑', '朝晖苑', '北门', '东门', '岐头', '香山别墅', '凤翔'
  
<h3 id="userHouse">userHouse</h3>

- 简介

  用户宿舍号
  
- 值

  {String}
  
  可选值为： /\d{3,4}/ 和 /(\d{1,2}|a|b|c|d)-(\d{3,4})/i

<h3 id="netInfo">netInfo</h3>

- 简介

  宽带运营商
  
- 值

  {String}
  
  可选值为：'中国电信', '中国移动', '中国联通'
  
<h3 id="netAccount">netAccount</h3>

- 简介

  用户宽带账号
  
- 值

  {String}
  
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
  
<h2 id="Mutation">Mutation</h2>

<h3 id="SET_REPAIR_STATUS">SET_REPAIR_STATUS</h3>

- 简介

  设置repairStatus值
  
<h3 id="SET_USER_PHONE">SET_USER_PHONE</h3>

- 简介

  设置userPhone值
  
<h3 id="SET_USER_PLACE">SET_USER_PLACE</h3>

- 简介

  设置userPlace
  
<h3 id="SET_USER_HOUSE">SET_USER_HOUSE</h3>

- 简介

  设置userHouse
  
<h3 id="SET_NET_INFO">SET_NET_INFO</h3>

- 简介

  设置netInfo值
  
<h3 id="SET_NET_ACCOUNT">SET_NET_ACCOUNT</h3>

- 简介

  设置netAccount值
  
<h3 id="SET_REPAIR_DETAIL">SET_REPAIR_DETAIL</h3>

- 简介

  设置repairDetail值
  
<h3 id="SET_REPAIR_WORKERS">SET_REPAIR_WORKERS</h3>

- 简介

  设置repairWorkers


