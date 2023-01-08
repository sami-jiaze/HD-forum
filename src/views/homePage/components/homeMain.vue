<template>
  <div class="home-main">
    <div class="main-content">
      <div class="content-nav">
        <h3 style="color: #484849">HOT</h3>
        <div class="home-more-text" @click="gosc">More</div>
      </div>

      <ul class="home-main-ul">
        <li
          v-for="(item, index) in post"
          :key="index"
          :id:string="index"
          @click="goArticle(index)"
        >
          <PostContent :postItem="item"></PostContent>
        </li>
      </ul>
      <!-- <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        background
        :total="1000"
        style="margin: 0 auto; width: 400px"
      /> -->
    </div>
  </div>
  <Recommend></Recommend>
  <Team></Team>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router";
// import { defineComponent } from "vue";
import PostContent from "@/components/HomePageC/PostListAuthor.vue";
import Recommend from "@/components/HomePageC/recommend.vue";
import Team from "@/components/HomePageC/team.vue";
import { reqGetHomePage } from "@/api/specialColumn";
interface postItem {
  title: string;
  author: string;
  date: string;
  img: string;
}
const post = ref<postItem[]>([
  {
    title: "test1",
    author: "rio",
    date: "2022/12/9",
    img: "/src/assets/images/post1.png",
  },
  {
    title: "test2",
    author: "ami",
    date: "2022/12/4",
    img: "/src/assets/images/post1.png",
  },
  {
    title: "test3",
    author: "yumi",
    date: "2022/12/1",
    img: "/src/assets/images/post1.png",
  },
  {
    title: "test4",
    author: "maya",
    date: "2022/11/9",
    img: "/src/assets/images/post1.png",
  },
]);

const goArticle = function (index: string | number) {
  router.push("/specialColumn");
};
function gosc() {
  router.push("/specialColumn");
}
async function getHomePage() {
  const res = await reqGetHomePage();
  if (res.data.code == 200) {
    const postVoList = res.data.result.postVoList;
    // console.log(postVoList);
  }
}
getHomePage();
</script>

<style scoped lang="scss">
.home-main {
  background-color: #e9ecef;
  padding: 0.1px;
  // overflow: hidden;
  .main-content {
    width: 850px;
    margin: 100px auto 0;
    // background-color: pink;
    .content-nav {
      display: flex;
      justify-content: space-between;
      .home-more-text {
        color: #129d69;
        font-weight: 600;
        font-size: 12px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .home-main-ul li {
      margin: 0 0 10px 0;
    }
  }
}
</style>
