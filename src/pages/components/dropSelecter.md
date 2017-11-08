# dropSelecter component
本文是对 dropSelecter component 的介绍

## 目录
- [简介](#introduction)
- [HTML](#HTML)
- [CSS](#CSS)
- [Prop](#Prop)
- [data](#data)
- [methods](#methods)
- [mounted](#mounted)

<h2 id="introduction">简介</h2>

下拉选择框

<h2 id="HTML">HTML</h2>

需要修改

<h2 id="CSS">CSS</h2>

需要修改

<h2 id="Prop">Prop</h2>

- options

  {Array\<String\>} - 各个选择框的value值的数组
  
- default

  {Int} - 默认值的index
  
<h2 id="data">data</h2>

- selected

  {String} - 当前选择的value值
  
- isOpen

  {Bool} - 当前是否打开下拉菜单
  
<h2 id="methods">methods</h2>

- select

  - 简介
  
    选择框点击事件
    
  - 参数
  
    - option
    
      {String} - 选择框的value值
   
  - 返回值
  
    无
    
  - 细节
  
    1. 更新data的checked，关闭下拉菜单
    2. 向父组件发送input事件
    
- open

  - 简介
  
    打开下拉菜单
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
<h2 id="mounted">mounted</h2>

- 细节

  1. 若default有值，设置初始值，若无值，则设置第一个
