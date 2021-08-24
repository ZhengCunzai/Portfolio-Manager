<template>
  <my-layout>
    <el-input placeholder="Please input Fund ID" v-model="input" clearable>
    </el-input>
    <el-button @click="SearchFund">Search</el-button>
  </my-layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
export default {
  components: {
    "my-layout": Layout,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    SearchFund() {
      this.$message({
          message: 'Success',
          type: 'success'
        });
    },
  },
};
</script>