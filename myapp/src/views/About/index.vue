<template>
  <my-layout>
    <el-skeleton :rows="6" animated />
  </my-layout>

</template>

<script>
import Layout from "@/components/Layout";

export default {
  components: {
    "my-layout": Layout,
  }
}
</script>

<style scoped>

</style>