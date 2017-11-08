import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/README.md'], resolve)
    },
    {
      path: '/overview',
      component: resolve => require(['../pages/README.md'], resolve)
    },
    {
      path: '/api/introduction',
      component: resolve => require(['../pages/API/introduction.md'], resolve)
    },
    {
      path: '/api/fetchAPI',
      component: resolve => require(['../pages/API/fetchAPI.md'], resolve)
    },
    {
      path: '/api/postAPI',
      component: resolve => require(['../pages/API/postAPI.md'], resolve)
    },
    {
      path: '/router/introduction',
      component: resolve => require(['../pages/router/introduction.md'], resolve)
    },
    {
      path: '/utils/introduction',
      component: resolve => require(['../pages/utils/introduction.md'], resolve)
    },
    {
      path: '/utils/cookieManager',
      component: resolve => require(['../pages/utils/cookieManager.md'], resolve)
    },
    {
      path: '/Vuex/introduction',
      component: resolve => require(['../pages/Vuex/introduction.md'], resolve)
    },
    {
      path: '/Vuex/actions',
      component: resolve => require(['../pages/Vuex/actions.md'], resolve)
    },
    {
      path: '/Vuex/module/base',
      component: resolve => require(['../pages/Vuex/module/base.md'], resolve)
    },
    {
      path: '/Vuex/module/createRepair',
      component: resolve => require(['../pages/Vuex/module/createRepair.md'], resolve)
    },
    {
      path: '/Vuex/module/createWork',
      component: resolve => require(['../pages/Vuex/module/createWork.md'], resolve)
    },
    {
      path: '/Vuex/module/newTask',
      component: resolve => require(['../pages/Vuex/module/newTask.md'], resolve)
    },
    {
      path: '/Vuex/module/overview',
      component: resolve => require(['../pages/Vuex/module/overview.md'], resolve)
    },
    {
      path: '/Vuex/module/tasks',
      component: resolve => require(['../pages/Vuex/module/tasks.md'], resolve)
    },
    {
      path: '/components/button',
      component: resolve => require(['../pages/components/button.md'], resolve)
    },
    {
      path: '/components/checkBox',
      component: resolve => require(['../pages/components/checkBox.md'], resolve)
    },
    {
      path: '/components/checkBoxGroup',
      component: resolve => require(['../pages/components/checkBoxGroup.md'], resolve)
    },
    {
      path: '/components/dropSelecter',
      component: resolve => require(['../pages/components/dropSelecter.md'], resolve)
    },
    {
      path: '/components/loading',
      component: resolve => require(['../pages/components/loading.md'], resolve)
    },
    {
      path: '/components/selectBox',
      component: resolve => require(['../pages/components/selectBox.md'], resolve)
    },
    {
      path: '/components/shadow',
      component: resolve => require(['../pages/components/shadow.md'], resolve)
    },
    {
      path: '/components/task',
      component: resolve => require(['../pages/components/task.md'], resolve)
    },
    {
      path: '/components/textInput',
      component: resolve => require(['../pages/components/textInput.md'], resolve)
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return {selector: to.hash}
      }
    }
  }
})
