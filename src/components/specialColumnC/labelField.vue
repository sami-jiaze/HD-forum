<template>
  <div class="tag-container">
    <div class="tag-header">
      <div style="margin: 5px 0 0 15px">Hot tags</div>
      <div class="tag-all">Total ></div>
    </div>
    <hr style="border: 1px solid #f4f4f4" />
    <div class="tag-content">
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        :type="tag.type"
        class="tag-item"
        @click="taptag(tag.name)"
      >
        {{ tag.name }}
      </el-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const tags = ref([
  { name: "Mathematics and Computer", type: "" },
  { name: "Physical information", type: "success" },
  { name: "Electrical", type: "info" },
  { name: "Machinery", type: "warning" },
  { name: "Economic management", type: "warning" },
  { name: "Maynooth", type: "danger" },
]);

const taptag = function (tagName: string) {
  alert(tagName);
}
</script>

<style lang="scss" scoped>
.tag-container {
  width: 300px;
  height: 205px;
  margin-top: 25px;
  background-color: #fff;
  border: 1px solid #efeff0;
  .tag-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .tag-all {
      color: #129d69;
      font-size: 14px;
      margin-right: 15px;
      margin-top: 5px;
    }
  }
  .tag-content {
    display: flex;
    flex-wrap: wrap;
    .tag-item {
      margin: 5px 5px;
      cursor: pointer;
    }
  }
}
</style>
