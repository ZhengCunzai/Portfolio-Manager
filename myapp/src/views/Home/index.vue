<template>
  <my-layout>
    <div>Citi Fund Management System</div>
    <el-button type="primary" @click="Start">Start</el-button>
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
    Start() {
      this.$router.push({
        path: "/dashboard",
      });
    },
  },
};
</script>