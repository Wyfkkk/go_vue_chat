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
            <button @click="showNews()"><i></i>消息</button>
          </div>
          <div class="addressList">
            <button @click="showAddressList()"><i></i>通讯录</button>
          </div>
          <!-- 多个用户身份 -->
          <ul class="accountList"></ul>
          <!-- 登出 -->
          <div class="logOut"><button>退出登录</button></div>
        </div>
        <div class="asideRight">
         <news v-show="this.isNews==1"></news>
         <addressList  v-show="this.isAddressList==1"></addressList>
        </div>
      </el-aside>
      <el-main>
        <div class="newsContainer">
          <div class="top">{{}}</div>
          <div class="mid"></div>
          <div class="bot"></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import news from '@/view/pages/news'
import addressList from '@/view/pages/addressList'
export default {
  name:'home',
  data(){
    return {
      isNews:1,
      isAddressList:0,
      userList:[]
    }
  },
  components:{
    news,
    addressList
  },
  methods:{
    showNews(){
      this.isNews = 1
      this.isAddressList = 0
    },
    showAddressList(){
      this.isNews = 0
      this.isAddressList = 1
    },
    logOut(){
      axios({
        method: "get", //请求方式
        url: "http://127.0.0.1:8084/api/v1/user/logout", //请求的接口
        data: {
          //请求传递的数据
          token: localStorage.getItem('token'),
        },
        //其他相关配置
      })
        .then((res) => {
          console.log(res); //请求成功的结果
        })
        .catch((error) => {
          console.log(error); //请求失败的结果
        });
    }
  }
};
</script>

<style lang='css' scoped>
.el-container {
  width: 100%;
}
       
.newsContainer{
  background-color: rgb(55, 0, 255);
  width: 100%;
  height: 100%;

}
.newsList button {
  width: 100%;
  height: 70px;
  border-radius: 10px;
}
.top{
  width: 100%;
  height: 100px;
  background-color: black;

}
.mid{
  width: 100%;
  height: 74.5%;
  background-color: pink;
}
.bot{
  width: 100%;
  height: 100px;
  background-color: black;
  
}
.logOut button{
  height: 100px;
  background-color: rgb(57, 70, 101);
  border: none;
  

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
