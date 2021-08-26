<template>
  <el-container>
    <el-aside><my-navi/></el-aside>

    <el-container>

      <el-header><my-header /></el-header>
      <el-main><slot></slot></el-main>
      <el-footer><my-footer/></el-footer>
    </el-container>

  </el-container>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NaviMenu from "@/components/NaviMenu";

export default {
  components: {
    "my-navi": NaviMenu,
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
.el-container{
  margin: 0;
  height: 100%;
}
.el-aside {
  color: #333;
  text-align: center;
  width: 400px;
  height: 100%;
  /*margin: 0 auto;*/
}
.el-header {
  width: 100%;
  color: #333;
  text-align: center;
  margin: 0 auto;
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
body > .el-container {
  margin-bottom: 40px;
}
</style>