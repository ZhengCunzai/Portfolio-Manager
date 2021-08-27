<template>
  <my-layout>
    <h1>Market Details (IBM)</h1>
    <my-linechart></my-linechart>
    <h1> Portfolio (investment account)</h1>
    <my-piechart></my-piechart>
    <h1> Profit ((investment account))</h1>
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