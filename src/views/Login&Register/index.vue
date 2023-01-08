<template>
  <div class="container">
    <div class="left-part">
      <el-carousel trigger="click" height="600px">
        <el-carousel-item v-for="item in imgItem" :key="item.id">
          <img :src="item.img" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="login">
      <div class="title">FZU FORUM</div>
      <div class="log-box">
        <div class="reg-title">
          <h2>
            <span :class="{ green: isRegister }" @click="goLogin">Login</span>
            |
            <span :class="{ green: !isRegister }" @click="goRegist"
              >Register</span
            >
          </h2>
        </div>
        <LoginVue v-if="isRegister"></LoginVue>
        <Registration v-else></Registration>
        <!-- icon图标栏 -->
        <div class="log-other">
          <ul class="log-items">
            <li>
              <a href="javascript:;">
                <img src="@/assets/images/google-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="@/assets/images/github-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="@/assets/images/weibo-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="@/assets/images/qq-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="@/assets/images/twiter-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="@/assets/images/f-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="@/assets/images/ins-icon.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <!-- 同意勾选框 -->
        <div class="log-notice">
          <div>
            To continue means to agree to the《
            <span style="color: rgb(45, 167, 120); cursor: pointer">
              Service Agreement
            </span>
            》and《
            <span style="color: rgb(45, 167, 120); cursor: pointer">
              Privacy Policy
            </span>
            》
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Registration from "./Registration.vue";
import LoginVue from "./Login.vue";
import { ref } from "vue";
interface ImgItem {
  id: number;
  img: string;
}
// 轮播图
const imgItem = ref<ImgItem[]>([
  {
    img: "/src/assets/images/login1.jpg",
    id: 0,
  },
  {
    img: "/src/assets/images/login2.jpg",
    id: 1,
  },
  {
    img: "/src/assets/images/login3.jpg",
    id: 2,
  },
]);

const isRegister = ref(true);

const goLogin = function () {
  isRegister.value = true;
};
const goRegist = function () {
  isRegister.value = false;
};
</script>

<style lang="scss" scoped>
.left-part {
  width: 800px;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
  }
}

.container {
  display: flex;
  height: 100vh;
  background-color: rgb(233, 236, 239);
  justify-content: space-around;
  align-items: center;
}
.login {
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  .title {
    color: rgb(38, 167, 120);
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  /* 注册框 */
  .log-box {
    height: 450px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .reg-title {
      text-align: center;
      margin-top: 15px;
      span {
        cursor: pointer;
      }
    }
  }
}

.log-items {
  display: flex;
  justify-content: center;
}

.log-items li {
  margin-left: 15px;
}

.log-notice {
  margin-bottom: 20px;
  text-align: center;
}
.green {
  color: #26a778;
}
</style>
