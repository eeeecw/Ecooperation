import api from './api'

// import navigate from './navigate.js'
export default function plugin (Vue) {
  // api 配置
  Vue.$api = Vue.prototype.$api = api
}
