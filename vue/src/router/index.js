import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login'
import Reg from './Reg'
import User from './User'
import Setting from './Setting'

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
