<template>
  <div>
    <el-container>
      <el-aside class="aside" width="15%"
        ><div class="left">
          <!-- 头像 -->
          <div><img src="" alt="" /></div>
          <!-- 信息 -->
          <div><button><i></i></button></div>
          <!-- toux -->
          <div><button><i></i></button></div>
          <div><button><i></i></button></div>
          <div><button><i></i></button></div>
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
/* .aside{
  background-color: red;
  height: 100vh;
  position: relative;
  top: -60px;
} */

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
  position: relative;
  top: -60px;
}
.left {
  background-color: red;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
  position: relative;
  width: 30%;
  top: 0px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  position: absolute;
  width: 85%;
  left: 15%;
  top: 0px;
  height: 100vh;
}
</style>
