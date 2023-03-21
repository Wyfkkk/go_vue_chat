import Vue from "vue";
import Router from "vue-router";

//组件模块

import Login from "@/components/Login";
import verify from "@/components/verify";
import Register from "@/components/Register";
import home from '@/components/home'
Vue.use(Router);

export default new Router({
  routes: [
    // { path: '/', name: 'HelloWorld', component: HelloWorld },
    {
      path: "/",
      redirect: "/Login",
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    { path: "/verify", name: "verify", component: verify },
    {
      path: "/Register",
      name: "Register",
      component: Register,
    },
    {
      path: "/home",
      name: "home",
      component: home,
    },
  ],
  mode: "history",
});
