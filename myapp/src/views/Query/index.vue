<template>
  <my-layout>
    <el-tabs v-model="activeName" >
      <el-tab-pane label="transaction" name="transaction"
        ><my-transaction
      /></el-tab-pane>
      <el-tab-pane label="trade" name="trade"><my-trade /></el-tab-pane>
      <el-tab-pane label="account" name="account"><my-account /></el-tab-pane>
    </el-tabs>
  </my-layout>
</template>
<script>
import Transaction from "./components/Transaction";
import Trade from "./components/Trade";
import Account from "./components/Account.vue";
import Layout from "../../components/Layout.vue";
export default {
  components: {
    "my-transaction": Transaction,
    "my-trade": Trade,
    "my-account": Account,
    "my-layout": Layout,
  },
  data() {
    return {
      activeName: "transaction",
    };
  },
};
</script>