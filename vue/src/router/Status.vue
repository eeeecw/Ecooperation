<template>
  <div class="container">
    <div v-if="init === 1" class="no-bunding">
      <div class="no-bunding_tip">您还未绑定 up 主信息，请先登录 bilibili ，然后点击下面按钮进行绑定</div>
      <mt-button @click="bundBili" class="no-bunding_btn" type="primary">绑定</mt-button>
    </div>
    <div v-if="init === 2" class="status">
      互助<mt-switch @change="changeSwitch" v-model="start">{{ ['关闭', '开始'][+start] }}</mt-switch>
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
        this.init = 2
        if (window.start) {
          this.start = true
        } else {
          this.start = false
          window.start = false
        }
      } else {
        this.init = 1
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
        if (res.biid) { // 根据 biid 判断是否登录
          res.token = this.$cookies.get('token')
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
</style>
