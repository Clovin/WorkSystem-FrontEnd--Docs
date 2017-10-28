# Fetch API Function
本文是对 Fetch API Function 的介绍
## 目录
-  [API Function](#APIFunction)
   -  [postLogin](#postLogin)
   -  [postAddExp](#postAddExp)
   -  [postEditAN](#postEditAN)
   -  [postSignWork](#postSignWork)
   -  [postResSignWork](#postResSignWork)
   -  [postSetInfo](#postSetInfo)
   -  [postSetPassword](#postSetPassword)
   -  [postChangeTask](#postChangeTask)

<h2 id="APIFunction">API Function</h2>

<h3 id="postLogin">postLogin</h3>
-  简介

   登录账户
-  参数
   1. token {String} - 页面第一次提交数据需要用isLogin后拿到的token，而后使用cookie里的token
   2. data  {JSON}   - 数据
   
      ```json
      {
        "username": "test",
        "password": "test",
        "time": true
      }
      ```
      
-  返回值

   JSON
   
   ```json
   {
     "success": "success",
     "announcement": "2017年6月16日（周五）开始停值",
     "work_orders": {
       "mobile": 0,
       "telecom": 0,
       "unicom": 0,
       "complaints": 0
     },
     "works": [
       {
         "work_number": "1403",
         "work_phone": "xxx",
         "name": "xxx",
         "area": "东门",
         "person_phone": "xxx"
       }
     ],
     "user": {
       "workPlace": "北门",
       "ID": "1547",
       "workDay": 7,
       "job": "leader",
       "work_phone": "00000000000",
       "name": "xxx"
     },
     "place": "",
     "check": false
   }
   ```

<h3 id="postAddExp">postAddExp</h3>

-  简介

   增加经验
-  参数
   
   data {JSON} - 数据
   ```json
   {
     "title": "test",
     "experience": "test"
   }
   ```
-  返回值

   JSON
   ```json
   {
     "experience": {
       "time": "2017-08-11T19:05:52.384",
       "record": "test",
       "name": "xxx",
       "id": 17,
       "number": "1547",
       "title": "test"
     },
     "success": "success"
   }
   ```
   
<h3 id="postEditAN">postEditAN</h3>

-  简介

   修改公告
-  参数

   data {JSON} - 数据
   ```json
   {
     "content": "111"
   }
   ```
-  返回值

   JSON
   ```json
   {
     "content": "test",
     "success": "success"
   }
   ```
   
<h3 id="postSignWork">postSignWork</h3>

-  简介

   申请蹭班
-  参数

   data {JSON} - 数据
   ```json
   {
     "date": "2017-10-28"
   }
   ```
-  返回值

   JSON
   ```json
   {
     "success": "success",
     "states": 0,
     "registerDay": "2017-09-04:16.30"
   }
   ```
   
<h3 id="postResSignWork">postResSignWork</h3>

-  简介

   答复蹭班
-  参数

   data {JSON} - 数据
   ```json
   {
     "id": 127,
     "status": 2,
     "reason": "test",
     "area": "香晖苑"
   }
   ```
-  返回值

   JSON
   ```json
   {
     "success": "add success"
   }
   ```

<h3 id="postSetInfo">postSetInfo</h3>

-  简介

   修改个人资料
-  参数
   
   data {JSON} - 数据
   ```json
   {
     "area": "香晖苑",
     "work_day": 0,
     "phone_number": "12345678901",
     "work_number": "12345678901"
   }
   ```
-  返回值

   JSON
   ```json
   {
     "success": "change success"
   }
   ```

<h3 id="postSetPassword">postSetPassword</h3>

-  简介

   修改密码
-  参数

   data {JSON} - 数据
   ```json
   {
     "old_password": "xxxx",
     "new_password": "xxxxx"
   }
   ```
-  返回值

   JSON
   ```json
   {
     "success": "change success"
   }
   ```

<h3 id="postChangeTask">postChangeTask</h3>
