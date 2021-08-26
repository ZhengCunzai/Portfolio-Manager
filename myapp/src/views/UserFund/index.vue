<template>
  <my-layout>
    <fund-table></fund-table>
    <el-backtop></el-backtop>
  </my-layout>
</template>


<script>
import Layout from "../../components/Layout.vue";
import MyFundTable from "./components/MyFundTable.vue";

export default {
  components: {
    "my-layout": Layout,
    "fund-table": MyFundTable,
  },
};
</script>

<style scoped>
.el-table {
  width: 100%;
}
</style>