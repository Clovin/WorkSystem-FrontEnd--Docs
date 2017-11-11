# setInfo compoent
本文是对 setInfo component 的简介

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

用户页面的setInfo子组件，修改个人资料页面

<h2 id="HTML">HTML</h2>

主要有一个块

- 表单

  输入框按钮等等
  
<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

textInput, button, selectBox 组件

<h2 id="data">data</h2>

- workDay

  {String} - 值班时间
  
- workPlace

  {String} - 值班地点
  
- phone

  {String} - 手机号码
  
- workPhone

  {String} - 工作号码
  
- dayOptions

  {Array<String>} - 值班时间selectBox选项
  
- placeOptions

  {Array<String>} - 工作地点selectBox选项
  
<h2 id="methods">methods</h2>

- submit

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 生成数据，提交数据
       
