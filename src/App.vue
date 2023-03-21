<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <home></home>
    <!-- <Register></Register> -->
  </div>
</template>

<script>
import Login from './components/Login.vue'
import verify from './components/verify.vue'
import Register from './components/Register.vue';
import home from './components/home.vue'
export default {
  name: 'App',
  components: {
    Login,
    verify,
    Register,
    home
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
