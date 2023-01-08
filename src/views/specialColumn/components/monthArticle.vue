<template>
  <div>
    <h4 style="color: #009a61; margin-top: 25px">Monthly List</h4>
    <div class="sc-month-content">
      <ul class="sc-content-ul">
        <li
          v-for="(item, index) in post1"
          :key="index"
          @click="goPostDetail(index)"
        >
          <PostListRow :PostItem="item"></PostListRow>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostListRow from "@/components/specialColumnC/PostListPreview.vue";
import router from "@/router";
import { ref } from "vue";
interface postItem {
  title: string;
  introduction: string;
  filesAddress: string;
}
const post1 = ref<postItem[]>([
  {
    title: "FZU Forum Post 1",
    introduction: "FZU Monthly List Post 1",
    filesAddress: "/src/assets/images/post1.png",
  },
  {
    title: "FZU Forum Post 2",
    introduction: "FZU Monthly List Post 2",
    filesAddress: "/src/assets/images/post1.png",
  },
  {
    title: "FZU Forum Post 3",
    introduction: "FZU Monthly List Post 3",
    filesAddress: "/src/assets/images/post1.png",
  },
]);
const goPostDetail = function (index: number | string) {
  // router.push("/articleDetail");
  // alert(index);
};
</script>

<style lang="scss" scoped>
.sc-month-content {
  margin-top: 15px;
  border: 1px solid #9b9b9b;
  background-color: #ffffff;
  .sc-content-ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      justify-content: space-around;
      background-color: #ffffff;
      margin: 10px 10px;
      border: 1px solid #ababab;
      cursor: pointer;
    }
  }
}
</style>
