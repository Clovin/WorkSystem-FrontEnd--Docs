# newTask module
本文是对 newTask module 的介绍

## 目录
- [State](#State)
  - [taskProperty](#taskProperty)
  - [taskStatus](#taskStatus)
  - [userPhone](#userPhone)
  - [userPlace](#userPlace)
  - [userHouse](#userHouse)
  - [netInfo](#netInfo)
  - [netAccount](#netAccount)
  - [introduction](#introduction)
- [Mutation](#Mutation)
  - [SET_NT_PROPERTY](#SET_NT_PROPERTY)
  - [SET_NT_STATUS](#SET_NT_STATUS)
  - [SET_NT_USER_PHONE](#SET_NT_USER_PHONE)
  - [SET_NT_USER_PLACE](#SET_NT_USER_PLACE)
  - [SET_NT_USER_HOUSE](#SET_NT_USER_HOUSE)
  - [SET_NT_NET_INFO](#SET_NT_NET_INFO)
  - [SET_NT_NET_ACCOUNT](#SET_NT_NET_ACCOUNT)
  - [SET_NT_INTRODUCTION](#SET_NT_INTRODUCTION)
  
<h2 id="State">State</h2>

<h3 id="taskProperty">taskProperty</h3>

- 简介

  任务性质
  
- 值
  
  {String}
  
  可选值为：'普通', '新装', '工单', '投诉'

<h3 id="repairStatus">repairStatus</h3>

- 简介

  报修状态
  
- 值

  {String}
  
  可选值为：'已解决', '推迟', '已上报', '未解决'
  
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
  
<h3 id="introduction">introduction</h3>

- 简介
  
  维修简介
  
- 值

  {String} 不能超过200个字节
  
<h2 id="Mutation">Mutation</h2>

<h3 id="SET_NT_PROPERTY">SET_NT_PROPERTY</h3>

- 简介

  设置taskProperty值

<h3 id="SET_NT_STATUS">SET_NT_STATUS</h3>

- 简介

  设置taskStatus值
  
<h3 id="SET_NT_USER_PHONE">SET_NT_USER_PHONE</h3>

- 简介

  设置userPhone值
  
<h3 id="SET_NT_USER_PLACE">SET_NT_USER_PLACE</h3>

- 简介

  设置userPlace
  
<h3 id="SET_NT_USER_HOUSE">SET_NT_USER_HOUSE</h3>

- 简介

  设置userHouse
  
<h3 id="SET_NT_NET_INFO">SET_NT_NET_INFO</h3>

- 简介

  设置netInfo值
  
<h3 id="SET_NT_NET_ACCOUNT">SET_NT_NET_ACCOUNT</h3>

- 简介

  设置netAccount值
  
<h3 id="SET_NT_INTRODUCTION">SET_NT_INTRODUCTION</h3>

- 简介

  设置introduction值
