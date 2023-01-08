<template>
  <div class="sc-left">
    <ul class="sc-nav-ul">
      <li
        v-for="(item, index) in qaList"
        :key="index"
        @click="goNav(index)"
        :class="{ green: liIndex == index }"
      >
        {{ item }}
      </li>
    </ul>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, onBeforeMount } from "vue";
import weeklyArticlVue from "./weeklyArticl.vue";
import monthArticlVue from "./monthArticle.vue";
import RMArticleVue from "./RMArticle.vue";
import { ref } from "vue";

const qaList: string[] = ["HOT", "Weekly", "Monthly"];
let liIndex = ref(0);

let componentName = shallowRef(RMArticleVue);

const goNav = function (index: number) {
  liIndex.value = index;
  if (index === 0) {
    componentName.value = RMArticleVue;
  } else if (index === 1) {
    componentName.value = weeklyArticlVue;
  } else if (index === 2) {
    componentName.value = monthArticlVue;
  }
};
</script>

<style scoped lang="scss">
.sc-left {
  width: 660px;
  margin-bottom: 15px;
  // background-color: bisque;
  .sc-nav-ul {
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
      background-color: #ebdfe4;
      cursor: pointer;
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
}
</style>
