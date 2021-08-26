<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose">
    <el-image fit="contain" :src="require('../assets/R-C.png')"></el-image>
    <el-menu-item index="/home">
      <i class="el-icon-location"></i>
      <span>Home</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">My Investment</span>
      </template>
      <el-menu-item-group>
        <template slot="title">CITI</template>
        <el-menu-item index="2-1">Portfolio</el-menu-item>
        <el-menu-item index="/profit">Profit analysis</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">My Fund</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/showFunds">Funds</el-menu-item>
        <el-menu-item index="/userfund">My Fund</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="4">
      <i class="el-icon-document"></i>
      <span slot="title">My Cash</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-document"></i>
      <span slot="title">Market</span>
    </el-menu-item>

    <el-menu-item index="6" disabled>
      <i class="el-icon-setting"></i>
      <span slot="title">E-Trading</span>
    </el-menu-item>
    <el-menu-item index="/about">
      <i class="el-icon-setting"></i>
      <span slot="title">About</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {

      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case "3-1":
          this.$router.push({
            path: "/showFunds",
          });
          break;
        case "3-2":
          this.$router.push({
            path: "/userfund",
          });
          break;
        case "7":
          this.$router.push({
            path: "/about",
          });
          break;
        default:
          break;
      }
      console.log(key, keyPath);
    },
  },
  data() {
    return {
      url: "../assets/R-C.png",
      activeIndex: "userfund"
    };
  },
}
</script>

<style scoped>
.el-image {
  /*weight: 160px;*/
  margin: 30px 80px ;
}
.el-menu {
  text-align: left;
  font-size: large !important;
  height: 100%;
  /*padding: 0px 30px ;*/
}
</style>