# createWork module
本文是对 createWork module 的介绍

## 目录
- [State](#State)
  - [choosePlace](#choosePlace)
  - [toolsDetail](#toolsDetail)
  - [hasTools](#hasTools)
  - [toolKit](#toolKit)
- [Mutation](#Mutation)
  - [SET_CHOOSE_PLACE](#SET_CHOOSE_PLACE)
  - [SET_TOOLS_DETAIL](#SET_TOOLS_DETAIL)
  - [SET_HAS_TOOLS](#SET_HAS_TOOLS)
  - [UPDATE_TOOL_KIT](#UPDATE_TOOL_KIT)
- [Action](#Action)
  - [updateToolKit](#updateToolKit)
  
<h2 id="State">State</h2>

<h3 id="choosePlace">choosePlace</h3>

- 简介

  选择的片区
  
- 值

  {String}
  
  可选值为：'香晖苑', '朝晖苑', '北门', '东门', '岐头', '香山别墅', '凤翔'

<h3 id="toolsDetail">toolsDetail</h3>

- 简介

  工具包情况补充描述
  
- 值

  {String}
  
<h3 id="hasTools">hasTools</h3>

- 简介

  是否携带工具包
  
- 值

  {Bool} true为携带
  
<h3 id="toolKit">toolKit</h3>

- 简介

  工具包正常的工具的名称集合
  
- 值

  {Array\<String\>}
  
  ```js
  [ '网线', '水晶头' ]
  ```
  
<h2 id="Mutation">Mutation</h2>

<h3 id="SET_CHOOSE_PLACE">SET_CHOOSE_PLACE</h3>

- 简介

  设置choosePlace
  
<h3 id="SET_TOOLS_DETAIL">SET_TOOLS_DETAIL</h3>

- 简介

  设置toolsDetail值
  
<h3 id="SET_HAS_TOOLS">SET_HAS_TOOLS</h3>

- 简介

  设置hasTools值
  
<h3 id="UPDATE_TOOL_KIT">UPDATE_TOOL_KIT</h3>

- 简介

  设置toolKit值
  
<h2 id="Action">Action</h2>

<h3 id="updateToolKit">updateToolKit</h3>

- 简介

  设置toolKit值
