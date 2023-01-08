<!-- 例: 主页的header -->
<template>
  <el-row class="h-container">
    <!-- 左边 -->
    <el-col
      class="nav-left"
      :xs="8"
      :sm="16"
      :md="16"
      :lg="15"
      :xl="16"
      :offset="1"
    >
      <h1 @click="$router.push('/homePage')" hidden-sm-and-down>FZU FORUM</h1>
      <ul class="header-left-ul" ref="ulref">
        <li @click="$router.push('/qaModules')">Q&A</li>
        <li @click="$router.push('/specialColumn')">SpecialColumn</li>
        <li @click="goQA">Transaction</li>
        <li @click="goQA">Entrust</li>
        <!-- <li @click="$router.push('')">活动与通知</li> -->
      </ul>
      <span class="phone-button" @click="btnShow" hidden-sm-and-down>
        <i-bx-bx-list-ul style="font-size: 2rem"></i-bx-bx-list-ul>
      </span>

      <el-input
        v-model="inputvalue"
        placeholder="input ..."
        class="left-elinput"
      >
        <template #append>
          <el-icon class="left-icon">
            <Search></Search>
          </el-icon>
        </template>
      </el-input>
    </el-col>

    <!-- 右边 -->
    <el-col
      class="nav-right"
      :xs="14"
      :sm="6"
      :md="6"
      :lg="6"
      :xl="6"
      :offset="1"
    >
      <slot name="right"></slot>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import "element-plus/theme-chalk/display.css";
import { reactive, toRefs, onBeforeMount, onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { ElMessage } from "element-plus";
import router from "@/router";
const userStore = useUserStore();
userStore.getuToken();
let inputvalue = ref("");
const ulref = ref();
const isListShow = ref(false);

const btnShow = function () {
  // if (isListShow.value === true) {
  //   ulref.value.style.display = "none";
  //   isListShow.value = false;
  // } else {
  //   ulref.value.style.display = "block";
  //   isListShow.value = true;
  // }
  alert("404 now sry");
};

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

window.onresize = () => {
  isListShow.value = false;
};
</script>

<style lang="scss" scoped>
.h-container {
  height: 40px;
  // background-color: pink;
  line-height: 40px;

  .nav-left {
    max-height: 40px;
    // background-color: lightblue;
    display: flex;
    justify-content: space-between;

    h1 {
      color: rgb(20, 147, 97);
      font-size: 1.2rem;
      font-weight: 600;
      font-family: FEN;

      &:hover {
        cursor: pointer;
      }
    }

    ul {
      display: flex;
      flex: 1;
      justify-content: space-around;
      // background-color: gold;

      li {
        font-size: 16px;
        font-weight: 600;
        color: #737373;

        &:hover {
          cursor: pointer;
          // background-color: #fff0f3;
        }
      }
    }

    .left-elinput {
      width: 20vw;
    }
  }

  .nav-right {
    max-height: 40px;
    // background-color: #fff0f3;
  }
}

.phone-button {
  display: none;
}

@media screen and (max-width: 768px) {
  .h-container {
    .nav-left {
      .left-elinput {
        display: none;
      }
      .phone-button {
        position: relative;
        display: block;
        cursor: pointer;
      }
      .header-left-ul {
        display: none;
        flex-direction: column;
        position: absolute;
        min-width: 32vw;
        top: 40px;
        left: 0;
        z-index: 2;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .header-left-ul {
    display: block;
  }
}
</style>
