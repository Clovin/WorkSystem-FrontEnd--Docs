# base module
本文是对 base module 的介绍

## 目录
- [State](#State)
  - [info](#info)
  - [todayWorkers](#todayWorkers)
  - [isWorked](#isWorked)
  - [nowPlace](#nowPlace)
  - [isLog](#isLog)
  - [loading](#loading)
  - [openMsg](#openMsg)
  - [message](#message)
  - [isOpen](#isOpen)
  - [isShadow](#isShadow)
- [Mutation](#Mutation)
  - [SET_INFO](#SET_INFO)
  - [SET_WORK_DAY](#SET_WORK_DAY)
  - [SET_WORK_PLACE](#SET_WORK_PLACE)
  - [SET_TODAY_WORKERS](#SET_TODAY_WORKERS)
  - [SET_NOW_PLACE](#SET_NOW_PLACE)
  - [SET_IS_WORKED](#SET_IS_WORKED)
  - [SET_IS_LOG](#SET_IS_LOG)
  - [SET_LOADING](#SET_LOADING)
  - [SET_OPEN_MSG](#SET_OPEN_MSG)
  - [SET_MESSAGE](#SET_MESSAGE)
  - [SET_IS_OPEN](#SET_IS_OPEN)
  - [SET_IS_SHADOW](#SET_IS_SHADOW)
- [Action](#Action)
  - [openMsg](#openMsg)
  - [closeMsg](#closeMsg)
  - [openSth](#openSth)
  - [closeSth](#closeSth)
  - [openShadow](#openShadow)
  - [closeShadow](#closeShadow)
  - [beginLoading](#beginLoading)
  - [endLoading](#endLoading)
  - [logOut](#logOut)
  - [updateInfo](#updateInfo)
  
  
<h2 id="State">State</h2>

<h3 id="info">info</h3>
  
- 简介

  用户信息
  
- 值

  {Object}

  ```js
    {
        name: '',
        ID: '',
        job: '',
        workDay: '',
        workPlace: ''
    }
  ```
  - name {String} - 名字
  
  - ID {String} - 工号
  
  - job {String} - 职位
  
    可选值为: 'boss', 'intern', 'leader', 'worker'
  
  - workDay {Int} - 工作日时间
  
    可选值为 0 - 7, 0 为周一, 6为周日, 0-6按这规则依次递增表示， 7为 每天
  
  - workPlace {String} - 工作地点
  
    可选值： '香晖苑', '朝晖苑', '北门', '东门', '岐头', '香山别墅', '凤翔'

<h3 id="todayWorkers">todayWorkers</h3>

- 简介

  今日工作人员列表
  
- 值

  {Array}
  
  ```js
  [
    {
      area: '岐头',
      name: 'XXX',
      person_phone: '12345678909',
      work_number: '1547',
      work_phone: '10000000000'
    }
  ]  
  ```
  
<h3 id="isWorked">isWorked</h3>

- 简介
  
  是否已经签到
  
- 值

  {Bool} true为已经签到，false为未签到
  
<h3 id="nowPlace">nowPlace</h3>

- 简介

  当前签到片区
  
- 值

  {String} 
  
  可选值： '香晖苑', '朝晖苑', '北门', '东门', '岐头', '香山别墅', '凤翔'
  
<h3 id="isLog">isLog</h3>

- 介绍

  是否登录
  
- 值

  {Bool} true为已登录，false为未登录
  
<h3 id="loading">loading</h3>

- 简介

  当前是否在loading状态
  
- 值

  {Bool} true为在loading状态，false相反
  
<h3 id="openMsg">openMsg</h3>

- 简介

  是否打开消息提示框
  
- 值

  {Bool} true为打开，false相反
  
<h3 id="message">message</h3>

- 简介

  消息提示框的消息
  
- 值

  {String} - 消息
  
<h3 id="isOpen">isOpen</h3>

- 简介

  是否显示某些html，用于各个子页面的一些需要一个state控制是否显示某个块的情况
  
- 值

  {Bool} true 为打开，false相反
  
<h3 id="isShadow">isShadow</h3>

- 简介

  是否显示Shadow层
  
- 值

  {Bool} true 为打开，false相反
  
<h2 id="Mutation">Mutation</h2>

<h3 id="SET_INFO">SET_INFO</h3>

- 简介

  设置info值
  
<h3 id="SET_WORK_DAY">SET_WORK_DAY</h3>

- 简介

  设置info的workDay值
  
<h3 id="SET_WORK_PLACE">SET_WORK_PLACE</h3>

- 简介

  设置info的workPlace值
  
<h3 id="SET_TODAY_WORKERS">SET_TODAY_WORKERS</h3>

- 简介

  设置todayWorkers值
  
<h3 id="SET_NOW_PLACE">SET_NOW_PLACE</h3>

- 简介

  设置noePlace值
  
<h3 id="SET_IS_WORKED">SET_IS_WORKED</h3>

- 简介

  设置isWorked值
  
<h3 id="SET_IS_LOG">SET_IS_LOG</h3>

- 简介

  设置isLog值
  
<h3 id="SET_LOADING">SET_LOADING</h3>

- 简介

  设置loading值
  
<h3 id="SET_OPEN_MSG">SET_OPEN_MSG</h3>

- 简介

  设置openMsg值
  
<h3 id="SET_MESSAGE">SET_MESSAGE</h3>

- 简介

  设置message值
  
<h3 id="SET_IS_OPEN">SET_IS_OPEN</h3>

- 简介

  设置isOpen值
  
<h3 id="SET_IS_SHADOW">SET_IS_SHADOW</h3>

- 简介

  设置isShadow值
  
<h2 id="Action">Action</h2>

<h3 id="openMsg">openMsg</h3>

- 简介

  打开消息提示框
  
- 参数

  message {String} - 消息
  
- 细节

  1. 设置openMsg为true
  2. 设置message值
  
<h3 id="closeMsg">closeMsg</h3>

- 简介

  关闭消息提示框
  
- 参数

  无
  
- 细节

  1. 设置openMsg为false
  
<h3 id="openSth">openSth</h3>

- 简介

  显示某些块
  
- 参数

  无
  
- 细节

  1. 设置isShadow和isOpen为true
  
<h3 id="closeSth">closeSth</h3>

- 简介

  关闭某些块
  
- 参数

  无
  
- 细节

  1. 设置isShadow和isOpen为false
  
<h3 id="openShadow">openShadow</h3>

- 简介

  打开Shadow
  
- 参数

  无
  
- 细节

  1. 设置isShadow为true
  
<h3 id="closeShadow">closeShadow</h3>

- 简介

  关闭Shadow
  
- 参数

  无
  
- 细节

  1. 设置isShadow为false
  
<h3 id="beginLoading">beginLoading</h3>

- 简介

  开始loading

- 参数

  无
  
- 细节

  1. 设置loading为true
  
<h3 id="endLoading">endLoading</h3>

- 简介

  结束loading

- 参数

  无
  
- 细节

  1. 设置loading为false
  
<h3 id="logOut">logOut</h3>

- 简介

  退出登录
  
- 参数

  无
  
- 细节

  1. 设置isLog为false
  
<h3 id="updateInfo">updateInfo</h3>

- 简介

  更新info的工作时间和工作地点
  
- 参数

  info {Object} - 修改信息
  ```js
  {
    workDay: 0,
    workPlace: '岐头'
  }
  ```
  
- 细节

  1. 设置info的workDay和workPlace值
