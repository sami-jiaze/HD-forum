<template>
  <HeaderVue>
    <template v-slot:right>
      <LoggedNavVue></LoggedNavVue>
    </template>
  </HeaderVue>
  <div class="article-container">
    <div class="options-tab">
      <ul>
        <li>
          <i-bx-like></i-bx-like>
        </li>
        <li>
          <i-bx-bx-comment-detail
            style="color: #6d7382"
          ></i-bx-bx-comment-detail>
        </li>
        <li>
          <i-bx-bx-link-external></i-bx-bx-link-external>
        </li>
        <li>
          <i-bx:bx-star></i-bx:bx-star>
        </li>
      </ul>
    </div>
    <div class="article-box">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Home Page</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/specialColumn' }"
          >Special Column
        </el-breadcrumb-item>
        <el-breadcrumb-item>Article Details</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="article-content">
        <div class="article-content-left">
          <h2 style="text-align: center">{{ articlDetail.title }}</h2>
          <v-md-editor :model-value="acontent" mode="preview"></v-md-editor>
        </div>
        <div class="article-content-right">
          <AuthorMsgVue :authormsg="articlDetail"></AuthorMsgVue>
          <PublicityBoardVue :publicityList="publicityList"></PublicityBoardVue>
        </div>
      </div>
      <postCommentVue></postCommentVue>
      <commentVue></commentVue>
    </div>
  </div>
  <FooterVue></FooterVue>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import LoggedNavVue from "@/components/LoggedNav.vue";
import FooterVue from "@/layout/Footer.vue";
import HeaderVue from "@/layout/Header.vue";
import PublicityBoardVue from "@/components/PublicityBoard.vue";
import AuthorMsgVue from "../../components/AuthorMsg.vue";
import commentVue from "@/components/Mement/comment.vue";
import postCommentVue from "@/components/Mement/postComment.vue";
import { ref,onBeforeMount } from "vue";
import { reqscDetail } from "@/api/specialColumn";
import { useRouter, useRoute } from "vue-router";
// import text from "./hello word.md?raw";
// const text1 = "### 标题";
interface PublicityBoard {
  title: string;
  des: string;
}
interface AuthorMsgo {
  img: string;
  name: string;
  likes: number;
  fans: number;
}
const route = useRoute();
const articlDetail = ref({});
const acontent = ref("");
// const author = ref<AuthorMsgo>({
//   img: "/src/assets/images/author.jpg",
//   name: articlDetail.value.userName,
//   likes: 124,
//   fans: 2035,
// });

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
onBeforeMount(async () => {
  const res = await reqscDetail(route.params.id as string);
  console.log(res);
  if (res.data.code == 200) {
    articlDetail.value = res.data.result;
    acontent.value = articlDetail.value.content.replace(/\\n/g, "<br>");
  }
});
</script>

<style lang="scss" scoped>
.article-container {
  background-color: #e9ecef;
  min-height: calc(100vh - 270px);
  // padding: 0.1px;
  overflow: hidden;
  .options-tab {
    position: fixed;
    left: 10%;
    top: 100px;
    right: 0;
    bottom: 0;
    li {
      width: 40px;
      height: 40px;
      background-color: pink;
      margin: 15px;
      border-radius: 50%;
      text-align: center;
      line-height: 44px;
    }
  }

  .article-box {
    width: 900px;
    // min-height: 500px;
    margin: 0 auto;
    // background-color: pink;
    margin-top: 20px;
    margin-bottom: 20px;

    .article-content {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      .article-content-left {
        width: 600px;
        background-color: #fff;
        margin-bottom: 20px;
      }

      .article-content-right {
        width: 250px;
        // background-color: pink;
      }
    }
  }
}
</style>
