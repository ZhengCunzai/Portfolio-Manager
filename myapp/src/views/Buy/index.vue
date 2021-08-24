<template>
  <el-container>
    <my-layout>
      <el-input placeholder="Please Input FundID" v-model="input" clearable>
      </el-input>
      <el-button type="primary" icon="el-icon-s-goods" @click="BuySubmit"
        >Buy This Fund</el-button>
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
    BuySubmit() {
     this.$confirm("Are you sure to Buy this Fund?", "Verify", {
       distinguishCancelAndClose: true,
        confirmButtonText: "BUY!",
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