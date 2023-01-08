<template>
  <ul class="qalist-qaitem">
    <li v-for="item in qaList" :key="item.id" @click="goADetail(item.id)">
      <QAListVue :item="item"></QAListVue>
    </li>
  </ul>
</template>

<script setup lang="ts">
import QAListVue from "@/components/QAModulesC/QAList.vue";
import router from "@/router";
import { ref } from "vue";
import { reqGetQAList } from "@/api/QA";
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
    title: "推荐问答标题1",
    author: "作者",
    date: "2022-11-26",
    comments: 35,
    likes: 204,
    readNum: 652,
    isLikes: false,
  },
  {
    no: 2,
    title: "推荐问答标题2",
    author: "作者",
    date: "2022-11-26",
    comments: 0,
    likes: 1,
    readNum: 5,
    isLikes: false,
  },
  {
    no: 3,
    title: "推荐问答标题3",
    author: "作者",
    date: "2022-11-26",
    comments: 6,
    likes: 25,
    readNum: 98,
    isLikes: false,
  },
  {
    no: 4,
    title: "推荐问答标题4",
    author: "作者",
    date: "2022-11-26",
    comments: 105,
    likes: 240,
    readNum: 7400,
    isLikes: false,
  },
]);

const qaDetail = function (params: number | string) {
  router.push("qadetail");
  alert(params);
};

const qaList = ref([]);
function goADetail(id) {
  router.push(`/qadetail/${id}`);
}
async function getQA() {
  const res = await reqGetQAList();
  console.log(res);
  if (res.data.code == 200) {
    qaList.value = res.data.result.qavoList;
  }
}
getQA();
</script>

<style lang="scss" scoped>
.qalist-qaitem {
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
