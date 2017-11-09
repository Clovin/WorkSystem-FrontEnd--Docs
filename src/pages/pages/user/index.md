# index compoent
本文是对 index component 的简介

## 目录
- [简介](#introduction)
- [HTML](#HTML)
- [CSS](#CSS)
- [依赖的组件](#components)
- [data](#data)
- [computed](#computed)
- [methods](#methods)
- [mounted](#mounted)

<h2 id="introduction">简介</h2>

用户页面的父组件

<h2 id="HTML">HTML</h2>

主要有四个块

- nav

  侧边导航栏
  
- main

  主要内容
  
  - 上方是一个navbar
  
  - 中间是主体内容，嵌子组件
  
  - shadow层

- loading

  loading层
  
- message

  消息提示框

<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

shadow, loading 组件

<h2 id="data">data</h2>

- isActive

  {Bool} - 侧边栏是否打开
  
- navOpen

  {String} - 当前打开的nav li的下拉选项
  
<h2 id="computed">computed</h2>

- loading 

  是否在loading状态

  绑定base module的loading
  
- isLog

  是否登录
  
  绑定base module的isLog
  
- info

  用户信息
  
  绑定base module的info
  
- isWorked

  是否签到
  
  绑定base module的isWorked
  
- message

  消息提示框的消息
  
  绑定base module的message
  
- openMsg

  是否打开消息提示框
  
  绑定base module的openMsg
  
- isShadow

  是否打开shadow层
  
  绑定base module的isShadow
  
- loading

  是否loading
  
  绑定base module的loading
  
- date

  今天日期
  
  ```text
  " 周四 11月9日"
  ```

<h2 id="methods">methods</h2>

- openNav

  - 简介
  
    打开侧边导航栏
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 打开shadow层
    2. 打开侧边导航栏
    
- cloaseAll

  - 简介
  
    关闭所有打开项（除了消息提示框）
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 关闭侧边栏打开项
    2. 关闭侧边栏
    3. 关闭子组件的其他东西
    
- iKnow

  - 简介
  
    关闭消息提示框
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 关闭消息提示框
    
- logout

  - 简介
  
    退出登录
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 执行 FETCH_LOGOUT
    
- clickNav

  - 简介
  
    toggle 侧边导航栏li的下拉菜单
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. toggle navOpen

<h2 id="mounted">mounted</h2>

- 细节

  1. 执行begin Loading
  1. 判断vuex中base module的isLog是否为true
    
     - 若true
     
       1. 执行endLoading
       
     - 若false
     
       1. 发送请求判断用户是否登录
          - 若获取到数据后已登录
       
            1. 执行endLoading
            
          - 若未登录
          
            1. 进入login page
