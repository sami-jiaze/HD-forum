<template>
  <div>
    <HomeNav>
      <template v-slot:right>
        <LoggedNavVue></LoggedNavVue>
      </template>
    </HomeNav>

    <div class="qa-container">
      <div class="qa-box">
        <div class="qa-box-header">
          <QANavVue @getNav="getNavIndex"></QANavVue>
          <div class="qa-msg">
            <el-icon class="elicon"><Bell /></el-icon>
            <div style="color: #737373; margin-left: 5px">
              This is a notification
            </div>
          </div>
        </div>
        <div></div>
        <div class="qa-box-content">
          <div class="qa-content-left">
            <keep-alive>
              <component :is="componentName"></component>
            </keep-alive>
          </div>
          <hotQAListVue></hotQAListVue>
        </div>
      </div>
    </div>
  </div>

  <HomeFooter></HomeFooter>
</template>

<script setup lang="ts">
import { ref, type Ref, shallowRef } from "vue";
import QALastListVue from "./components/QALastList.vue";
import QAMonthlyList from "./components/QAMonthlyList.vue";
import QAWeeklyListVue from "./components/QAWeeklyList.vue";
import QARMList from "@/views/QAModules/components/QARMList.vue";
import QANavVue from "./components/qaNav.vue";
import HomeFooter from "@/layout/Footer.vue";
import HomeNav from "../../layout/Header.vue";
import LoggedNavVue from "@/components/LoggedNav.vue";
import hotQAListVue from "@/views/QAModules/components/hotQAList.vue";

let componentName = shallowRef(QARMList);
// const navIndex: Ref<number> = ref(0);

const getNavIndex = function (data: number) {
  // navIndex.value = data;
  if (data === 0) {
    componentName.value = QARMList;
  } else if (data === 1) {
    componentName.value = QAWeeklyListVue;
  } else if (data === 2) {
    componentName.value = QAMonthlyList;
  } else if (data === 3) {
    componentName.value = QALastListVue;
  }
};
</script>

<style lang="scss" scoped>
.qa-container {
  background-color: #e9ecef;
  min-height: calc(100vh - 270px);
  // overflow: hidden;
  padding: 0.1px;

  .qa-box {
    width: 1000px;
    margin: 0 auto;
    margin-top: 30px;
    // background-color: pink;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    .qa-box-header {
      display: flex;
      justify-content: space-between;
      .qa-msg {
        display: flex;
        justify-content: baseline;
        align-items: center;
        width: 250px;
        // background-color: antiquewhite;
      }
    }
    .qa-box-content {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      min-height: 500px;
      .qa-content-left {
        width: 700px;
        background-color: #fff;
      }
    }
  }
}
</style>
