<template>
  <span>
    <el-button
      size="mini"
      icon="el-icon-goods"
      slot="reference"
      @click="
        SellFundMethod();
        SellInsertValume();
      "
      >Sell This</el-button
    >
  </span>
</template>

<script>
import { sellInvestment } from "../../../api/fund";
export default {
  data() {
    return {
      dialogTableVisible: false,
      visible: false,
    };
  },
  props: {
    positionId: String,
    symbol: String,
    price: Number,
    myType: String,
  },

  methods: {
    SellInsertValume() {
      this.$prompt("Please input sell volume", "TIPS", {
        confirmButtonText: "sure",
        cancelButtonText: "cancle",
      })
        .then(({ value }) => {
          sellInvestment({
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
                  message: "your selled: " + value + " vomules",
                  showClose: true,
                });
              } else {
                this.$message({
                  message: "Sell Failed",
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
    SellFundMethod() {},
  },
};
</script>