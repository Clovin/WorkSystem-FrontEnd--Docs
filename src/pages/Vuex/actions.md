# Actions
本文是对 Actions 的说明

## 目录
- [Actions Function](#function)
  - [FETCH_IS_LOGIN](#FETCH_IS_LOGIN)
  - [FETCH_TASKS](#FETCH_TASKS)
  - [FETCH_WORKERS](#FETCH_WORKERS)
  - [FETCH_ALL_TASKS](#FETCH_ALL_TASKS)
  - [FETCH_EXP](#FETCH_EXP)
  - [FETCH_EXTRA_WORK](#FETCH_EXTRA_WORK)
  - [FETCH_PERSON_TODAY](#FETCH_PERSON_TODAY)
  - [FETCH_LOGOUT](#FETCH_LOGOUT)
  - [POST_LOGIN](#POST_LOGIN)
  - [POST_ADD_EXP](#POST_ADD_EXP)
  - [POST_EDIT_AN](#POST_EDIT_AN)
  - [POST_SIGN_WORK](#POST_SIGN_WORK)
  - [POST_RES_SIGN_WORK](#POST_RES_SIGN_WORK)
  - [POST_SET_INFO](#POST_SET_INFO)
  - [POST_SET_PASSWORD](#POST_SET_PASSWORD)
  - [POST_CHANGE_TASK](#POST_CHANGE_TASK)
  - [POST_SEARCH](#POST_SEARCH)
  - [POST_SEARCH_TODAY](#POST_SEARCH_TODAY)
  - [POST_ADD_TASK](#POST_ADD_TASK)
  - [POST_CHECK_WORK](#POST_CHECK_WORK)

<h2 id="function">Actions Function</h2>

<h3 id="FETCH_IS_LOGIN">FETCH_IS_LOGIN ({commit, dispatch})</h3>

- 简介

  获取是否登录
  
  获取过程会进行 beginLoading Actions，获取异常的话会进行处理
  
  如果已登录，会对数据进行处理，若未登录，则返回一个token，以供登录
  
- 参数

  无
  
- 返回值

  1. Promise()
  2. Promise(token)
  
     token {String} - token,用于后续登录
     
- 细节

  1. 执行 beginLoading action
  2. 发送请求到服务器
  3. 若获取到数据
     - 如果未登录
       1. 执行 endLoading action
       2. 返回 Promise(token)
     - 如果已登录
       1. 修改 base 模块中的 info,isLog,isWorked,todayWorkers,nowPlace
       
          overview 模块中的 announce,overview
          
          createWork 模块中的 choosePlace
          
          createRepair 模块中的 userPlace
       2. 返回 Promise()
  4. 若catch捕获到错误
     
     1. 执行 openMsg action，向用户表明出现错误
     
     2. 执行 endLoading action

<h3 id="FETCH_TASKS">FETCH_TASKS ({state, commit, dispatch}, isp)</h3>

- 简介

  获取任务列表
  
  获取过程会进行 beginLoading Actions，获取异常的话会进行处理
  
  如果获取成功，会对列表进行排序，并进行进一步的处理
  
- 参数

  isp {String} - 任务类型
  
  可选值为：'投诉','普通','中国电信','中国移动','中国联通'
  
- 返回值

  Promise()
  
- 细节

  1. 执行 beginLoading action
  2. 判断数据是否获取成功
     - 获取成功
       1. 对数据进行排序，处理等操作
       2. 修改 tasks module的tasks，workers数据
       3. 执行  endLoading action
     - 获取失败
       1. 执行 openMsg action，跟用户说明情况
       2. 执行 endLoading action
  
<h3 id="FETCH_WORKERS">FETCH_WORKERS ({state, dispatch})</h3>

- 简介

  获取工作人员列表
  
  获取过程会进行 beginLoading Actions，获取异常的话会进行处理
  
  如果获取成功，会返回数据

- 参数

  无
  
- 返回值

  Promise(data)
    
  data：
  
  ```json
  {
    workers: something
  }
  ```
  
  ```json
  {
    "workers": [
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
  
- 细节

  1. 执行 beginLoading action
  2. 判断数据是否获取成功
     -  如果数据获取成功
        1.  对数据进行处理
        2.  返回 Promise(data)
     -  如果数据没获取成功
        1. 执行 openMsg action，跟用户说明情况
        2. 执行 endLoading action

<h3 id="FETCH_ALL_TASKS">FETCH_ALL_TASKS ({state, dispatch})</h3>

- 简介

  获取所有任务
  
  获取过程会进行 beginLoading Actions，获取异常的话会进行处理
    
  如果获取成功，会返回数据
  
- 参数

  无
  
- 返回值

  Promise(data)
  
  data：
  
  ```js
  {
    general: something,
    fuck: something,
    dianxin: something,
    liantong: something,
    yidong: something
  }
  ```
  
  ```json
  {
    "general": {
      "success": "success",
      "works": [
        {
          "work_number": "1645",
          "phone": "12345678909",
          "work_phone": "0",
          "name": "xxx",
          "area": "北门"
        }
      ],
      "work_situation": [
        {
          "userHouse": "8-421",
          "taskProperty": 0,
          "repairStatus": 3,
          "addTime": "2017-05-24T17:14:34.742",
          "userPhone": "12345678909",
          "netAccount": "",
          "netInfo": "中国电信",
          "id": 193,
          "userPlace": "北门",
          "works": [],
          "lastChangeTime": "2017-06-01T16:57:08.056",
          "repairIntro": "主线端口坏了，2线不亮(误操作)"
        }
      ]
    },
    "fuck": {
      "success": "success",
      "works": [
        {
          "work_number": "1547",
          "phone": "12345678909",
          "work_phone": "00000000000",
          "name": "XXX",
          "area": "香晖苑"
        }
      ],
      "work_order": [
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
          "lastChangeTime": "2017-08-11T19:04:18.854",
          "repairIntro": "test"
        }
      ]
    },
    "dianxin": {
      "success": "success",
      "works": [
        {
          "work_number": "1547",
          "phone": "12345678909",
          "work_phone": "00000000000",
          "name": "xxx",
          "area": "香晖苑"
        }
      ],
      "work_order": [
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
          "lastChangeTime": "2017-08-11T19:04:18.854",
          "repairIntro": "test"
        }
      ]
    },
    "liantong": {
      "success": "success",
      "works": [
        {
          "work_number": "1547",
          "phone": "12345678909",
          "work_phone": "00000000000",
          "name": "xxx",
          "area": "香晖苑"
        }
      ],
      "work_order": [
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
          "lastChangeTime": "2017-08-11T19:04:18.854",
          "repairIntro": "test"
        }
      ]
    },
    "yidong": {
      "success": "success",
      "works": [
        {
          "work_number": "1547",
          "phone": "12345678909",
          "work_phone": "00000000000",
          "name": "xxx",
          "area": "香晖苑"
        }
      ],
      "work_order": [
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
          "lastChangeTime": "2017-08-11T19:04:18.854",
          "repairIntro": "test"
        }
      ]
    }
  }

  ```
  
- 细节

  1. 执行 beginLoading
  2. 请求各个API接口
  3. 判断数据是否获取成功
     - 如果请求成功
       1. 返回一个Promise(Object)
     - 如果请求失败
       1. 执行 openMsg, 告知用户错误信息
       2. 执行 endLoading
  
<h3 id="FETCH_EXP">FETCH_EXP ({dispatch})</h3>

- 简介

  获取经验列表
  
  获取过程会进行 beginLoading Actions，获取异常的话会进行处理
      
- 参数

  无
  
- 返回值

  Promise(data)
  
  data:
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
  
- 细节

  1. 执行 beginLoading
  2. 发送请求
     - 如果请求成功
       1. 返回 Promise(data)
     - 如果请求失败
       1. 执行 openMsg, 告知用户错误信息
       2. 执行 endLoading    
  
<h3 id="FETCH_EXTRA_WORK">FETCH_EXTRA_WORK ({dispatch})</h3>

- 简介

  获取申请蹭班列表
  
  获取过程会进行 beginLoading Actions，获取异常的话会进行处理
  
- 参数

  无
  
- 返回值

  Promise(data)
  
  data:
  ```json
  {
    "extra_work": [
      {
        "work_number": "1547",
        "status": 0,
        "add_time": "2017-10-28T07:52:02.099",
        "extra_work_time": "2017-10-28:16.30",
        "name": "XXX",
        "id": 127
      }
    ],
    "success": "success"
  }
  ```

- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 返回 Promise(data)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading 
  
<h3 id="FETCH_PERSON_EXTRA_WORK">FETCH_PERSON_EXTRA_WORK ({dispatch})</h3>

- 简介

  获取个人蹭班情况
  
  获取过程会进行 beginLoading Actions，获取异常的话会进行处理
  
- 参数

  无
  
- 返回值
 
  Promise(data)
  
  data:
  ```json
  {
    "success": "success",
    "states": 2,
    "whyReject": "不是蹭本天班",
    "registerDay": "2017-08-15:16.30"
  }
  ```
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 返回 Promise(data)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading

<h3 id="FETCH_PERSON_TODAY">FETCH_PERSON_TODAY ({dispatch})</h3>

- 简介

  获取今日完成情况
  
  获取过程会进行 beginLoading Actions，获取异常的话会进行处理
  
- 参数

  无
  
- 返回值

  Promise(data)
  
  data:
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

- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 返回 Promise(data)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading
  
<h3 id="FETCH_LOGOUT">FETCH_LOGOUT ({dispatch})</h3>

- 简介

  登出账号
  
  获取过程会进行 beginLoading Actions，获取异常的话会进行处理
  
  获取成功后，会对页面进行重新加载
  
- 参数

  无
  
- 返回值

  Promise()
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 刷新页面
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading
  
<h3 id="POST_LOGIN">POST_LOGIN ({commit, dispatch}, postData)</h3>

- 简介

  登录账号
  
  提交过程会进行 beginLoading Actions，提交异常的话会进行处理
    
  提交成功后，会对数据进行处理
  
- 参数

  postData {Json} - 数据
  
  ```json
  {
    "token": "xxxx",
    "data": {
      "username": "username",
      "password": "password",
      "time": true
    }
  }
  ```
  
- 返回值

  Object
  
  ```js
  {
    error: '账号或密码错误'
  }

  {
    error: '未知错误，请刷新网页，若依然无法登录，请联系管理员'
  }

  {
    success: 'success'
  }
  ```
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         - 判断数据是否正确获取
           - 如果正确
             1. 设置各个值
             2. 返回Promise(Object)
           - 如果错误
             1. 返回Promise(errorObject)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading
  
<h3 id="POST_ADD_EXP">POST_ADD_EXP ({dispatch}, postData)</h3>

- 简介

  增加经验
  
  提交过程会进行 beginLoading Actions，提交异常的话会进行处理
  
- 参数

  postData {JSON} - 数据
  
  ```json
  {
    "title": "title",
    "experience": "content"
  }
  ```
  
- 返回值

  Promise(data)
  
  data:
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
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 返回 Promise(data)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading
  
<h3 id="POST_EDIT_AN">POST_EDIT_AN ({dispatch}, postData)</h3>

- 简介

  编辑公告
  
  提交过程会进行 beginLoading Actions，提交异常的话会进行处理
  
- 参数

  postData {JSON} - 数据
  
  ```json
  {
    "content": "an"
  }
  ```
  
- 返回值

  Promise(data)
  
  data:
  ```json
  {
    "content": "test",
    "success": "success"
  }
  ```
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 返回 Promise(data)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading
  
<h3 id="POST_SIGN_WORK">POST_SIGN_WORK ({dispatch}, postData)</h3>

- 简介

  申请蹭班
  
- 参数

  postData {JSON} - 数据
  ```json
  {
    "date": "2017-10-28"
  }
  ```
  
- 返回值

  Promise(data)
  
  data:
  ```json
  {
    "success": "success",
    "states": 0,
    "registerDay": "2017-09-04:16.30"
  }
  ```

- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 返回 Promise(data)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading
  
<h3 id="POST_RES_SIGN_WORK">POST_RES_SIGN_WORK ({dispatch}, postData)</h3>

- 简介

  回复蹭班申请
  
- 参数

  postData {JSON} - 数据
  ```json
  {
    "id": 127,
    "status": 2,
    "reason": "test",
    "area": "香晖苑"
  }
  ```
  
- 返回值

  Promise(data)
  
  data:
  ```json
  {
    "success": "add success"
  }
  ```
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 返回 Promise(data)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading

<h3 id="POST_SET_INFO">POST_SET_INFO ({dispatch}, postData)</h3>

- 简介

  修改个人信息
  
- 参数

  postData {JSON} - 数据
  
  ```json
  {
    "area": "香晖苑",
    "work_day": 0,
    "phone_number": "12345678901",
    "work_number": "12345678901"
  }
  ```
  
- 返回值

  Promise()
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         - 判断数据是否正确获取
           - 如果正确
             1. 设置各个值
             2. 执行 openMsg, 告知用户信息
             3. 执行 endLoading
           - 如果错误
             1. 执行 openMsg, 告知用户错误信息
             2. 执行 endLoading
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading

<h3 id="POST_SET_PASSWORD">POST_SET_PASSWORD ({dispatch}, postData)</h3>

- 简介

  修改密码
  
  会重新加载页面
  
- 参数

  postData {JSON} - 数据
  
  ```json
  {
    "old_password": "xxxx",
    "new_password": "xxxxx"
  }
  ```
  
- 返回值

  Promise()
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         - 判断数据是否正确获取
           - 如果正确
             1. 刷新页面
           - 如果错误
             1. 执行 openMsg, 告知用户错误信息
             2. 执行 endLoading
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading
  
<h3 id="POST_CHANGE_TASK">POST_CHANGE_TASK ({dispatch}, postData)</h3>

- 简介

  修改任务状态
  
- 参数

  postData {Object} - 数据
  
  isp为普通
  ```js
  {
    isp: "普通",
    data: {
      "id": 193,
      "status": 1,
      "repairIntro": "adfa",
      "who": [
        "1547"
      ]
    }
  }
  ```
  
  其他
  ```js
  {
    isp: "中国电信",
    data: {
      "id": 477,
      "status": 1,
      "introduction": "tset",
      "who": [
        "1547"
      ]
    }
  }
  ```
  
- 返回值

  Promise()
  
- 细节
  1. 执行 beginLoading
  2. 请求数据
     - 如果数据请求成功
       1. 判断数据是否通过
          - 若通过
            1. 设置各个值
            2. 执行 FETCH_TASKS
            2. 返回 Promise()
          - 若未通过
            1. 对应的操作,并告知用户
     - 如果失败
       1. 执行 openMsg, 告知用户错误
       2. 执行 endLoading

<h3 id="POST_SEARCH">POST_SEARCH ({dispatch}, postData)</h3>

- 简介

  查询
  
- 参数

  postData {JSON} - 数据
  
  ```json
  {
    "model": 1,
    "date": "2017-10-29"
  }
  ```
  
- 返回值

  Promise(data)
  
  data:
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
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 返回 Promise(data)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading
  
<h3 id="POST_SEARCH_TODAY">POST_SEARCH_TODAY ({dispatch}, postData)</h3>

- 简介

  查询今日片区任务
  
- 参数

  postData {JSON} - 数据
  
  ```json
  {
    "area": "香晖苑"
  }
  ```
  
- 返回值

  Promise(data)  
  
  data:
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
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 返回 Promise(data)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading
  
<h3 id="POST_ADD_TASK">POST_ADD_TASK ({dispatch}, postData)</h3>

- 简介

  新增任务
  
- 参数

  postData {Object} - 数据
  
  ```js
  {
    type: "普通",
    data: {
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
  }
  ```
  
- 细节
    1. 执行 beginLoading
    2. 发送请求
       - 如果请求成功
         1. 返回 Promise(data)
       - 如果请求失败
         1. 执行 openMsg, 告知用户错误信息
         2. 执行 endLoading
  
<h3 id="POST_CHECK_WORK">POST_CHECK_WORK ({dispatch, commit}, postData)</h3>

- 简介

  签到/签退
  
- 参数

  postData {Object} - 数据
  
  ```js
  {
    type: 'in',
    data: {
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
  }
  ```
  
- 返回值

  1. Promise()
  2. Promise(data)
  
     data:
     ```json
     {
       "success": true
     }
     ```
     
- 细节
  1. 执行 beginLoading
  2. 请求数据
     - 如果数据请求成功
       1. 执行 endLoading, closeSth
       2. 判断数据是否通过
          - 若通过
            1. 设置各个值
            2. 返回 Promise(data)
          - 若未通过
            1. 执行 openMsg, 告知用户错误信息
     - 如果失败
       1. 执行 openMsg, 告知用户错误
       2. 执行 endLoading
       3. 执行 closeSth
