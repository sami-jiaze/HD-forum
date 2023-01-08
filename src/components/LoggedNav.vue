<template>
  <div class="slot-right">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <el-button color="#148f5f">Creation Centre</el-button>
      </span>
      <template #dropdown>
        <Dropdown></Dropdown>
      </template>
    </el-dropdown>

    <el-icon class="elicon" @click="bellMsg"><Bell /></el-icon>
    <el-icon class="elicon" @click="chatMsg"><ChatDotSquare /></el-icon>
    <div>
      <el-avatar
        v-if="userMessage.avatar"
        :size="40"
        :src="userMessage.avatar"
        @click="slotfn"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import Dropdown from "@/components/dropdown.vue";
import { useUserStore } from "@/stores/user";
import { reqGetUserInfo } from "@/api/userInfo";
import { ElMessage } from "element-plus";

const userStore = useUserStore();
const userMessage = ref({});
userStore.getuToken();
console.log(userStore.token);

// const imgsrc = ref("/src/assets/images/member1.jpg");
const slotfn = function () {
  if (!userStore.token) {
    ElMessage({
      message: "Log in first.",
      type: "warning",
    });
  } else {
    router.push("/userpage");
  }
};
async function getUserInfo() {
  const res = await reqGetUserInfo(userStore.token);
  if (res.data.code == 200) {
    userMessage.value = res.data.result;
  }
}
getUserInfo();
// const chatMsg = function () {
//   alert("先别急");
// };
// const bellMsg = function () {
//   alert("先别急");
// };
</script>

<style lang="scss" scoped>
.slot-right {
  display: flex;
  margin: 0 20px;
  justify-content: space-around;
  // background-color: aqua;
  .el-dropdown-link {
    // background-color: pink;
    margin: 5px 0;
  }
  .elicon {
    display: flex;
    align-self: center;
    cursor: pointer;
  }
}
</style>
