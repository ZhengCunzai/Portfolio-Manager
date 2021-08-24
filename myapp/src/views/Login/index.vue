<template>
  <div>
    <el-input placeholder="Please Input Your Email" v-model="input" clearable>
    </el-input>
    <el-input
      placeholder="Please Input Your Password"
      v-model="input"
      show-password
    ></el-input>
    <el-button @click="LOGIN"> Login </el-button>

    <el-button @click="dialogFormVisible = true">New User</el-button>
    <el-dialog title="New User Information" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="First Name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确 定
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      input: "",
    };
  },
  methods: {
    LOGIN() {
      this.$router.push({
        path: "/showOneFund",
      });
    },
  },
};
</script>