<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd"
    >
    </el-date-picker>
    <el-button @click="handleQuery">查询</el-button>
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.symble.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="Type" prop="type"> </el-table-column>
      <el-table-column label="Price" prop="price"> </el-table-column>
      <el-table-column label="Symbol" prop="symbol"> </el-table-column>
      <el-table-column label="Volume" prop="volume"> </el-table-column>
      <el-table-column label="Amount" prop="amount"> </el-table-column>
      <el-table-column label="CreateDate" prop="createDate"> </el-table-column>
    </el-table>
  </div>
</template>


<script>
import { getTrade } from "../../../api/querry";
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          tradeId: "tr1001",
          positionId: "p1004",
          symbol: "alibaba",
          type: "stock",
          volume: 1400,
          price: 1458,
          amount: -145266,
          createDate: "2021-08-14 00:00:00",
        },
        {
          id: 2,
          tradeId: "tr1002",
          positionId: "p1005",
          symbol: "alibaba",
          type: "stock",
          volume: 1400,
          price: 1458,
          amount: 145266,
          createDate: "2021-08-14 00:00:00",
        },
      ],
      value1: "",
    };
  },
  components: {},
  methods: {
    handleQuery() {
      console.log(this.value1[0], this.value1[1]);
      getTrade(this.value1[0], this.value1[1]).then(
        (res) => {
          if (res.code === 200) {
            this.tableData = res.data;
            this.$message.success("查询成功");
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

<style scoped>
.el-table {
  width: 100%;
}
</style>