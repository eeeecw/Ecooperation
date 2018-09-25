import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import User from '@/components/User'
import Setting from '@/components/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
