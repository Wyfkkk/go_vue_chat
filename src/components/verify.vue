<template>
  <div class="hello">
    <div class="box">
      <h1>输入验证码</h1>
      <div class="captcha">
        <input
          v-for="(c, index) in ct"
          :key="index"
          type="number"
          v-model="ct[index]"
          ref="input"
          :style="{ borderBottomColor: index <= cIndex ? '#333' : '' }"
          @input="
            (e) => {
              onInput(e.target.value, index);
            }
          "
          @keydown.delete="
            (e) => {
              onKeydown(e.target.value, index);
            }
          "
          @focus="onFocus"
          :disabled="loading"
        />
      </div>
      <a href="#" class="get">重新获取验证码</a>
      <a href="#" class="pwdEnter">密码登录</a>
      <div class="find"><p>手机号已停用？<a href="#">找回账号</a></p></div>
      <el-button type="primary" class="btn">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      ct: ["", "", "", "", "", ""],
      loading: false,
    };
  },
  computed: {
    ctSize() {
      return this.ct.length;
    },
    cIndex() {
      let i = this.ct.findIndex((item) => item === "");
      i = (i + this.ctSize) % this.ctSize;
      return i;
    },
    lastCode() {
      return this.ct[this.ctSize - 1];
    },
  },
  watch: {
    cIndex() {
      this.resetCaret();
    },
    lastCode(val) {
      if (val) {
        console.log("this.ctSize", this.ctSize);
        this.$refs.input[this.ctSize - 1].blur();
        this.sendCaptcha();
      }
    },
  },
  mounted() {
    this.resetCaret();
  },
  methods: {
    onInput(val, index) {
      this.msg = "";
      val = val.replace(/\s/g, "");
      if (index == this.ctSize - 1) {
        this.ct[this.ctSize - 1] = val[0]; // 最后一个码，只允许输入一个字符。
      } else if (val.length > 1) {
        let i = index;
        for (i = index; i < this.ctSize && i - index < val.length; i++) {
          this.ct[i] = val[i];
        }
        this.resetCaret();
      }
    },
    // 重置光标位置。
    resetCaret() {
      this.$refs.input[this.ctSize - 1].focus();
    },
    onFocus() {
      // 监听 focus 事件，将光标重定位到“第一个空白符的位置”。
      let index = this.ct.findIndex((item) => item === "");
      index = (index + this.ctSize) % this.ctSize;
      console.log(this.$refs.input);
      this.$refs.input[index].focus();
    },
    onKeydown(val, index) {
      if (val === "") {
        // 删除上一个input里的值，并对其focus。
        if (index > 0) {
          this.ct[index - 1] = "";
          this.$refs.input[index - 1].focus();
        }
      }
    },
    sendCaptcha() {
      console.log();
      this.msg = `发送验证码到服务器：${this.ct.join("")}`;
      // 此时无法操作 input。。
      this.loading = true;
      setTimeout(() => {
        this.msg = "验证码错误";
        this.loading = false;
        this.$nextTick(() => {
          this.reset();
        });
      }, 3000);
    },

    reset() {
      // 重置。一般是验证码错误时触发。
      this.ct = this.ct.map((item) => "");
      this.resetCaret();
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
h1 {
  font-size: 1.5em;
  position: relative;
  top: 70px;
}
.captcha {
  display: flex;
  justify-content: center;
  margin-top: 120px;
}
input {
  margin-right: 20px;
  width: 30px;
  height: 30px;
  text-align: center;
 
  border: 1px solid rgb(208, 211, 214);
  font-size: 16px;
  outline: none;
  text-indent: 5px;
  background-color: transparent;
}
input::-webkit-inner-spin-button {
                appearance: none;
            }
input:last-of-type {
  margin-right: 0;
}
input:disabled {
  color: #000;
  background-color: #fff;
}
.msg {
  text-align: center;
}
.get{
  position: relative;
  top: 50px;
  left: -50px;
}
.pwdEnter{
  position: relative;
  top: 80px;
  left: -162px;
}
.find{
  position: relative;
  top: 90px;
  left: -50px;
}
.btn{
  width: 200px;
  height: 50px;
  position: relative;
  top: 150px;
  left: 0px;
  background-color:rgb(51, 112, 225);
  color: white;
  border: none;
  border-radius: 50px;
}
</style>
