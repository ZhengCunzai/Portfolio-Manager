<template>
  <my-layout>
    <div>Citi Fund Management System</div>
    <my-linechart></my-linechart>
    <my-piechart></my-piechart>
    <my-profitchart></my-profitchart>
<!--    <el-button type="primary" @click="Start">Start</el-button>-->
  </my-layout>
</template>
<script>
import Layout from "../../components/Layout.vue";
import Piechart from "../../components/Piechart.vue";
import Linechart from "../../components/Linechart.vue";
import Profitchart from "../../components/Profitchart.vue";
export default {
  components: {
    "my-layout": Layout,
    "my-piechart": Piechart,
    "my-linechart": Linechart,
    "my-profitchart": Profitchart,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    // Start() {
    //   this.$router.push({
    //     path: "/dashboard",
    //   });
    // },
  },
};
</script>