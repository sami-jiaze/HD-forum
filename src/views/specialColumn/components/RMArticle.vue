<template>
  <div>
    <h4 style="color: #009a61; margin-top: 25px">popular content</h4>
    <div class="sc-rm-content">
      <ul class="sc-content-ul">
        <li v-for="item in list" :key="item.id" @click="goPostDetail(item.id)">
          <PostListRow :PostItem="item"></PostListRow>
        </li>
      </ul>
    </div>
    <!-- <h4 style="color: #009a61; margin-top: 25px">最新内容</h4> -->
    <!-- <div class="sc-rm-content">
      <ul class="sc-content-ul">
        <li
          v-for="(item, index) in post1"
          :key="index"
          @click="goPostDetail(index)"
        >
          <PostListRow :PostItem="item"></PostListRow>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import PostListRow from "@/components/specialColumnC/PostListPreview.vue";
import router from "@/router";
import { ref } from "vue";
import { reqGetHomePage } from "@/api/specialColumn";

// console.log(scList);
const list = ref([{ filesAddress: [] }]);
reqGetHomePage().then((r) => {
  console.log(r);
  if (r.data.code == 200) {
    list.value = r.data.result.postVoList;
  }
});

// interface postItem {
//   title: string;
//   describe: string;
//   img: string;
// }
// const post = ref<postItem[]>([
//   {
//     title: "福州大学校园论坛帖子1",
//     describe: "福大热门帖子1",
//     img: "/src/assets/images/post1.png",
//   },
//   {
//     title: "福州大学校园论坛帖子2",
//     describe: "福大热门帖子2",
//     img: "/src/assets/images/post1.png",
//   },
// ]);
// const post1 = ref<postItem[]>([
//   {
//     title: "福州大学校园论坛帖子1",
//     describe: "福大最新帖子1",
//     img: "/src/assets/images/post1.png",
//   },
//   {
//     title: "福州大学校园论坛帖子2",
//     describe: "福大最新帖子2",
//     img: "/src/assets/images/post1.png",
//   },
//   {
//     title: "福州大学校园论坛帖子3",
//     describe: "福大最新帖子3",
//     img: "/src/assets/images/post1.png",
//   },
// ]);
const goPostDetail = function (index: number | string) {
  router.push(`/articleDetail/${index}`);
};
</script>

<style lang="scss" scoped>
.sc-rm-content {
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
