<template>
  <el-container>
    <el-image fit="contain" :src="require('../assets/R-C.png')"></el-image>
    <el-header><my-header /></el-header>
    <el-main><slot></slot></el-main>
    <el-footer>
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    "my-header": Header,
    "my-footer": Footer,
  },
  data() {
    return {
      url: "../assets/R-C.png",
    };
  },
};
</script>

<style>
.el-header {
  color: #333;
  text-align: center;
  
}
.el-footer {
  /* height: 80px !important; */
  width: 100%;
  text-align: center;
  /* color: white; */
}
.el-main {
  width: 100%;
  padding-bottom: 100px;
  margin: 0 auto;
  color: #333;
  text-align: center;
  line-height: 80px;
  min-height: 400px;
}
.el-image {
  
  height: 100px;
  margin: 0 auto;
}
</style>