<template>
  <span>
    <el-button
      size="mini"
      icon="el-icon-goods"
      slot="reference"
      type="primary"
      @click="
        BuyFundMethod();
        BuyInsertValume();
      "
      >Buy This</el-button
    >
  </span>
</template>

<script>
import { buyInvestment } from "../../../api/fund";
export default {
  data() {
    return {
      dialogTableVisible: false,
      // visible: false,
    };
  },
  props: {
    positionId: String,
    symbol: String,
    price: Number,
    myType: String,
  },
  methods: {
    BuyInsertValume() {
      this.$prompt("Please input sell volume", "TIPS", {
        confirmButtonText: "sure",
        cancelButtonText: "cancle",
      })
        .then(({ value }) => {
          buyInvestment({
            positionId: this.positionId,
            symbol: this.symbol,
            volume: value,
            price: this.price,
            type: this.myType,
          }).then(
            (res) => {
              if (res.code === 200) {
                this.$message({
                  type: "success",
                  message: "your buy: " + value + " vomules",
                  showClose: true,
                });
              } else {
                this.$message({
                  message: "Buy Failed",
                  type: "error",
                  showClose: true,
                });
              }
            },
            (res) => {
              this.$message.error(res.message);
            }
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "cancleed",
            showClose: true,
          });
        });
    },
    BuyFundMethod() {},
  },
};
</script>