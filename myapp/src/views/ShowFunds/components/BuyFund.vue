<template>
  <span>
    <el-popover
      icon="el-icon-message-solid"
      placement="top"
      width="160"
      v-model="visible"
    >
      <p>Sure to Buy this Fund？</p>
      <div style="text-align: right; margin: 0">
        <el-button
          size="mini"
          @click="
            cancleMessage();
            visible = false;
          "
          >Cancle</el-button
        >
        <el-button
          type="primary"
          size="mini"
          @click="
            sureMessage();
            visible = false;
          "
          >Sure</el-button
        >
      </div>

      <el-button
        size="mini"
        icon="el-icon-s-goods"
        slot="reference"
        type="primary"
        @click="BuyFundMethod"
        >Buy This</el-button
      >
    </el-popover>
  </span>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      visible: false,
    };
  },
  methods: {
    BuyFundMethod() {},
    sureMessage() {
      this.$message({
        message: "Buy Successful",
        type: "success",
        showClose: true,
      });
    },
    cancleMessage() {
      this.$message({
        message: "Cancled",
        type: "warning",
        showClose: true,
      });
    },
  },
};
</script>