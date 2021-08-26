<template>
  <el-table
    :data="
      tableData.filter(
        (data) =>
          !search || data.fundid.toLowerCase().includes(search.toLowerCase())
      )
    "
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" class="demo-table-expand">
          <el-form-item label="type">
            <span>{{ props.row.type }}</span>
          </el-form-item>
          <el-form-item label="createDate">
            <span>{{ props.row.createDate }}</span>
          </el-form-item>
          <el-form-item label="updateDate">
            <span>{{ props.row.updateDate }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column label="positionID" prop="positionID"> </el-table-column>
    <el-table-column label="symbol" prop="symbol"> </el-table-column>
    <el-table-column label="volume" prop="volume"> </el-table-column>
    <el-table-column label="prices" prop="prices"> </el-table-column>
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
        <fund-sell></fund-sell>
        <fund-buy></fund-buy>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import SellFund from "./SellFund.vue";
import BuyFund from "../../ShowFunds/components/BuyFund.vue";
export default {
  components: {
    "fund-sell": SellFund,
    "fund-buy": BuyFund,
  },
  data() {
    return {
      tableData: [
        {
          positionID: "p1001",
          symbol: "IВM",
          volume: "520",
          prices: "140",
          type: "ETF",
          createDate: "2021-08-14",
          updateDate: "2021-08-14",
        },
        {
          positionID: "p1002",
          symbol: "Google",
          volume: "1000",
          prices: "2847",
          type: "stock",
          createDate: "2021-08-16",
          updateDate: "2021-08-16",
        },
      ],
      search: "",
    };
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
