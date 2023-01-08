<template>
  <div class="list-container">
    <ul>
      <li v-for="(item, index) in qaList" :key="item.id" @click="go(item.id)">
        <div>
          {{ index + 1 }}.
          <p>{{ item.content }}</p>
        </div>
        <el-button type="danger" @click.stop="del(item.id)">Delete</el-button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { reqGetUserQA } from "@/api/userInfo";
import { reqDelQA } from "@/api/QA";
import router from "@/router";
import { ElMessage } from "element-plus";

const qaList = ref([]);
async function getArticle() {
  const res = await reqGetUserQA();
  if (res.data.code == 200) {
    qaList.value = res.data.result;
  }
  console.log(res);
}
getArticle();

function go(id) {
  router.push(`/qadetail/${id}`);
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
  background-color: #fff;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    background-color: bisque;
    margin: 15px 0;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
