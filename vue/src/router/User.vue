<template>
  <div class="container">
    用户中心
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {}
  },
  created () {
    console.log(this.$cookies.get('token'))
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
