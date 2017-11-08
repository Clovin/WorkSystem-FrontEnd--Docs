# checkBoxGroup component
本文是对 checkBoxGroup component 的介绍

## 目录
- [简介](#introduction)
- [HTML](#HTML)
- [CSS](#CSS)
- [Prop](#Prop)
- [data](#data)
- [methods](#methods)

<h2 id="introduction">简介</h2>

多项选择框

<h2 id="HTML">HTML</h2>

需要修改

<h2 id="CSS">CSS</h2>

需要修改

<h2 id="Prop">Prop</h2>

- sources

  {Array\<String\>} - 各个选择框的value值的数组
  
<h2 id="data">data</h2>

- checked

  {Array\<String\>} - 组件内部保存的value值
  
<h2 id="methods">methods</h2>

- onCheck

  - 简介
  
    选择框点击事件
    
  - 参数
  
    - source
    
      {String} - 选择框的value值
   
  - 返回值
  
    无
    
  - 细节
  
    1. 更新data的checked
    2. 向父组件发送input事件
