import Axios from 'axios'
// 不知道 qs 是干什么的
// import qs from 'qs'

Axios.defaults.baseURL = 'http://www.eeeezq.com' // 基础路由
Axios.defaults.timeout = 200000 // 超时时间
Axios.defaults.headers = { // 默认请求头
  'Content-Type': 'application/x-www-form-urlencoded'
}
Axios.defaults.validateStatus = function (status) { // TODO http code 校验
  return status
}

function post (url, body) {
  return new Promise((resolve, reject) => {
    Axios.post(url, body)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
function get (url, params) {
  // 暂时用不到下面两行
  // params.token = storage.get('BItoken')
  // params.sign = filter.md5Encryption(params)
  return new Promise((resolve, reject) => {
    Axios.get(url, {params: params})
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export default {post, get}
