<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="showFunds"> Funds </el-menu-item>
      <el-menu-item index="userfund">My Funds</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return { activeIndex: "userfund" };
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "showFunds":
          this.$router.push({
            path: "/showFunds",
          });
          break;
        case "userfund":
          this.$router.push({
            path: "/userfund",
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