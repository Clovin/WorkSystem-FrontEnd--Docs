# searchOverview compoent
本文是对 searchOverview component 的简介

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

用户页面的searchOverview子组件，查询处理的报修单概览页面

<h2 id="HTML">HTML</h2>

主要有两个块

- 表单

  输入框按钮等等
  
- 查询结果
  
<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

button 组件

<h2 id="data">data</h2>

- isActive

  {Bool} - 是否显示查询结果块
  
- beginDate

  {String} - 开始日期
  
- endDate

  {String} - 结束日期
  
- overview

  {Object} - 查询结果
  
<h2 id="methods">methods</h2>

- submit

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 生成数据，并提交
