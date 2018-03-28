import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/Dashboard'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})
