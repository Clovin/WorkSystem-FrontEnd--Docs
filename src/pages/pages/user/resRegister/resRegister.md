# resRepair compoent
本文是对 resRepair component 的简介

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

用户页面的resRepair子组件，回复蹭班申请页面

<h2 id="HTML">HTML</h2>

主要有两个块

- 蹭班申请列表

- 申请回复框

  点击一个申请块后出现

<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

textInput, checkBox, selectBox, button 组件

<h2 id="data">data</h2>

- currentID

  {Int?} - 当前打开的申请ID
  
- registerMan

  {Array<Object>} - 蹭班申请列表数组
  
- placeOptions

  {Array<String>} - 宿舍片区selectBox的可选值
  
- currentName

  {String} - 当前打开的申请人名字
  
- resPlace

  {String} - 安排的片区
  
- resPass
  
  {String} - 是否通过
  
- resWhy

  {String} - 拒绝理由
  
<h2 id="computed">computed</h2>

- isOpen

  是否打开申请回复框
  
  绑定base module的isOpen
  
<h2 id="methods">methods</h2>

- change

  - 简介
  
    切换申请回复框
    
  - 参数
  
    - id
    
      当前选择的申请ID
      
    - name
    
      当前选择的申请name
    
  - 返回值
  
    无
    
  - 细节
  
    1. 验证是否是上次打开的申请回复框
       - 若是
         1. 打开消息确认框
       - 若不是
         1. 清除信息，打开消息确认框
    
- submit

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 验证数据，生成数据，并提交
    
- fetchData

  - 简介
  
    获取申请列表
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 获取数据
    
<h2 id="mounted">mounted</h2>

- 细节

  1. 执行 fetchData 方法
