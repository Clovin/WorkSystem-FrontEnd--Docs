# addExp compoent
本文是对 addExp component 的简介

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

用户页面的addExp子组件，增加经验页面

<h2 id="HTML">HTML</h2>

内容简单，两个文本输入框及一个提交按钮

<h2 id="CSS">CSS</h2>

使用detail class

<h2 id="components">依赖的组件</h2>

textInput, button 组件

<h2 id="data">data</h2>

- Exp

  {String} - 经验内容
  
- ExpTitle

  {String} - 经验标题
  
<h2 id="methods">methods</h2>

- submit

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 检测输入
    2. 发送请求
    
