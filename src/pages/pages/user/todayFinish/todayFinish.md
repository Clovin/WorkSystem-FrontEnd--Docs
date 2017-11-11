# todayFinish compoent
本文是对 todayFinish component 的简介

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

用户页面的todayFinish子组件，今日完成情况页面

<h2 id="HTML">HTML</h2>

主要有两个块

- 查询结果
  
- 报修单历史记录框

  点击报修单后出现

<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

task 组件

<h2 id="data">data</h2>

- currentTask

  {String} - 当前历史记录打开的任务ID
  
- search

  {Array<Object>} - 查询结果
  
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
    
<h2 id="mounted">mounted</h2>

- 细节

  1. 获取数据
