# 路由
本文对项目中的路由进行一个简要的说明
## 目录
-  [路由结构](#structure)

<h2 id="structure">路由结构</h2>
- /login
  
  登录页面，默认路由

- /os

  系统运行状态查询页面，目前已经暂时下线
  
  若需要上线，需要注意修改EChart的导入，让部分需要的组件导入即可
  
- /user

  用户页面
  
  - /overview
  
    概览页面，默认子路由
  
  - /creatework
  
    签到/签退页面
    
  - /createrepair
  
    完成纸质报修页面
    
  - /setpassword
  
    修改密码页面

  - /contacts
  
    常用联系方式页面
    
  - /register
  
    申请蹭班页面
    
  - /setinfo
  
    修改个人资料页面
    
  - /editan
  
    编辑公告页面
    
  - /resregister
  
    回复蹭班申请页面
    
  - /newtask
  
    新增任务页面
    
  - /todayfinish
  
    今日完成情况页面
    
  - /searchuser
  
    查询用户页面
    
  - /searchid
  
    查询工号页面
    
  - /searchday
  
    查询报修单页面
    
  - /searchExp
  
    经验概览页面
    
  - /addExp
  
    新增经验页面
    
  - /task:isp
  
    任务页面（isp不同相应不同的页面）
    
    isp可选值为："投诉"，"普通"，"中国电信"，"中国移动"，"中国联通"
    
  - /searchAccount
  
    查询电信余额页面（还未实现，需要后端配合）
