<template>
  <div class="box-card">
    <ul>
      <li v-for="(item, index) of SCStore.commentList" :key="item.id">
        <el-card class="main-box-comment">
          <div class="comment-head">
            <img :src="item.userAvatar" alt="" />
            <span>{{ item.userName }}</span>
            <!-- <span>{{ item.createTime }}</span> -->
          </div>
          {{ item.content }}
          <div v-if="item.filesAddress">
            <ul>
              <li v-for="(imgItem, index) in item.filesAddress" :key="index">
                <img :src="imgItem" alt="" class="comment-img" />
              </li>
            </ul>
          </div>

          <el-divider />
          <div class="card-bottom">
            <div class="bottom-divider">
              <i-bx-like v-if="!item.isLikes" />
              <i-bxs-like style="color: #00965e" v-else />
              <!-- {{ item.delFlag }} -->
            </div>
            <div class="bottom-divider">
              <i-bx-dislike></i-bx-dislike>
            </div>
            <div class="bottom-divider" @click="ClickReply(index, item)">
              <i-bx-comment-dots></i-bx-comment-dots>
            </div>
          </div>

          <replyPostVue v-if="index == dialogTableVisible" :commentItem="item">
            <el-button type="warning" size="small" @click="Cancel">
              Cancel
            </el-button>
          </replyPostVue>
          <div v-if="item.commentList.length" class="comment-box">
            <CommentTempVue :comment="item"></CommentTempVue>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useSCStore } from "@/stores/specialColomn";
import CommentTempVue from "./CommentTemp.vue";
import replyPostVue from "./replyPost.vue";
const route = useRoute();
const SCStore = useSCStore();
const cid = route.params.id;
const likes = ref(Math.ceil(Math.random() * 10));

let dialogTableVisible = ref(999);

SCStore.getComment(cid);
function ClickLikes() {
  likes.value++;
}
function ClickReply(index, data) {
  dialogTableVisible.value = index;
  // console.log(data);
}
function Cancel() {
  dialogTableVisible.value = 999;
}
</script>
<style lang="scss" scoped>
.text {
  font-size: 14px;
}
.box-card {
  width: 600px;
  margin-top: 20px;
  li {
    margin-bottom: 5px;
  }
  .comment-head {
    // background-color: pink;
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
.card-bottom {
  display: flex;
  .bottom-divider {
    width: 33%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .bottom-divider:hover {
    color: #ccc;
  }
  .comment-img {
    width: 80px;
    height: 80px;
  }
}
.comment-box {
  background-color: rgba(242, 243, 245);
}
.comment-img {
  width: 80px;
  height: 80px;
}
</style>
