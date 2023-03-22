<template>
  <div>
    <el-container>
      <el-aside class="aside" width="30%"
        ><div class="left">
          <!-- 头像 -->
          <div class="img">
            <a href=""><img src="../assets/logo.png" alt="" /></a>
          </div>
          <!-- 信息 -->
          <div class="news">
            <button><i></i>消息</button>
          </div>
          <!-- toux -->
          <div class="addressList">
            <button><i></i>通讯录</button>
          </div>
          <!-- <div><button><i></i></button></div>
          <div><button><i></i></button></div> -->
        </div>
        <div class="asideRight">
          <div class="allNews"><button>全部</button></div>
          <!-- 消息列表 -->
          <div class="newsList"><button>刘一琛</button></div>
        </div>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang='css' scoped>
.el-container {
  width: 100%;
}
.newsList button {
  width: 100%;
  height: 70px;
  border-radius: 10px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;

  height: 100vh;
  position: relative;
  top: -60px;
  width: 400px;
  /* width: 30%; */
}
.left {
  background-color: rgb(57, 70, 101);
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
  position: relative;
  width: 20%;
  top: 0px;
  margin: 0px;
}
.el-main {
  background-color: black;
  color: #333;
  text-align: center;
  line-height: 160px;
  position: absolute;
  width: 70%;
  left: 30%;
  top: 0px;
  height: 100vh;
}
.img img {
  width: 50px;
  position: relative;
  top: -30px;
}
.news button {
  position: relative;
  top: -150px;
  /* background-color: black; */
  height: 60px;
  width: 100%;
  font-size: 14px;
  border-radius: 10px;
  background-color: rgb(57, 70, 101);
  /* background-color: rgb(190, 193, 201); */
  color: rgb(190, 193, 201);
  border: none;
}
.addressList button {
  position: relative;
  top: -230px;
  width: 100%;
  /* background-color: black; */
  height: 60px;
  font-size: 14px;
  color: rgb(190, 193, 201);
  border-radius: 10px;
  background-color: rgb(57, 70, 101);
  border: none;
  /* background-color: rgb(190, 193, 201); */
}
.asideRight {
  width: 80%;
  background-color: red;
  position: absolute;
  left: 20%;
  top: 0%;
  height: 100%;
  /* top: 0px;
  left: 58px; */
}
.addressList button:hover {
  background-color: rgb(51, 122, 266);
}
.allNews {
  border: none;
  height: 30px;
  margin-top: 10px;

  position: relative;

  left: -33%;
}
.news button:hover {
  background-color: rgb(51, 122, 266);
}
.aside {
  width: 30%;
}
</style>
