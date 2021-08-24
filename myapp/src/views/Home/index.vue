<template>
  <div>
    <div>Citi Fund Management System</div>
    <el-button type="primary" @click="Start">Start</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    Start() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>