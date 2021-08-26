<template>
  <div class="my-footer">
    <hr />
    <my-timer />
  </div>
</template>
<script>
import Timer from "./Timer.vue";
export default {
  components: {
    "my-timer": Timer,
  },
};
</script>
<style scoped>
hr {
  width: 100%;
  margin: 10px auto;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(116, 192, 253, 0.87),
    rgba(255, 255, 255, 0)
  );
  border: 0ch;
}
.my-footer{
    color: rgb(120, 181, 250);
}
</style>

