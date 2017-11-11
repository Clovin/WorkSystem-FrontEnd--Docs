# searchToday compoent
本文是对 searchToday component 的简介

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

用户页面的searchToday子组件，查询当天需要完成的报修单页面

<h2 id="HTML">HTML</h2>

主要有三个块

- 表单

  输入框按钮等等
  
- 查询结果
  
<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

task, selectBox, button 组件

<h2 id="data">data</h2>

- choosePlace

  {String} - 当前选择区域
  
- placeOptions

  {Array<String>} - 宿舍片区selectBox的可选值
  
- search

  {Array<Object>} - 查询结果
  
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
