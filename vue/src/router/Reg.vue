<template>
  <div class="container">
    <router-link class="go-back" to="/">&lt;&nbsp;返回登录</router-link>
    <div class="user-header">
      <img src="http://thyrsi.com/t6/371/1537152332x-1566688526.jpg" alt="用户头像">
    </div>
    <input v-model="user" id="user" class="user" autocomplete="off" type="text">
    <input v-model="pass" id="pass" class="pass" autocomplete="off" type="password">
    <button id="login" @click="reg" class="loging-btn login ripple">注册</button>
    <div class="footer">
      <a class="footer-link" href="">忘记密码</a>
      <a class="footer-link" href="">互助论坛</a>
      <router-link class="footer-link" to="/">已有账号</router-link>
    </div>
  </div>
</template>

<script>
import fingerprintjs from 'fingerprintjs2'
export default {
  name: 'reg',
  data () {
    return {
      user: '', // 账户
      pass: '' // 密码
    }
  },
  created () {
    for (var i = 0; i < 2; i++) {
      fingerprintjs().get(res => {
        window.fingerprint = res
        // console.log(arr)
      })
    }
    // console.log(this.fingerprint)
  },
  methods: {
    reg () {
      if (!this.user) {
        return this.$toast({
          message: '请输入用户名',
          position: 'bottom',
          duration: 1500
        })
      }
      if (this.user.length < 6 || this.user.length > 20) {
        return this.$toast({
          message: '用户名长度不合法',
          position: 'bottom',
          duration: 1500
        })
      }
      if (this.$validate.chinese.test(this.user)) {
        return this.$toast({
          message: '用户名不支持汉字',
          position: 'bottom',
          duration: 1500
        })
      }
      if (!this.pass) {
        return this.$toast({
          message: '请输入密码',
          position: 'bottom',
          duration: 1500
        })
      }
      if (this.pass.length < 6 || this.pass.length > 20) {
        return this.$toast({
          message: '密码长度不合法',
          position: 'bottom',
          duration: 1500
        })
      }
      if (this.$validate.chinese.test(this.pass)) {
        return this.$toast({
          message: '密码不支持汉字',
          position: 'bottom',
          duration: 1500
        })
      }
      this.$api.get('/Eup/index.php?user.reg', {
        user: this.user,
        pass: this.pass,
        fingerprint: window.fingerprint
      }).then(res => {
        this.$toast({
          message: res.msg,
          position: 'bottom',
          duration: 1500
        })
        if (res.ret === 0) {
          let that = this
          setTimeout(() => {
            that.$router.push('/user/status')
          }, 1500)
        }
      }).catch(() => {
        return this.$toast({
          message: '网络错误，稍后重试',
          position: 'bottom',
          duration: 1500
        })
      })
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(#afe6ee, #e9d8c7);
}
.go-back{
  position: absolute;
  top: 10px;
  left: 10px;
  text-decoration: none;
  color: #1dadeb;
}
.loging-btn {
  height: 30px;
  width: 30px;
  outline: none;
}
.user-header{
  text-align: center;
  padding-top: 60px;
}
.user-header img{
  width: 85px;
  height: 85px;
  border-radius: 50px;
  border: 2px #fff solid;
}
.user, .pass{
  display: block;
  margin: 0 auto;
  width: 98%;
  border: 1px;
  height: 45px;
  font-size: 20px;
  text-align: center;
  box-sizing: border-box;
}
.user:focus, .pass:focus{
  outline: none;
  border: 2px solid #1dadeb;
}
.user{
  margin-top: 10px;
  border-bottom: 1px #eeeeee solid;
}
.login{
  display: block;
  margin: 15px auto;
  width: 80%;
  height: 45px;
  background-color: #1dadeb;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  border: none;
}
.ripple {
  position: relative;
  overflow: hidden;
}
.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform .3s, opacity .5s;
}

.ripple:active:after {
  transform: scale(0, 0);
  opacity: .3;
  transition: 0s;
}
.footer{
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
}
.footer .footer-link{
  text-decoration: none;
  font-size: 16px;
  color: #1dadeb;
}
.footer .footer-link:focus{
  position: relative;
  top: 1px;
}
</style>

<style>
*{
  padding: 0;
  margin: 0;
}
html body{
  width: 320px;
  height: 568px;
}
</style>
