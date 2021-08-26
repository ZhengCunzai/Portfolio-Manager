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
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" class="demo-table-expand">
          <el-form-item label="Type">
            <span>{{ props.row.type }}</span>
          </el-form-item>
          <el-form-item label="CreateDate">
            <span>{{ props.row.createDate }}</span>
          </el-form-item>
          <el-form-item label="UpdateDate">
            <span>{{ props.row.updateDate }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column label="Symbol" prop="symbol"> </el-table-column>
    <el-table-column label="Volume" prop="volume"> </el-table-column>
    <el-table-column label="Price" prop="price"> </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          :placeholder="`PositionID such as:p000${scope.$index}`"
        />
      </template>

      <template slot-scope="scope">
        <el-button :placeholder="`${scope}`" style="display: none"></el-button>
        <fund-sell
          :positionId="scope.row.positionId"
          :price="scope.row.currentPrice"
          :myType="scope.row.type"
          :symbol="scope.row.symbol"
        ></fund-sell>
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
import SellFund from "./SellFund.vue";
import BuyFund from "../../ShowFunds/components/BuyFund.vue";
import { getPersonalInvestment } from "../../../api/fund";
export default {
  components: {
    "fund-sell": SellFund,
    "fund-buy": BuyFund,
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          positionId: "p1001",
          symbol: "IBM",
          volume: 520,
          price: 140,
          type: "ETF",
          createDate: "2021-08-14 00:00:00",
          updateDate: "2021-08-14 00:00:00",
        },
        {
          id: 13,
          positionId: "p1002",
          symbol: "Google",
          volume: 1000,
          price: 2847,
          type: "stock",
          createDate: "2021-08-16 00:00:00",
          updateDate: "2021-08-16 00:00:00",
        },
      ],
      search: "",
    };
  },
  created() {
    getPersonalInvestment().then(
      (res) => {
        if (res.code === 200) {
          this.tableData = res.data;
        } else {
          this.$message.error(res.message);
        }
      },
      (res) => {
        this.$message.error(res.message);
      }
    );
  },
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
  color: #596679;
}
.demo-table-expand label {
  width: 180px;
  line-height: 60px;
  color: #858d99;
  font-weight: bold;
}
.demo-table-expand .el-form-item {
  padding-top: 5px;
  padding-right: 0px;
  padding-bottom: 5px;
  margin-right: 0;
  margin-bottom: 0;
  height: 60px;
  width: 80%;
}
.demo-table-expand .el-form-item span {
  line-height: 60px;
}
</style>
