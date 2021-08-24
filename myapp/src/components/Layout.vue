<template>
  <el-container>
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
};
</script>

<style>
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  width: 100%;
  text-align: center;
  line-height: 60px;
  background: #77bbff;
  color: white;
}
.el-main {
  padding-bottom: 100px;
  margin: 0 auto;
  color: #333;
  text-align: center;
  line-height: 80px;
}
</style>