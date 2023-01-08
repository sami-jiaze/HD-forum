<template>
  <ul class="lastlist-qaitem">
    <li v-for="item in qaItem" :key="item.no" @click="qaDetail(item.no)">
      <QAListVue :item="item"></QAListVue>
    </li>
  </ul>
</template>

<script setup lang="ts">
import QAListVue from "@/components/QAModulesC/QAList.vue";
import router from "@/router";
import { ref } from "vue";
interface QAItem {
  no: string | number;
  title: string;
  author: string;
  date: string;
  comments: number;
  likes: number;
  readNum: number;
  isLikes: boolean;
}

const qaItem = ref<QAItem[]>([
  {
    no: 1,
    title: "New Q&A 1",
    author: "Author",
    date: "2022-11-27",
    comments: 27,
    likes: 104,
    readNum: 745,
    isLikes: false,
  },
  {
    no: 2,
    title: "New Q&A 2",
    author: "Author",
    date: "2022-11-27",
    comments: 0,
    likes: 1,
    readNum: 5,
    isLikes: false,
  },
  {
    no: 3,
    title: "New Q&A 3",
    author: "Author",
    date: "2022-11-27",
    comments: 6,
    likes: 25,
    readNum: 98,
    isLikes: false,
  },
  {
    no: 4,
    title: "New Q&A 4",
    author: "Author",
    date: "2022-11-27",
    comments: 105,
    likes: 240,
    readNum: 7400,
    isLikes: false,
  },
]);

const qaDetail = function (params: number | string) {
  // router.push("qadetail");
  // alert(params);
};
</script>

<style lang="scss" scoped>
.lastlist-qaitem {
  li {
    min-height: 80px;
    background-color: #fff;
    // border-bottom: 2px solid #fafafa;
    // background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    border: 2px solid #fafafa;
  }
  li:not(:first-child) {
    margin-top: 15px;
  }
  li:hover {
    background-color: #fafafa;
    box-shadow: 0px 3px 9px -7px #029761;
  }
}
</style>
