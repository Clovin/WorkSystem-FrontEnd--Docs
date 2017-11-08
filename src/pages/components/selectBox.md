# selectBox component
本文是对 selectBox component 的介绍

## 目录
- [简介](#introduction)
- [HTML](#HTML)
- [CSS](#CSS)
- [Prop](#Prop)
- [data](#data)
- [methods](#methods)
- [watch](#watch)

<h2 id="introduction">简介</h2>

select选择器

<h2 id="HTML">HTML</h2>

需要修改

<h2 id="CSS">CSS</h2>

需要修改

<h2 id="Prop">Prop</h2>

- options

  {Array\<String\>} - 各个可选项的value值的数组
  
- default

  {Int} - 默认值的index
  
- disabled

  {Bool} - 是否禁用
  
- label

  {String} - label标签的text
  
<h2 id="data">data</h2>

- check

  {String} - 当前选择的value值
  
<h2 id="methods">methods</h2>

- onCheck

  - 简介
  
    选择框点击事件
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 向父组件发送input事件
    
<h2 id="watch">watch</h2>

- default

  - 细节
  
    1. 设置data中check的值
