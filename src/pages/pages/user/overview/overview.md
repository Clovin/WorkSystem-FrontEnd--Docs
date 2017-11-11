# overview compoent
本文是对 overview component 的简介

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

用户页面的overview子组件，概览页面

<h2 id="HTML">HTML</h2>

主要有三个块

- 公告

- 今日报修情况概览

- 今日值班人员

<h2 id="CSS">CSS</h2>



<h2 id="data">data</h2>

- places

  {Array<String>} - 表格的宿舍片区信息
  
- selectPlace

  {String} - 当前的签到片区，初始值为base moudle的nowPlace
  
<h2 id="computed">computed</h2>

- announce

  公告
  
  绑定Vuex
  
- overview

  报修情况概览
  
  绑定Vuex
  
- todayWorkers

  今日工作人员
  
  绑定Vuex
  
- nowPlace

  当前签到片区
  
  绑定Vuex
