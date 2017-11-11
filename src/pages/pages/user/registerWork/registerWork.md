# createRepair compoent
本文是对 createRepair component 的简介

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

用户页面的createWork子组件，申请蹭班页面

<h2 id="HTML">HTML</h2>

有四种情况

- 未申请的情况

- 申请通过的情况

- 申请未通过的情况

- 申请未处理的情况

<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

selectBox, button 组件

<h2 id="data">data</h2>

- registerStatus

  {Int} - 申请报修的情况
  
  0 为 未申请，1 为 申请通过，2 为 申请未通过，3 为 申请未处理
  
- passPlace

  {String} - 通过的地点
  
- whyReject

  {String} - 拒绝理由
  
- registerDay

  {String} - 申请日期
  
<h2 id="computed">computed</h2>

- dayOptions

  可选日期（今天和明天）
  
<h2 id="methods">methods</h2>

- fetchData

  - 简介
  
    获取申请情况数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 不同的情况进行不同的操作
    
- submit

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 生成数据，并提交，并处理res
    
<h2 id="mounted">mounted</h2>

- 细节

  1. 获取申请情况数据
