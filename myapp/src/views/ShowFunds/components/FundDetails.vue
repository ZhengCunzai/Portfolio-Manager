<template>
  <span>
    <el-button size="mini" icon="el-icon-search" @click="handleDetail"
      >Show Details</el-button
    >
    <el-dialog
      title="Fund Details"
      :visible.sync="dialogTableVisible"
      width="80%"
      center
    >
      <el-table :data="fundDetailsData">
        <el-table-column
          property="symbol"
          label="Symbol"
          width="150"
        ></el-table-column>
        <el-table-column
          property="type"
          label="Type"
          width="150"
        ></el-table-column>
        <el-table-column
          property="openPrice"
          label="OpenPrice"
          width="150"
        ></el-table-column>
        <el-table-column
          property="closePrice"
          label="ClosePrice"
          width="150"
        ></el-table-column>
        <el-table-column
          property="createDate"
          label="CreateDate"
        ></el-table-column>
      </el-table>
    </el-dialog>
  </span>
</template>

<script>
import { getInvestmentDetail } from "../../../api/fund";
export default {
  data() {
    return {
      fundDetailsData: [],
      dialogTableVisible: false,
    };
  },
  props: {
    symbol: String,
  },
  methods: {
    handleDetail() {
      this.dialogTableVisible = true;
      getInvestmentDetail(this.symbol).then(
        (res) => {
          if (res.code === 200) {
            this.fundDetailsData = res.data;
          } else {
            this.$message.error(res.message);
          }
        },
        (res) => {
          this.$message.error(res.message);
        }
      );
    },
  },
};
</script>