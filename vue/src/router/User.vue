<template>
  <div class="container">
    <div class="header">
      <div class="header_top"></div>
      <div class="header_body">
        <div class="logo">
          <img src="https://i0.hdslb.com/bfs/face/1d24fa5c268e63383e8f37a155d08a3bfa712442.jpg" alt="">
        </div>
      </div>
    </div>
    <router-view class="body"></router-view>
    <div class="nav">
      <div class="nav_1" :class="{active: at === 'nav1'}" @click="changeNav1">状态</div>
      <div class="nav_2" :class="{active: at === 'nav2'}" @click="changeNav2">视频</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      at: 'nav1'
    }
  },
  created () {
    console.log(this.$cookies.get('token'))
  },
  methods: {
    changeNav1 () {
      this.at = 'nav1'
      this.$router.push({path: '/user/status'})
    },
    changeNav2 () {
      this.at = 'nav2'
      this.$router.push({path: '/user/video'})
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
}
.header{
  height: 66px;
  width: 100%;
  background: linear-gradient(90deg, #4482fe, #3d9df7, #22befd, #30affe);
}
.header_top{
  height: 23px;
}
.header_body{
  padding: 5px 0;
}
.logo{
  width: 33px;
  height: 33px;
  margin-left: 11px;
  border-radius: 25px;
  overflow: hidden;
}
.logo img{
  width: 33px;
  height: 33px;
}
.nav{
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border-top: 1px solid #d6c8bf;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.nav_1, .nav_2{
  flex-grow: 1;
  text-align: center;
  line-height: 47px;
  font-size: 12px;
  cursor: pointer;
}
.active{
  color: #22befd;
}
.body{
  height: 454px;
  overflow-x: hidden;
  overflow-y: auto;
}
.body::-webkit-scrollbar {
  display: none;
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
