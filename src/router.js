import Vue from "vue";
import Router from "vue-router";

//组件模块

import Login from "@/view/pages/Login";
import verify from "@/view/pages/verify";
import Register from "@/view/pages/Register";
import home from '@/view/home'
import changePwd from '@/view/pages/changePwd'
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
    {
      path: "/changePwd",
      name: "changePwd",
      component: changePwd,
    },
  ],
  mode: "history",
});
