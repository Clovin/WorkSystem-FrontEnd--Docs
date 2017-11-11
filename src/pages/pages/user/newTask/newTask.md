# newTask compoent
本文是对 newTask component 的简介

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

用户页面的newTask子组件，新建任务页面

<h2 id="HTML">HTML</h2>

主要有两个块

- 表单

  输入框按钮等等
  
- 信息确认框

  点击提交按钮后出现

<h2 id="CSS">CSS</h2>


<h2 id="components">依赖的组件</h2>

textInput, checkBox, selectBox, button 组件

<h2 id="data">data</h2>

- taskOptions

  {Array<String>} - 任务性质selectBox的可选值
  
- statusOptions

  {Array<String>} - 报修状态selectBox的可选值
  
- placeOptions

  {Array<String>} - 宿舍片区selectBox的可选值
  
- netOptions

  {Array<String>} - 运营商selectBox的可选值
  
<h2 id="computed">computed</h2>

- isOpen

  是否打开信息确认框
  
  绑定base module的isOpen
  
- info

  用户信息，用于获取操作人的ID
  
  绑定base module的info
  
- taskProperty

  任务性质
  
  绑定表单及Vuex，可修改
  
- taskStatus

  任务状态
  
  绑定表单及Vuex，可修改

- userPhone

  用户电话
  
  绑定表单及Vuex，可修改
  
- userPlace

  用户宿舍片区
  
  绑定表单及Vuex，可修改
  
- userHouse

  用户宿舍号
  
  绑定表单及Vuex，可修改
  
- netInfo

  运营商
  
  绑定表单及Vuex，可修改
  
- netAccount

  宽带账号
  
  绑定表单及Vuex，可修改
  
- introduction

  维修描述
  
  绑定表单及Vuex，可修改
  
<h2 id="methods">methods</h2>

- velify

  - 简介
  
    验证数据是否正常
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 验证数据
       - 若正常
         1. 打开消息确认框
       - 若不正常
         1. 打开消息提示框
    
- submit

  - 简介
  
    提交数据
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 生成数据，并提交
    
- cancle

  - 简介
  
    取消提交
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 关闭信息确认框框和loading层
