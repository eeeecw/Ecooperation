<template>
  <div class="container">
    <div v-if="init === 1" class="no-bunding">
      <div class="no-bunding_tip">您还未绑定 up 主信息，请先登录 bilibili ，然后点击下面按钮进行绑定</div>
      <mt-button @click="bundBili" class="no-bunding_btn" type="primary">绑定</mt-button>
    </div>
    <div v-if="init === 2" class="status">
      <div class="status_item">今日获赞：<span class="status_num">123456</span></div>
      <div class="status_item">总获赞：<span class="status_num">123456</span></div>
      <div class="status_item">今日互助：<span class="status_num">123456</span></div>
      <div class="status_item">总互助：<span class="status_num">123456</span></div>
      <div class="status_item"><span class="status_item_switch">互助状态：{{ ['关闭', '开始'][+start] }}</span><mt-switch class="status_mt-switch" @change="changeSwitch" v-model="start"></mt-switch></div>
      <div class="status_item"><a href="http://www.baidu.com" target="_blank">帮助</a><span class="status_num"></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      init: 0,
      start: null
    }
  },
  created () {
    this.$api.get('/Eup/index.php?user.status', {
      token: this.$cookies.get('token')
    }).then(res => {
      if (res.ret === 0) {
        this.init = 2 // 已经绑定用户数据
        if (window.start) {
          this.start = true
        } else {
          this.start = false
          window.start = false
        }
      } else {
        this.init = 1 // 未绑定用户数据
      }
    })
  },
  methods: {
    changeSwitch () {
      window.start = this.start
    },
    bundBili () {
      let that = this
      this.$utils.sendMessageToContentScript({
        type: 1
      }, res => { // 这里是向 content-script 通信的回调函数
        if (res.mid) { // 根据 mid 判断是否登录
          res.token = this.$cookies.get('token')
          console.log(res)
          this.$api.post('/Eup/index.php?user.bundBili', res).then(res => {
            return that.$toast({
              message: res.msg,
              position: 'bottom',
              duration: 1000
            })
          })
        } else {
          return that.$toast({
            message: res.msg,
            position: 'bottom',
            duration: 1000
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.no-bunding{
  width: 80%;
  margin: 180px auto 0;
}
.no-bunding_tip{
  margin-bottom: 10px;
}
.no-bunding_btn{
  width: 100%;
}
.status{
  font-size: 14px;
  width: 100%;
  text-align: center;
}
.status_item{
  height: 60px;
  line-height: 60px;
  box-sizing: border-box;
  border-bottom: #dedfe0 1px solid;
}
.status_item_switch{
  display: inline-block;
}
.status_mt-switch{
  margin-left: 15px;
  height: 44px;
  vertical-align: middle;
  display: inline-block;
}
.status_num{
  margin-left: 8px;
}
a{
  text-decoration: none;
  color: blue;
}
a:visited{
  color: blue;
}
</style>
