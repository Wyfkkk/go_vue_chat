<template>
  <div class="container">
    <div class="main">
      <!-- 整个注册盒子 -->
      <div class="loginbox">
        <!-- 左侧的注册盒子 -->
        <div class="loginbox-in">
          <div class="userbox">
            <!-- <span class="iconfont">&#xe682;</span> -->
            <i class="iconfont">&#xe633;</i>
            <input class="user" id="user" v-model="email" @blur="getEmail()" placeholder="邮箱" />
          </div>
          <br />
          <div class="pwdbox">
            <span class="iconfont">&#xe82b;</span>
            <input
              class="pwd"
              id="password"
              v-model="pwd"
              type="password"
              placeholder="密码"
            />
          </div>
          <br />
          <div class="pwdbox">
            <span class="iconfont">&#xe82b;</span>
            <input
              class="pwd"
              id="re_password"
              v-model="repwd"
              type="password"
              placeholder="确认密码"
            />
          </div>

          <div class="verify">
            <button class="verifybtn">Login</button>
          </div>

          <br />
          <button type="primary" class="register_btn" @click="toVerify()">用验证码登录</button>
          <button type="primary" class="register_btn" @click="toRegister()">
           注册
          </button>
          <button type="primary" class="register_btn" @click="toRegister()">
            修改密码
          </button>
        </div>

        <!-- 右侧的注册盒子 -->
        <div class="background">
          <div class="title">Welcome to 飞猪chat-room</div>
        </div>
      </div>
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
      pwd: "",
      repwd:''
    };
  },
  methods: {
    toVerify() {
      let email = this.email
      this.$router.push({ path: "/verify" });
      
    },
    toRegister(){
      this.$router.push({ path: "/Register" });
    },
    getEmail(){
      console.log(this.email);
    }
  },
};
</script>
<style>
@font-face {
  font-family: 'iconfont';  /* Project id 3967734 */
  src: url('//at.alicdn.com/t/c/font_3967734_jjtnlbg5j6.woff2?t=1679405534052') format('woff2'),
       url('//at.alicdn.com/t/c/font_3967734_jjtnlbg5j6.woff?t=1679405534052') format('woff'),
       url('//at.alicdn.com/t/c/font_3967734_jjtnlbg5j6.ttf?t=1679405534052') format('truetype');
}
.loginbox {
  display: flex;
  position: absolute;
  width: 800px;
  height: 400px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 #4e655d;
}
.verifybtn{
  background-color: transparent;
  margin-top: 20px;
  border-bottom: 1px solid black;
}
.loginbox-in {
  background-color: #89ab9e;
  width: 240px;
}
.userbox {
  margin-top: 120px;
  height: 30px;
  width: 230px;
  display: flex;
  margin-left: 25px;
}
.pwdbox {
  height: 30px;
  width: 225px;
  display: flex;
  margin-left: 25px;
}

.background {
  width: 570px;
  background-image: url("../assets/微信图片_20230321170449.png");
  background-size: cover;
  font-family: sans-serif;
}
.title {
  margin-top: 320px;
  font-weight: bold;
  font-size: 20px;
  color: black;
}
.title:hover {
  font-size: 21px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}
.uesr-text {
  position: left;
}
input {
  outline-style: none;
  border: 0;
  border-bottom: 1px solid #e9e9e9;
  background-color: transparent;
  height: 20px;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}
/* input::-webkit-input-placeholder{
  color:#E9E9E9;
} */
input:focus {
  border-bottom: 2px solid #445b53;
  background-color: transparent;
  transition: all 0.2s ease-in;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}
input:hover {
  border-bottom: 2px solid #445b53;
  background-color: transparent;
  transition: all 0.2s ease-in;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}

input:-webkit-autofill {
  /* 修改默认背景框的颜色 */
  box-shadow: 0 0 0px 1000px #89ab9e inset !important;
  /* 修改默认字体的颜色 */
  -webkit-text-fill-color: #445b53;
}

input:-webkit-autofill::first-line {
  /* 修改默认字体的大小 */
  font-size: 15px;
  /* 修改默认字体的样式 */
  font-weight: bold;
}
.log-box {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  width: 190px;
  margin-left: 30px;
  color: #4e655d;
  margin-top: -5px;
  align-items: center;
}
.log-box-text {
  color: #4e655d;
  font-size: 12px;
  text-decoration: underline;
}
.login_btn {
  background-color: #5f8276; /* Green */
  border: none;
  color: #fafafa;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  border-radius: 20px;
  outline: none;
}
.login_btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  background-color: #0b5137;
  transition: all 0.2s ease-in;
}

.warn {
  margin-top: 60px;
  /* margin-right:120px; */
  margin-left: -120px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 17px;
}

.register_btn {
  background-color: transparent; /* Green */
  border: none;
  text-decoration: none;
  font-size: 12px;
  /* border-radius: 20px;   */
  color: #4e655d;
  font-size: 12px;
  text-decoration: underline;
  display: flex;
  margin-left: 25px;
  outline: none;
}
.register_btn:hove
r {
  font-weight: bold;
  cursor: pointer;
}


.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 20px;
  color: #4e655d;
  margin-right: 10px;
  margin-top: 1px;
  position: relative;
  top: -8px;
}

.icon-key:before {
  content: "\e775";
}

.icon-account:before {
  content: "\e817";
}
</style>