# checkBox component
本文是对 checkBox component 的介绍

## 目录
- [简介](#introduction)
- [HTML](#HTML)
- [CSS](#CSS)
- [Prop](#Prop)
- [data](#data)
- [methods](#methods)
- [mounted](#mounted)

<h2 id="introduction">简介</h2>

选择框

<h2 id="HTML">HTML</h2>

一个div wrapper，绑定一个class，当checked为true时，使用该class

一个input element，绑定id属性为label prop，value属性为checked，change事件为onCheck函数

一个label，绑定for属性为label prop，text为label

<h2 id="CSS">CSS</h2>

待写

<h2 id="Prop">Prop</h2>

- check

  {Bool} - 为组件初始值
  
- label

  {String} - label的text内容
  
<h2 id="data">data</h2>

- checked

  {Bool} - 组件内部储存的value值
  
<h2 id="methods">methods</h2>

- onCheck

  - 简介
  
    点击后触发的事件
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 更改checked
    2. 向父组件发送input事件
    
<h2 id="mounted">mounted</h2>

- 细节

  1. 将prop的check值赋予data的checked，为组件初始化值
