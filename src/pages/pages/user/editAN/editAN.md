# editAN compoent
本文是对 editAN component 的简介

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

用户页面的editAN子组件，编辑公告页面

<h2 id="HTML">HTML</h2>

主要有一个块

- 表单

  输入框按钮等等
  
<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

textInput, button 组件

<h2 id="data">data</h2>

- newAN

  {String} - 新的公告内容
  
<h2 id="methods">methods</h2>

- submit

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 判断数据是否有问题
       - 若有问题
         1. 告知用户错误信息
       - 若无问题
         1. 提交数据  
       
