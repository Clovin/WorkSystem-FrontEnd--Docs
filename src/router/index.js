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
    }
  ]
})
