<template>
  <div class="container">
    <div class="box-title">宣传栏</div>
    <div class="box-list">
      <ul>
        <li v-for="(item, index) in publicityList" :key="index">
          <div class="p-title">{{ item.title }}</div>
          <div class="des">{{ item.des }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["publicityList"]);
</script>

<style scoped lang="scss">
.box-title {
  border-bottom: 1px solid rgb(240, 240, 240);
  margin: 5px 25px;
}

.container {
  min-height: 180px;
  margin-bottom: 15px;
  background-color: white;
  border: 1px solid rgb(240, 240, 240);
}

ul li {
  margin: 10px 25px;
  border-bottom: 2px solid rgb(240, 240, 240);
}

.p-title {
  font-weight: bold;
  font-size: 14px;
  color: rgb(45, 167, 120);
}

.des {
  color: rgb(114, 123, 130);
  margin-top: 5px;
  font-size: 12px;
}
</style>
