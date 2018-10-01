// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import utils from './utils/'
import MintUI from 'mint-ui'
import VueCookie from 'vue-cookies'
import 'mint-ui/lib/style.css'

// Vue.$api = Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(utils)
Vue.use(MintUI)
Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
