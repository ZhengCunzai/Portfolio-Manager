<template>
  <div>
    <body style="font-size: 40px; text-color:#303133; text-colorline-height: 50px"> Citi Portfolio System     <el-avatar style="margin-left: 60px;margin-top: 10px;" :size="40" :src="circleUrl"></el-avatar></body>
  </div>
</template>

<script>
export default {
  data() {

    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    }
  },
  methods: {
  },
};
</script>

<style scoped>
.body{
  width: 80%;
}

</style>