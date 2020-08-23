<template>
  <div>
    <h1>This is Aaron comp!!! </h1>
    <div class="row">{{msg}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '动态数据'
    }
  }
}
</script>

<style scoped>
.row {
  width: 200px;
  height: 120px;
  line-height: 120px;
  margin: 0 auto;
  background: #f50;
}
</style>