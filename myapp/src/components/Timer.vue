<template>
  <span class="timer">{{ result }}</span>
</template>
<script>
export default {
  data() {
    //接收当前时间
    const currentDate = this.getDate({
      format: true,
    });
    //双向绑定
    return {
      result: currentDate,
    };
  },
  methods: {
    // 获取当前时间
    getDate() {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      month = month < 10 ? "0" + month : month; //月小于10，加0
      day = day < 10 ? "0" + day : day; //day小于10，加0
      return `${year}-${month}-${day}`;
    },
  },
};
</script>
<style scoped>
.timer{
    height: 25px;
}
</style>

