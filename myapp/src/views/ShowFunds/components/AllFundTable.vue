<template>
  <el-table
    :data="
      tableData.filter(
        (data) =>
          !search || data.symble.toLowerCase().includes(search.toLowerCase())
      )
    "
    style="width: 100%"
  >
    <el-table-column label="Symbol" prop="symbol"> </el-table-column>
    <el-table-column label="Type" prop="type"> </el-table-column>
    <el-table-column label="TodayOpenPrice" prop="todayOpenPrice">
    </el-table-column>
    <el-table-column label="CurrentPrice" prop="currentPrice">
    </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          :placeholder="`Please input FundID to search such as:f000${scope.$index}`"
        />
      </template>

      <template slot-scope="scope">
        <el-button :placeholder="`${scope}`" style="display: none"></el-button>
        <fund-details :symbol="`${scope.row.symbol}`"></fund-details>
        <fund-buy
          :positionId="scope.row.positionId"
          :price="scope.row.currentPrice"
          :myType="scope.row.type"
          :symbol="scope.row.symbol"
        ></fund-buy>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
import FundDetails from "./FundDetails.vue";
import BuyFund from "./BuyFund.vue";
import { getAllInvestment } from "../../../api/fund";
export default {
  components: {
    "fund-details": FundDetails,
    "fund-buy": BuyFund,
  },
  data() {
    return {
      tableData: [
        {
          symbol: "Alibaba",
          type: "stock",
          todayOpenPrice: 142,
          currentPrice: 235,
        },
        {
          symbol: "Alibaba",
          type: "stock",
          todayOpenPrice: 142,
          currentPrice: 235,
        },
      ],
      search: "",
    };
  },
  created() {
    getAllInvestment().then(
      (res) => {
        if (res.code === 200) {
          this.tableData = res.data;
        } else {
          this.$message.error({ duration: 500, message: res.message});
        }
      },
      (res) => {
        this.$message.error({ duration: 500, message: res.message});
      }
    );
  },
};
</script>

<style scoped>
.el-table {
  width: 100%;
}
</style>