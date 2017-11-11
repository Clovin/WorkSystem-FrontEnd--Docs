# tasks compoent
本文是对 tasks component 的简介

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

用户页面的tasks子组件，任务页面

<h2 id="HTML">HTML</h2>

主要有三个块

- tag

  过滤数据

- 表单

  输入框按钮等等
  
- 任务修改框

  点击提交按钮后出现

<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

textInput, checkBox, checkBoxGroup, selectBox, task, button, dropSelecter 组件

<h2 id="data">data</h2>
  
- statusOptions

  {Array<String>} - 报修状态selectBox的可选值
  
- sortStatus

  {String} - 任务状态筛选选择
  
- sortStatusOptions

  {Array<String>} - 任务状态筛选选择dropSelecter的可选值
  
- sortProperty

  {String} - 任务性质筛选选择
  
- sortPropretyOptions

  {Array<String>} - 任务性质筛选选择dropSelecter的可选值
  
- sortShowDelay

  {String} - 推迟任务显示与否
  
- sortPropretyOptions

  {Array<String>} - 推迟任务显示与否选择dropSelecter的可选值
  
- sortDorm

  {String} - 宿舍楼筛选选择
  
<h2 id="computed">computed</h2>

- isOpen

  是否打开信息确认框
  
  绑定base module的isOpen
  
- currentTask

  当前正在操作的任务
  
  绑定vuex
  
- isWorkerd

  是否签到
  
  绑定vuex
  
- nowPlace

  当前值班区域
  
  绑定vuex
  
- tasks

  任务列表
  
  绑定vuex
  
- workers

  可选工作人员
  
  绑定vuex
  
- repairDetail

  维修说明
  
  绑定vuex和表单，可修改
  
- repairWorkers

  维修人员
  
  绑定vuex和表单，可修改
  
- repairStatus

  维修后的状态
  
  绑定vuex和表单，可修改
  
- sortDormOptions

  宿舍楼筛选dropSelecter可选项
  
  
<h2 id="methods">methods</h2>

- judgeShow

  - 简介
  
    判断是否显示该任务
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    具体看代码
    
- submit

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 检查数据，生成数据，并提交
    
- changeTask

  - 简介
  
    改变当前操作的task
    
  - 参数
  
    - id
    
      {String} - 接下来要操作的task id
    
  - 返回值
  
    无
    
  - 细节
  
    1. 打开任务修改框
