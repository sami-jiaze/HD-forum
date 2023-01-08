<template>
  <HeaderVue>
    <template v-slot:right>
      <LoggedNavVue></LoggedNavVue>
    </template>
  </HeaderVue>
  <div class="qa-container">
    <div class="qa-box">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Home Page</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/qaModules' }">
          Q&A
        </el-breadcrumb-item>
        <el-breadcrumb-item>Q&A Details</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="qa-content">
        <div class="qa-content-left">
          <QDetailVue></QDetailVue>
          <ADetailVue style="margin-bottom: 15px;"></ADetailVue>
        </div>
        <div class="qa-content-right">
          <PublicityBoardVue :publicityList="publicityList"></PublicityBoardVue>
        </div>
      </div>
    </div>
  </div>
  <FooterVue></FooterVue>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import HeaderVue from "@/layout/Header.vue";
import LoggedNavVue from "@/components/LoggedNav.vue";
import QDetailVue from "@/views/QADetail/components/QDetail.vue";
import ADetailVue from "./components/ADetail.vue";
import FooterVue from "@/layout/Footer.vue";
import PublicityBoardVue from "@/components/PublicityBoard.vue";
import { ref } from "vue";

interface PublicityBoard {
  title: string;
  des: string;
}

const publicityList = ref<PublicityBoard[]>([
  {
    title: "宣传栏标题1",
    des: "宣传栏内容1",
  },
  {
    title: "宣传栏标题2",
    des: "宣传栏内容2",
  },
  {
    title: "宣传栏标题3",
    des: "宣传栏内容3",
  },
  {
    title: "宣传栏标题4",
    des: "宣传栏内容4",
  },
]);
</script>

<style lang="scss" scoped>
.qa-container {
  background-color: #e9ecef;
  min-height: calc(100vh - 270px);
  // padding: 0.1px;
  overflow: hidden;
  .qa-box {
    width: 900px;
    // min-height: 500px;
    margin: 0 auto;
    // background-color: pink;
    margin-top: 20px;
    .qa-content {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      // .qa-content-left {
      //   width: 600px;
      //   background-color: lightblue;
      // }
      .qa-content-right {
        width: 250px;
        // background-color: pink;
      }
    }
  }
}
</style>
