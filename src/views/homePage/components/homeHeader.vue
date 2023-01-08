<template>
  <div class="head-main">
    <!-- head-main -->
    <ul class="head-main-ul">
      <li>
        <h1>WELCOME</h1>
      </li>
      <li>
        <p style="text-align: center; letter-spacing: 2px; margin: 10px 0;">
          Our mission is to bring like-minded people together.
        </p>
        <p style="text-align: center; letter-spacing: 1px">
          Whether it's a popular topic or a small dynamic
        </p>
      </li>
      <li>
        <el-button
          color="#148f5f"
          class="head-btn"
          @click="gologin"
          v-show="!userStore.token"
        >
          Log in & register
        </el-button>
      </li>
    </ul>
    <!-- card -->
    <ul class="card-ul">
      <li v-for="(item, index) in card" :key="index" @click="nav(index)">
        <Card :cardValue="item"></Card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import Card from "@/components/HomePageC/Card.vue";
import { reactive, toRefs, onBeforeMount, onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
interface cardItem {
  title: string;
  description: string;
  img: string;
}
const card = ref<cardItem[]>([
  {
    title: "QA",
    description: "Ask a questions",
    img: "/src/assets/images/i1.png",
  },
  {
    title: "Special column",
    description: "Share your article",
    img: "/src/assets/images/i2.png",
  },
  {
    title: "Transaction",
    description: "Improve skills",
    img: "/src/assets/images/i3.png",
  },
  {
    title: "Delegate",
    description: "Face-to-face communication",
    img: "/src/assets/images/i4.png",
  },
]);
const nav = function name(index: string | number) {
  switch (index) {
    case 0:
      router.push("qaModules");
      break;
    case 1:
      router.push("specialColumn");
      break;
    default:
      break;
  }
};
const gologin = function () {
  router.push("/login");
};
const userStore = useUserStore();
</script>
<style lang="scss" scoped>
.head-main {
  position: relative;
  width: 100%;
  height: 300px;
  background-image: linear-gradient(120deg, #00231a 0%, #092d22 100%);
  // background-color: #041c14;
  display: flex;
  flex-direction: column;

  .head-main-ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;

    .head-btn {
      width: 140px;
      height: 40px;
      margin-bottom: 70px;
    }

    h1 {
      margin-top: 30px;
      font-size: 30px;
      color: #d9dfdd;
    }

    p {
      letter-spacing: 5px;
      color: #6d807d;
    }
  }

  .card-ul {
    z-index: 1;
    position: absolute;
    bottom: -50px;
    display: flex;
    width: 100%;
    justify-content: center;

    li {
      margin-left: 15px;
      background-color: #fff0f3;
    }
  }
}
</style>
