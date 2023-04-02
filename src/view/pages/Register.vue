<template>
  <div class="container">
    <div class="main">
      <!-- 整个注册盒子 -->
      <div class="loginbox">
        <!-- 左侧的注册盒子 -->
        <div class="loginbox-in">
          <div class="userbox">
            <i class="iconfont">&#xe633;</i>
            <input class="user" id="user" v-model="email" placeholder="邮箱" />
          </div>
          <br />
          <div class="mobilebox">
            <span class="iconfont">&#xe82b;</span>
            <input
              class="pwd"
              id="password"
              v-model="mobile"
             
              placeholder="手机号码"
            />
          </div>
          <br />
          <div class="pwdbox">
            <span class="iconfont">&#xe82b;</span>
            <input
              class="pwd"
              id="password"
              v-model="password"
              type="password"
              placeholder="密码"
            />
          </div>
          <br />
          <div class="repwdbox">
            <span class="iconfont">&#xe82b;</span>
            <input
              class="pwd2"
              id="re_password"
              v-model="rePassword"
              type="password"
              placeholder="确认密码"
            />
          </div>

          <div class="verbox">
            <span class="iconfont">&#xe82b;</span>
            <input
              class="pwd2"
              id="password"
              v-model="email_code"
              placeholder="验证码"
            />
            <button class="getVer" @click="getTestCode()">获取验证码</button>
          </div>
          <br />
          <div class="verify">
            <button class="verifybtn" @click="getRegister()">验证邮箱</button>
          </div>

          <br />
          <button type="primary" class="register_btn" @click="toLogin">
            Login
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
import axios from "axios";
export default {
  name: "Register",
  props: {},
  data() {
    return {
      email: "",
      mobile: "",
      password: "",
      rePassword:"",
      email_code:''
    };
  },
  methods: {
    next(){
      this.$router.push({ path: "/verify" });
    },
    toLogin(){
      this.$router.push({ path: "/Login" });
    },
    getTestCode() {
      axios({
        method: "post", //请求方式
        url: "http://192.168.1.115:8084/api/v1/email/sendEmail", //请求的接口
        data: {
          //请求传递的数据
          email: this.email,
        },
        //其他相关配置
      })
        .then((res) => {
          console.log(res); //请求成功的结果
        })
        .catch((error) => {
          console.log(error); //请求失败的结果
        });
    },
    getRegister(){
      axios({
        method:'post',
        url: "http://192.168.1.115:8084/api/v1/register",
        data:{
          email:this.email,
          mobile:this.mobile,
          password:this.password,
          rePassword:this.rePassword,
          email_code:this.email_code
        }
      }).then((res)=>{
        console.log(res);
      }).then((error)=>{
        console.log(error);
      })
    }
  },
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id 3967734 */
  src: url("//at.alicdn.com/t/c/font_3967734_jjtnlbg5j6.woff2?t=1679405534052")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3967734_jjtnlbg5j6.woff?t=1679405534052")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3967734_jjtnlbg5j6.ttf?t=1679405534052")
      format("truetype");
}
.verbox {
  height: 30px;
  width: 215px;
  position: absolute; 
  top: 235px;
  display: flex;
  margin-left: 25px;
}
.verbox input{
  width: 100px;
}.mobilebox{
  height: 30px;
  width: 225px;
  position: absolute; 
  top: 120px;
  display: flex;
  margin-left: 25px;
}
.getVer{
  width: 190px;
  height: 30px;
  font-size: 14px;
  color: black;
  border: none;
  background-color: #89ab9e;
  position: relative;
  top: -5px;
}.getVer:hover {
  font-weight: bold;
  cursor: pointer;
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
.verifybtn {
  background-color: transparent;
  margin-top: 20px;
  border-bottom: 1px solid black;
}
.loginbox-in {
  background-color: #89ab9e;
  width: 240px;
  position: relative;
}
.userbox {
  margin-top: 80px;
  height: 30px;
  width: 225px;
  display: flex;
  margin-left: 25px;
}
.pwdbox {
  height: 30px;
  width: 225px;
  display: flex;
  margin-left: 25px;
position: relative;
top: 0px;
}
.repwdbox {
  height: 30px;
  width: 225px;
  display: flex;
  margin-left: 25px;
  position: relative;
  top: -15px;
}

.background {
  width: 570px;
  background-image: url("../../assets/微信图片_20230321170449.png");
  background-size: cover;
  background-position: 55%;

  font-family: sans-serif;
}
.title {
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  color: black;
}
.title:hover {
  font-size: 21px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}
.iconfont{
  position: relative;
  top: -10px;
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
  width: 80%;
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
.register_btn:hover {
  font-weight: bold;
  cursor: pointer;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 22px;
  color: #4e655d;
  margin-right: 10px;
  margin-top: 3px;
}

.icon-key:before {
  content: "\e775";
}

.icon-account:before {
  content: "\e817";
}
</style>