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
      <el-table-column label="Income" prop="income"> </el-table-column>
      <el-table-column label="Spend" prop="spend"> </el-table-column>
      <el-table-column label="Balance" prop="balance"> </el-table-column>
    </el-table>
  </div>
</template>


<script>
import { getAccount } from "../../../api/querry";
export default {
  data() {
    return {
      tableData: [
        {
          income: 1482,
          spend: "-12000",
          balance: 12000,
        },
      ],
      value1: "",
    };
  },
  components: {},
  methods: {
    handleQuery() {
      console.log(this.value1[0], this.value1[1]);
      getAccount(this.value1[0], this.value1[1]).then(
        (res) => {
          if (res.data.code === 200) {
            this.tableData = res.data.data;
            this.$message.success({ duration: 500, message: "查询成功" });
          } else {
            this.$message.error({ duration: 500, message: res.data.message });
          }
        },
        (res) => {
          this.$message.error({ duration: 500, message: res.data.message });
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