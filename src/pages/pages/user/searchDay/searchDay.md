# searchDay compoent
本文是对 searchDay component 的简介

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

用户页面的searchDay子组件，查询某天报修单页面

<h2 id="HTML">HTML</h2>

主要有三个块

- 表单

  输入框按钮等等
  
- 查询结果
  
- 报修单历史记录框

  点击报修单后出现

<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

task, selectBox, button 组件

<h2 id="data">data</h2>

- currentTask

  {String} - 当前历史记录打开的任务ID
  
- statusOptions

  {Array<String>} - 报修状态selectBox的可选值
  
- search

  {Array<Object>} - 查询结果
  
- beginDate

  {String} - 开始日期
  
- endDate

  {String} - 结束日期
  
- type

  {String} - 当前选择的报修状态，默认为statusOptions\[0\]
  
<h2 id="computed">computed</h2>

- isOpen

  是否打开历史记录框
  
  绑定base module的isOpen
  
<h2 id="methods">methods</h2>

- watchTask

  - 简介
  
    查看该任务的历史记录
    
  - 参数
  
    - id
    
      {String} - 选择的任务id
    
  - 返回值
  
    无
    
  - 细节
  
    1. 打开历史记录框
    
- submit

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 验证数据，生成数据，并提交
