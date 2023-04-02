<template>
  <div id="app">
    <router-view></router-view>
    <!-- <home></home> -->
    <!-- <Register></Register> -->
  </div>
</template>

<script>
import Login from '@/view/pages/Login'
import verify from '@/view/pages/verify'
import Register from '@/view/pages/Register';
import home from '@/view/home'
import changePwd from '@/view/pages/changePwd'
import news from '@/view/pages/news'
import addressList from '@/view/pages/addressList'
export default {
  name: 'App',
  components: {
    Login,
    verify,
    Register,
    home,
    changePwd,
    addressList,
    news
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
