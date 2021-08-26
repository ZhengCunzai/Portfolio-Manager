<template>
  <my-layout> 
    <all-fund-table></all-fund-table>
  </my-layout>
</template>


<script>
import Layout from "../../components/Layout.vue";
import AllFundTables from "./components/AllFundTable.vue";
export default {
  components: {
    "my-layout": Layout,
    "all-fund-table": AllFundTables,
  },
};
</script>
