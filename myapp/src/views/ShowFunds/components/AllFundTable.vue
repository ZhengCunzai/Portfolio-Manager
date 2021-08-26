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
    <el-table-column label="FundID" prop="fundid"> </el-table-column>
    <el-table-column label="FundName" prop="name"> </el-table-column>
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
        <fund-details></fund-details>
        <fund-buy></fund-buy>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
import FundDetails from "./FundDetails.vue";
import BuyFund from "./BuyFund.vue";
export default {
  components: {
    "fund-details": FundDetails,
    "fund-buy": BuyFund,
  },
  data() {
    return {
      tableData: [
        {
          fundid: "f0002",
          name: "global growth",
        },
        {
          fundid: "f0001",
          name: "White Wine",
        },
      ],
      search: "",
    };
  },
  
};
</script>

<style scoped>
.el-table {
  width: 100%;
}
</style>