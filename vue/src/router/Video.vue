<template>
  <div class="container">
    <div v-if="init" class="init"></div>
    <div v-else class="status"></div>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      init: true
    }
  },
  created () {
    this.$api.get('/Eup/index.php?user.status', {
      token: this.$cookies.get('token')
    }).then(res => {
      if (res.ret === 0) {

      } else {

      }
    })
  }
}
</script>

<style scoped>

</style>
