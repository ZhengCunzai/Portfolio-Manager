<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">Search Funds</template>
        <el-menu-item index="1-1">Search ALL Funds</el-menu-item>
        <el-menu-item index="1-2">Search Single Fund</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">My Funds</el-menu-item>
      <el-menu-item index="3">Buy</el-menu-item>
      <el-menu-item index="4">Sell</el-menu-item>
      <el-menu-item index="5">Logout</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "1-1":
          this.$router.push({
            path: "/showFunds",
          });
          break;
        case "1-2":
          this.$router.push({
            path: "/showOneFund",
          });
          break;
        case "2":
          this.$router.push({
            path: "/userfund",
          });
          break;
        case "3":
          this.$router.push({
            path: "/buy",
          });
          break;
        case "4":
          this.$router.push({
            path: "/sell",
          });
          break;
        case "5":
          this.$confirm("Are you sure to logout?", "Verify", {
            distinguishCancelAndClose: true,
            confirmButtonText: "Logout!",
            cancelButtonText: "Cancle",
            type: "warning",
          })
            .then(() => {
              this.$message({
                type: "success",
                message: "Success Logout!",
              });
              this.$router.push({
                path: "/login",
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "Cancled",
              });
            });
          break;
        default:
          break;
      }
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
</style>