<template>
  <span>
    <el-button
      size="mini"
      icon="el-icon-search"
      @click="dialogTableVisible = true"
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
            property="fundID"
            label="fundID"
            width="150"
          ></el-table-column>
          <el-table-column
            property="positionID"
            label="positionID"
            width="150"
          ></el-table-column>
          <el-table-column
            property="securityID"
            label="securityID"
            width="150"
          ></el-table-column>
          <el-table-column
            property="quantity"
            label="quantity"
            width="150"
          ></el-table-column>
          <el-table-column
            property="datePurchased"
            label="datePurchased"
          ></el-table-column>
        </el-table>
      </el-dialog>
  </span>
</template>

<script>
export default {
  data() {
    return {
      fundDetailsData: [
        {
          fundID: "f0001",
          positionID: "p1009",
          securityID: "s1001",
          quantity: "0",
          datePurchased: "2021-01-01",
        },
      ],
      dialogTableVisible: false,
    };
  },
};
</script>