<template>
  <el-container>
    <my-layout>
      <el-input placeholder="Please Input FundID" v-model="input" clearable>
      </el-input>
      <el-button type="primary" icon="el-icon-goods" @click="SellSubmit"
        >Sell This Fund</el-button
      >
    </my-layout>
  </el-container>
</template>
<script>
import Layout from "../../components/Layout.vue";
export default {
  components: {
    "my-layout": Layout,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    SellSubmit() {
      this.$confirm("Are you sure to Sell this Fund?", "Verify", {
        distinguishCancelAndClose: true,
        confirmButtonText: "SELL!",
        cancelButtonText: "Cancle",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "Success!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Cancled",
          });
        });
    },
  },
};
</script>