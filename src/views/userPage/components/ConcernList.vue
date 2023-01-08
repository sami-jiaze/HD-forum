<template>
  <div class="list-container">
    <ul>
      <li v-for="item in articleList" :key="item.id" @click="go(item.id)">
        <div class="concern">
          <div class="imgbox">
            <img
              v-if="item.filesAddress[0]"
              :src="item.filesAddress"
              alt="noImg"
            />
          </div>
          <div class="username-sign">
            <p class="name">{{ item.title }}</p>
            <p class="sign">{{ item.introduction }}</p>
          </div>
        </div>
        <el-button type="danger" style="margin: 5px" @click.stop="del(item.id)">
          Delete
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { reqGetUserArticle } from "@/api/userInfo";
import router from "@/router";
import { reqDelQA } from "@/api/QA";
import { ElMessage } from "element-plus";
const articleList = ref([]);
async function getArticle() {
  const res = await reqGetUserArticle();
  if (res.data.code == 200) {
    articleList.value = res.data.result;
  }
  // console.log(res);
}
getArticle();

function go(id) {
  router.push(`/articleDetail/${id}`);
}
async function del(id) {
  const res = await reqDelQA(id);
  console.log(res);
  if (res.data.code == 200) {
    ElMessage({
      message: "delete successfully.",
      type: "success",
    });
    getArticle();
  }
}
</script>

<style scoped lang="scss">
.list-container {
  width: 500px;
  margin: 20px 0 0 95px;
  background-color: #Fff;
  li {
    display: flex;
    align-items: center;
    border: 1px solid lightgrey;
  }
  .imgbox {
    width: 80px;
    height: 70px;
    background: rgba(80, 81, 82);
  }
}
.concern {
  width: 500px;
  height: 75px;
  background-color: white;
  // border: 1px solid lightgrey;
  display: flex;
}

img {
  width: 80px;
  height: 70px;
  // max-height: 100%;
}

.username-sign {
  margin-left: 10px;
}

.name {
  font-weight: bold;
}

.sign {
  font-size: 10px;
  margin-top: -5px;
  margin-top: 20px;
}
</style>
