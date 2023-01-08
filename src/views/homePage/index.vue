<!-- eslint-disable prettier/prettier -->
<template>
  <Header>
    <template v-slot:right>
      <ul class="home-right">
        <li>
          <el-button color="#148f5f" @click="gouserpage">user Center</el-button>
        </li>
        <li>
          <el-dropdown style="margin: 6px 0" trigger="click">
            <span class="el-dropdown-link">
              <el-button color="#148f5f">Creation Centre</el-button>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <Dropdown></Dropdown>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
        <li>
          <el-button color="#148f5f" @click="login" v-show="!userStore.token">
            Log in & register
          </el-button>
          <el-button color="#e5806c" v-show="userStore.token" @click="logout">
            Log out
          </el-button>
        </li>
      </ul>
    </template>
  </Header>
  <homeNav></homeNav>
  <HomeMain></HomeMain>
  <HomeFooter></HomeFooter>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import Header from "@/layout/Header.vue";
import homeNav from "@/views/homePage/components/homeHeader.vue";
import HomeMain from "@/views/homePage/components/homeMain.vue";
import HomeFooter from "@/layout/Footer.vue";
import router from "@/router";
import { useUserStore } from "@/stores/user";
import Dropdown from "@/components/dropdown.vue";
// import { defineComponent } from "vue";

const login = function () {
  router.push("login");
};
const userStore = useUserStore();
userStore.getuToken();
// const token = useUserStore.token;
// console.log(userStore.token);

function logout() {
  userStore.removeToken();
}
function gouserpage() {
  if (!userStore.token) {
    ElMessage({
      message: "please log in first.",
      type: "warning",
    });
  } else {
    router.push("/userpage");
  }
}
</script>

<style lang="scss" scoped>
.home-right {
  display: flex;
  // flex: 1;
  // justify-content: space-around;
  // background-color: gold;
  li {
    margin: 0 5px;
  }
}
@media screen and (max-width: 767px) {
  li {
  }
}
</style>
