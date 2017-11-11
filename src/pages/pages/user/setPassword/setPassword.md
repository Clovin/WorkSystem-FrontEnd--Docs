# setPassword compoent
本文是对 setPassword component 的简介

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

用户页面的setPassword子组件，修改密码页面

<h2 id="HTML">HTML</h2>

主要有一个块

- 表单

  输入框按钮等等
  
<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

textInput, button 组件

<h2 id="data">data</h2>

- oldPassword

  {String} - 旧密码
  
- newPassword

  {String} - 新密码
  
- confirm

  {String} - 确认密码
  
<h2 id="methods">methods</h2>

- submit

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 检查数据，生成数据，提交数据
       
