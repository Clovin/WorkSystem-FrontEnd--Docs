# createWork compoent
本文是对 createWork component 的简介

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

用户页面的createWork子组件，签到/签退页面

<h2 id="HTML">HTML</h2>

主要有两个块

- 表单

  输入框按钮等等
  
- 信息确认框

  点击提交按钮后出现

<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

textInput, checkBoxGroup, checkBox, selectBox, button 组件

<h2 id="data">data</h2>

- noWorked

  {Object} - 未完成的任务数量
  
- tools

  {Array<String>} - 工具包selectBox的可选值
  
- options

  {Array<String>} - 宿舍片区selectBox的可选值
  
<h2 id="computed">computed</h2>

- isWorked

  是否签到
  
  绑定base module的isWorked
  
- isOpen

  是否打开信息确认框
  
  绑定base module的isOpen
  
- choosePlace

  选择的片区
  
  绑定表单及Vuex，可修改
  
- toolsDetail

  工具包额外说明
  
  绑定表单及Vuex，可修改

- hasTools

  是否携带工具包
  
  绑定表单及Vuex，可修改
  
- toolKit

  正常的工具集合
  
  绑定表单及Vuex，可修改
  
- nowTools

  当前片区的可选工具集合
  
<h2 id="methods">methods</h2>

- postData

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 生成数据，并提交
    2. 若成功，进入overview/todayfinish
    
- submit

  - 简介
  
    点击提交后检查是否有遗漏单子，并做相应判断
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 获取当前剩下的单子数量
       - 若正常
         1. 执行postData方法
       - 若不正常
         1. 打开信息确认框
         2. 执行 endLoading   
    
- confirm1

  - 简介
  
    确认提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 执行postData方法
    
- confirm2

  - 简介
  
    取消提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 执行 beginLoading
    2. 若为签到，进入searchtoday
    3. 若为签退，进入fucktasks
    4. 关闭信息确认框，执行endLoading
