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
