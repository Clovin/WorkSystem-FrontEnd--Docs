# Fetch API Function
本文是对 Fetch API Function 的介绍
## 目录
- [API Function](#APIFunction)
  - [fetchIsLogin](#fetchIsLogin)
  - [fetchTasks](#fetchTasks)
  - [fetchExp](#fetchExp)
  - [fetchExtraWork](#fetchExtraWork)
  - [fetchPersonExtraWork](#fetchPersonExtraWork)
  - [fetchPersonToday](#fetchPersonToday)
  - [fetchLogout](#fetchLogout)

<h2 id="APIFunction">API Function</h2>

<h3 id="fetchIsLogin">fetchIsLogin</h3>
- 简介

  获取用户是否登录
- 参数

  无
- 返回值

  Promise(dataJSON)
  
  dataJSON 示例:
  ```json
  {
    "success": "success",
    "check": true,
    "work_orders": {
      "unicom": 0,
      "complaints": 0,
      "mobile": 0,
      "telecom": 0
    },
    "announcement": "2017年6月16日（周五）开始停值.",
    "is_login": true,
    "csrf_token": "EnnrEwRSkBLt170tuwPRBlzBxrPJjUpmVJSNYhG0EtSnmctq2N2fEo1HqWPQn2g4",
    "place": "岐头",
    "user": {
      "ID": "1547",
      "work_phone": "00000000000",
      "workDay": 0,
      "workPlace": "岐头",
      "name": "XXX",
      "job": "leader"
    },
    "works": [
      {
        "work_number": "1547",
        "name": "XXX",
        "person_phone": "13333333333",
        "area": "岐头",
        "work_phone": "00000000000"
      }
    ]
  }
  ```
<h3 id="fetchTasks">fetchTasks</h3>
- 简介

  获取任务列表
- 参数
  1. place {String} - 片区
      
      可选值： '香晖苑', '朝晖苑', '北门', '东门', '岐头', '香山别墅', '凤翔'
  2. isp   {String} - 任务性质
      
      可选值： '普通', '中国电信', '中国移动', '中国联通'

      普通为普通任务，其余值为相应的工单
    
- 返回值

  Promise(dataJSON)
  
  dataJSON 示例:
  ```json
  {
    "success": "success",
    "works": [
      {
        "work_number": "1645",
        "phone": "13333333333",
        "work_phone": "0",
        "name": "XXX",
        "area": "北门"
      }
    ],
    "work_order": [
      {
        "userHouse": "8-421",
        "taskProperty": 0,
        "repairStatus": 3,
        "addTime": "2017-05-24T17:14:34.742",
        "userPhone": "13333333333",
        "netAccount": "",
        "netInfo": "中国电信",
        "id": 193,
        "userPlace": "北门",
        "works": [],
        "lastChangeTime": "2017-06-01T16:57:08.056",
        "repairIntro": "主线端口坏了，2线不亮(误操作)"
      }
    ]
  }
  ```
<h3 id="fetchExp">fetchExp</h3>

- 简介

  获取经验列表
- 参数

  无
- 返回值

  Promise(dataJSON)
  
  dataJSON 示例:
  ```json
  {
    "experience": [
      {
        "time": "2017-08-11T19:05:52.384",
        "record": "test",
        "name": "xxx",
        "id": 17,
        "number": 1547,
        "title": "test"
      }
    ],
    "success": "success"
  }
  ```
  
<h3 id="fetchExtraWork">fetchExtraWork</h3>

-  简介

   获取申请蹭班人员列表
  
-  参数

   无
-  返回值

   Promise(dataJSON)
  
   dataJSON 示例:
  
   ```json
   {
     "states": 0,
     "success": "success",
     "registerDay": "2017-08-15:16.30"
   }
   ```
<h3 id="fetchPersonExtraWork">fetchPersonExtraWork</h3>

-  简介

   获取蹭班申请情况
-  参数

   无
-  返回值

   Promise(dataJSON)
     
   dataJSON 示例:
   ```json
   {
     "success": "success",
     "states": 2,
     "whyReject": "不是蹭本天班",
     "registerDay": "2017-08-15:16.30"
   }
   ```
   
<h3 id="fetchPersonToday">fetchPersonToday</h3>

-  简介

   获取今日完成情况
-  参数

   无
-  返回值

   Promise(dataJSON)
        
   dataJSON 示例:
   ```json
   {
     "persons": [
       {
         "userHouse": "a-0000",
         "taskProperty": 1,
         "repairStatus": 0,
         "addTime": "2017-08-11T19:04:18.836",
         "userPhone": "12345678901",
         "netAccount": "test",
         "netInfo": "中国电信",
         "id": 476,
         "userPlace": "香晖苑",
         "history": [
           {
             "time": "2017-08-11T19:04:18.843",
             "record": "add:work_area=香晖苑 account_number=test telephone_number=12345678901 dormitory_number=a-0000 status=0 introduction=test operator=中国电信",
             "who_do": "1547",
             "id": 721,
             "name": "XXX"
           }
         ],
         "lastChangeTime": "2017-08-11T19:04:18.854",
         "repairIntro": "test"
       }
     ],
     "success": "success"
   }

   ```
   
<h3 id="fetchLogout">fetchLogout</h3>

-  简介

   尝试退出账户
-  参数

   无
-  返回值

   Promise(dataJSON)
   
   dataJSON 示例:
   ```json
   {
     "success": "success"
   }
   ```
