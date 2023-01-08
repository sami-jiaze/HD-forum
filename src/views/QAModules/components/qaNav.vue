<template>
  <div class="qaNav-container">
    <div class="qa-nav-tit">QA</div>
    <ul class="qa-nav-ul">
      <li
        v-for="(item, index) in qaList"
        :key="index"
        @click="goNav(index)"
        :class="{ green: liIndex == index }"
      >
        {{ item }}
      </li>
    </ul>
    <el-button class="el-button-nav" @click="postQuestion">
      Ask a question
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { ElMessage } from "element-plus";
import router from "@/router";

const userStore = useUserStore();

const qaList: string[] = ["HOT", "WEEK", "MONTH", "NEW"];
let liIndex = ref(0);

const emit = defineEmits(["getNav"]);
const goNav = function (index: number) {
  liIndex.value = index;
  emit("getNav", liIndex.value);
};
const postQuestion = () => {
  if (!userStore.token) {
    ElMessage({
      message: "please login first",
      type: "warning",
    });
    router.push("/login");
  } else {
    router.push("/ask");
  }
};
</script>

<style lang="scss" scoped>
.qaNav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  // background-color: antiquewhite;
  .qa-nav-tit {
    font-size: 20px;
    font-weight: 600;
  }
  .qa-nav-ul {
    display: flex;
    justify-content: center;
    li {
      position: relative;
      height: 40px;
      padding: 0 20px;
      text-align: center;
      line-height: 40px;
      color: #484849;
      font-size: 18px;
      // background-color: #ebdfe4;
      cursor: pointer;
    }
  }
}

.green::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 19px;
  height: 3px;
  width: 40px;
  background-color: green;
}

.el-button-nav {
  background-color: #00965e;
  color: #fff;
}
</style>
