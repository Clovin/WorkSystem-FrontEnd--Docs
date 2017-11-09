# login page
本文是对 login page 的简介

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

登录页面

<h2 id="HTML">HTML</h2>

主要有三个块

- header

  头部（即蓝色区域）
  
- form

  表单（输入框，登录按钮区域）

- loading

  loading层

<h2 id="CSS">CSS</h2>

大致结构

- header

  height占40%，里面的字利用relative position，达到居中效果

- form

  使用relative position，向上偏移进蓝色区域
  
- loading

  fixed position，居中

<h2 id="components">依赖的组件</h2>

textInput, checkBox, loading 组件

<h2 id="data">data</h2>

- username

  {String} - 用户名
  
- password

  {String} - 密码
  
- hasError

  {Bool} - 是否有错误，true为有错误
  
- errorMsg 

  {String} - 错误信息
  
- time 

  {Bool} - 是否记住登录，true为记住登录
  
- token

  {String} - token，用于登录

<h2 id="computed">computed</h2>

- loading 

  是否在loading状态

  绑定base module的loading
  
- isLog

  是否登录
  
  绑定base module的isLog

<h2 id="methods">methods</h2>

- submit

  - 简介
  
    提交登录请求
    
  - 参数
  
    无
    
  - 返回值
  
    无
    
  - 细节
  
    1. 构造JSON data
    2. 发送请求
       - 若请求成功
         1. 执行endLoading
         2. 判断用户是否登录成功
            - 若成功
              1. 进入用户界面
            - 若失败
              1. 告知用户错误信息         
       - 若请求失败
         1. 告知用户错误信息
         2. 执行endLoading

<h2 id="mounted">mounted</h2>

- 细节

  1. 判断vuex中base module的isLog是否为true
    
     - 若true
     
       进入用户界面
       
     - 若false
     
       1. 发送请求判断用户是否登录
          - 若获取到数据后已登录
       
            1. 进入用户界面
            
          - 若未登录
          
            1. 获取token，用于登录
