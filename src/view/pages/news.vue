<template>
  <div>
    <div class="allNews"><button>全部</button></div>
          <!-- 消息列表 -->
          <div class="newsList"><button>刘一琛</button></div>
  </div>
</template>

<script>
export default {
}

</script>

<style lang='css' scoped>
.newsList button {
  width: 100%;
  height: 70px;
  border-radius: 10px;
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
.allNews {
  border: none;
  height: 30px;
  margin-top: 10px;

  position: relative;

  left: -33%;
}
</style>
