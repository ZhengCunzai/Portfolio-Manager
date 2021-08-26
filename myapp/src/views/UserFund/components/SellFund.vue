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
        icon="el-icon-goods"
        slot="reference"
        @click="SellFundMethod"
        >Sell This</el-button
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
    SellFundMethod() {},
    sureMessage() {
      this.$message({
        message: "Sell Successful",
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