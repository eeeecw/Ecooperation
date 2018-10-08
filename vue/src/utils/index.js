import api from './api'
import validate from './validate'
import utils from './utils'

// import navigate from './navigate.js'
export default function plugin (Vue) {
  // api 配置
  Vue.$api = Vue.prototype.$api = api
  Vue.$validate = Vue.prototype.$validate = validate
  Vue.$utils = Vue.prototype.$utils = utils
}
