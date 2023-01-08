<template>
  <el-dropdown-item @click="goQA">
    <i-bx-bulb></i-bx-bulb>
    &ensp;Ask Questions
  </el-dropdown-item>
  <el-dropdown-item @click="goWrite">
    <i-bx-edit></i-bx-edit>
    &ensp;Writing articles
  </el-dropdown-item>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { ElMessage } from "element-plus";
const userStore = useUserStore();
userStore.getuToken();
function goQA() {
  if (!userStore.token) {
    ElMessage({
      message: "please log in first.",
      type: "warning",
    });
  } else {
    router.push("/ask");
  }
}
function goWrite() {
  if (!userStore.token) {
    ElMessage({
      message: "please log in first.",
      type: "warning",
    });
  } else {
    router.push("/write");
  }
}
</script>

<style lang="scss" scoped></style>
