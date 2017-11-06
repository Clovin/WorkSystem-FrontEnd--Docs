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
