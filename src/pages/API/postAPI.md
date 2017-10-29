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
   -  [postSearchToday](#postSearchToday)
   -  [postAddTask](#postAddTask)
   -  [postCheckWork](#postCheckWork)

<h2 id="APIFunction">API Function</h2>

<h3 id="postLogin">postLogin (token, data)</h3>
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

<h3 id="postAddExp">postAddExp (data)</h3>

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
   
<h3 id="postEditAN">postEditAN (data)</h3>

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
   
<h3 id="postSignWork">postSignWork (data)</h3>

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
   
<h3 id="postResSignWork">postResSignWork (data)</h3>

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

<h3 id="postSetInfo">postSetInfo (data)</h3>

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

<h3 id="postSetPassword">postSetPassword (data)</h3>

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

<h3 id="postChangeTask">postChangeTask (isp, data)</h3>

-  简介
   
   修改任务
-  参数

   1. isp {String} - 任务性质
   
      可选值： '普通', '中国电信', '中国移动', '中国联通'
   2. data {JSON} - 数据
   
      isp为普通：
      ```json
      {
        "id": 193,
        "status": 1,
        "repairIntro": "adfa",
        "who": [
          "1547"
        ]
      }
      ```
      其他：
      ```json
      {
        "id": 477,
        "status": 1,
        "introduction": "tset",
        "who": [
          "1547"
        ]
      }
      ```
-  返回值

   JSON
   ```json
   {
     "success": "success"
   }
   ```
   
<h3 id="postSearch">postSearch (data)</h3>

-  简介

   查询
-  参数

   data {JSON} - 数据
   
   不同的model值查询不同的数据
   
   model为1：查询签到情况
   ```json
   {
     "model": 1,
     "date": "2017-10-29"
   }
   ```
   
   model为2：查询概览
   ```json
   {
     "model": 2,
     "start_date": "2017-10-29",
     "end_date": "2017-10-29"
   }
   ```
   
   model为3：查询用户
   ```json
      {
        "model": 3,
        "telephone_number": "12345678901"
      }
   ```
   
   model为4：查询工号
   ```json
   {
     "model": 4,
     "work_number": "1546",
     "start_date": "2017-10-29",
     "end_date": "2017-10-29"
   }
   ```
   
   model为5：查询报修单
   ```json
   {
     "model": 5,
     "status": 4,
     "start_date": "2017-10-29",
     "end_date": "2017-10-29"
   }
   ```
-  返回值

   JSON
   
   model 为 1 ：
   ```json
   {
     "success": "success",
     "inquire": [
       {
         "check_area": "北门",
         "check_out_time": "2017-08-11T19:03:18.748",
         "name": "xxx",
         "id": "1547",
         "toolkit": {
           "measuring_line": false,
           "crystal_Head": false,
           "detailed_description": "",
           "port_module": false,
           "switch": false,
           "cable": false,
           "crimping_Tool": false,
           "key": false
         },
         "check_in_time": "2017-08-11T19:02:41.206",
         "taken_toolkit": false,
         "check": 1
       }
     ]
   }
   ```
   
   model 为 2 ：
   ```json
   {
     "reported": 0,
     "success": "success",
     "tomorrow": 0,
     "undone": 1,
     "done": 0
   }
   ```
   
   model 为 3 ：
   ```json
   {
     "success": "success",
     "return": [
       {
         "userHouse": "a-0000",
         "taskProperty": 1,
         "repairStatus": 0,
         "person": [
           {
             "name": "xxx",
             "id": "1547"
           }
         ],
         "addTime": "2017-08-11T19:04:18.836",
         "userPhone": "12345678901",
         "netAccount": "test",
         "netInfo": "中国电信",
         "id": 476,
         "userPlace": "香晖苑",
         "history": [
           {
             "work_number": "1547",
             "time": "2017-08-11T19:04:18.843",
             "record": "add:work_area=香晖苑 account_number=test telephone_number=12345678901 dormitory_number=a-0000 status=0 introduction=test operator=中国电信",
             "name": "xxx",
             "id": 721
           }
         ],
         "lastChangeTime": "2017-08-11T19:04:18.854",
         "repairIntro": "test"
       }
     ]
   }
   ```
   
   model 为 4 ：
   ```json
   {
     "success": "success",
     "return": [
       {
         "userHouse": "a-0000",
         "taskProperty": 1,
         "repairStatus": 0,
         "person": [
           {
             "name": "XXX",
             "id": "1547"
           }
         ],
         "addTime": "2017-08-11T19:04:18.836",
         "userPhone": "12345678901",
         "netAccount": "test",
         "netInfo": "中国电信",
         "id": 476,
         "userPlace": "香晖苑",
         "history": [
           {
             "work_number": "1547",
             "time": "2017-08-11T19:04:18.843",
             "record": "add:work_area=香晖苑 account_number=test telephone_number=12345678901 dormitory_number=a-0000 status=0 introduction=test operator=中国电信",
             "name": "XXX",
             "id": 721
           }
         ],
         "lastChangeTime": "2017-08-11T19:04:18.854",
         "repairIntro": "test"
       }
     ]
   }
   ```
   
   model 为 5 ：
   ```json
   {
     "success": "success",
     "return": [
       {
         "userHouse": "a-0000",
         "taskProperty": 1,
         "repairStatus": 0,
         "person": [
           {
             "name": "XXX",
             "id": "1547"
           }
         ],
         "addTime": "2017-08-11T19:04:18.836",
         "userPhone": "12345678901",
         "netAccount": "test",
         "netInfo": "中国电信",
         "id": 476,
         "userPlace": "香晖苑",
         "history": [
           {
             "work_number": "1547",
             "time": "2017-08-11T19:04:18.843",
             "record": "add:work_area=香晖苑 account_number=test telephone_number=12345678901 dormitory_number=a-0000 status=0 introduction=test operator=中国电信",
             "name": "XXX",
             "id": 721
           }
         ],
         "lastChangeTime": "2017-08-11T19:04:18.854",
         "repairIntro": "test"
       }
     ]
   }
   ```
   
<h3 id="postSearchToday">postSearchToday (data)</h3>

-  简介

   查询今日某片区任务情况
-  参数

   data {JSON} - 数据
   ```json
   {
     "area": "香晖苑"
   }
   ```
   
-  返回值

   JSON
   ```json
   {
     "success": "success",
     "today": [
       {
         "netAccount": "",
         "userHouse": "b-1013",
         "netInfo": "中国移动",
         "repairStatus": 2,
         "id": 442,
         "userPlace": "香晖苑",
         "taskProperty": 0,
         "lastChangeTime": "2017-06-15T18:09:15.550",
         "repairIntro": "14号报修的 15号依然无人",
         "userPhone": "12345678901",
         "addTime": "2017-06-12T17:17:05.061"
       }
     ]
   }
   ```
   
<h3 id="postAddTask">postAddTask (type, data)</h3>

-  简介

   增加任务
-  参数

   1. type {String} - 任务类型
   
      可选值为：'普通', '工单', '新装', '投诉'
      
   2. data {JSON} - 数据
   
      当type为普通：
      ```json
      {
        "work_area": "香晖苑",
        "account_number": "",
        "telephone_number": "12345678901",
        "dormitory_number": "a-000",
        "status": 3,
        "introduction": "test",
        "who": [
          "1547"
        ],
        "operator": "中国电信"
      }
      ```
      
      其他：
      ```json
      {
        "situation_order": 1,
        "area": "香晖苑",
        "account_number": "",
        "telephone_number": "12345678901",
        "dormitory_number": "a-000",
        "status": 1,
        "introduction": "test",
        "operator": "中国电信"
      }
      ```

-  返回值

   JSON
   ```json
   {
     "success": "success"
   }
   ```
   
<h3 id="postCheckWork">postCheckWork (type, data)</h3>

-  简介

   签到/签退
   
-  参数

    1. type {String} - 类型
    
       可选值为： "in"，"out"
    
    2. data {JSON} -  数据
    
       ```json
       {
         "area": "北门",
         "toolkit": false,
         "cable": false,
         "crimping_Tool": false,
         "switch": false,
         "crystal_Head": false,
         "measuring_line": false,
         "port_module": true,
         "key": true,
         "screwdriver": false,
         "hunt": true,
         "detailed_description": ""
       }
       ```

-  返回值

   JSON
   ```json
   {
     "success": "success",
     "place": "北门",
     "check": true
   }
   ```
