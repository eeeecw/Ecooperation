import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login'
import Reg from './Reg'
import User from './User'
import Status from './Status'
import Video from './Video'

Vue.use(Router)

let router = new Router({
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
      component: User,
      children: [
        {
          path: 'status',
          name: 'status',
          component: Status
        },
        {
          path: 'video',
          name: 'video',
          component: Video
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'user' && !Vue.cookies.get('token')) {
    return next('/')
  } else if (to.name === 'login' && Vue.cookies.get('token')) {
    return next('/user/status')
  }
  next()
})

export default router
