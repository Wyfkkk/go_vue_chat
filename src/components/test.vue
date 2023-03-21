<template>
  <div class="hello">
    <div class="box">
      <h1>欢迎使用飞猪</h1>
      <el-input class="inp" placeholder="请输入邮箱" v-model="email"></el-input>
      <el-input class="pwd" placeholder="请输入密码" type="password" v-model="password"></el-input>
      <el-button type="primary" class="btn" @click="next()">下一步</el-button>
      <div class="radio1">
        <input type="radio" />我已阅读并同意<a href="#">服务协议</a>和<a
          href="#"
          >隐私政策</a
        >
      </div>
      <div class="radio2">
        <input type="radio" name="" id="" />30天内自动登录
      </div>
      <hr class="hr1" />
      <span>更多方式</span>
      <hr class="hr2" />
      <div><el-button class="else" type="primary">手机登录</el-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      email: "",
      tel: "",
      password:''
    };
  },
  methods: {
    next() {

      this.$router.push({ path: "/verify" });
      
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box {
  width: 300px;
  background-color: white;
  height: 500px;
  position: relative;
  left: 60%;
  top: 50px;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);
}
.hello {
  background-color: rgb(237, 238, 243);
  width: 100%;
  height: 100%;
}
.inp {
  position: relative;
  top: 100px;
}
.pwd{
  position: relative;
  top: 110px;
}
h1 {
  position: relative;
  top: 50px;
  left: 0px;
  font-size: 1.5em;
}
::v-deep .el-input__inner {
  height: 50px;
  border-radius: 50px;
  text-indent: 10px;
}
.btn {
  width: 200px;
  height: 50px;
  position: relative;
  top: 120px;
  left: 0px;
  background-color: rgb(51, 112, 225);
  color: white;
  border: none;
  border-radius: 50px;
}
.radio1 {
  position: relative;
  top: 150px;
  left: 0px;
}
.radio2 {
  position: relative;
  top: 160px;
  left: -70px;
}
.hr1 {
  position: relative;
  width: 100px;
  top: 165px;
  left: -80px;
}
.hr2 {
  position: relative;
  width: 100px;
  top: 124px;
  left: 80px;
}
span {
  position: relative;
  top: 145px;
  font-size: 12px;
}
.else {
  position: relative;
  top: 135px;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  background-color: white;
  border: 1px solid;
}
</style>
