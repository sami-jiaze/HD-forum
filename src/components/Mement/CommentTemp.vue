<template>
  <li v-for="item of props.comment.commentList" :key="item.id">
    <div class="father-reply">
      <div class="comment-head">
        <img :src="item.userAvatar" alt="" />
        <div class="head-reply">
          <span style="width: 80px;">{{ item.userName }}</span>
          <span class="son-replay">reply to "{{ props.comment.content }}"</span>
        </div>
        <!-- <span>{{ item.createTime }}</span> -->
      </div>
      <p>{{ item.content }}</p>
      <div v-if="item.filesAddress">
        <ul>
          <li v-for="(imgItem, index) in item.filesAddress" :key="index">
            <img :src="imgItem" alt="" class="comment-img" />
          </li>
        </ul>
      </div>

      <div class="card-bottom">
        <div class="bottom-divider">
          <i-bx-like v-if="!item.isLikes" />
          <i-bxs-like style="color: #00965e" v-else />
          <!-- {{ item.delFlag }} -->
        </div>
        <div class="bottom-divider">
          <i-bx-dislike></i-bx-dislike>
        </div>
        <div class="bottom-divider" @click="ClickReply(props.comment)">
          <i-bx-comment-dots></i-bx-comment-dots>
        </div>
      </div>
      <replyPostVue v-if="dialogTableVisible" :commentItem="item">
        <el-button type="warning" size="small" @click="Cancel">
          Cancel
        </el-button>
      </replyPostVue>
    </div>
    <div class="reply">
      <div v-if="item.commentList.length">
        <CommentTemp :comment="item" style="margin-left: 15px"></CommentTemp>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { reqPostComment } from "@/api/comment";
import replyPostVue from "@/components/Mement/replyPost.vue";
let dialogTableVisible = ref(false);
const props = defineProps({
  comment: Array,
});
// console.log(props.comment);
function ClickReply(data) {
  dialogTableVisible.value = !dialogTableVisible.value;
  // console.log(data.commentList);
}
function Cancel() {
  dialogTableVisible.value = false;
}
</script>

<style lang="scss" scoped>
.father-reply {
  // background-color: pink;
  border: 1px solid;
  
  .comment-img {
    width: 80px;
    height: 80px;
  }
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
  .head-reply {
    width: 100%;
    // background-color: pink;
    display: flex;
    justify-content: space-between;
    .son-replay {
      font-size: 10px;
      color: rgba(182, 153, 166);
    }
  }
}
.card-bottom {
  display: flex;
  margin-top: 5px;
  .bottom-divider {
    width: 33%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .bottom-divider:hover {
    color: #ccc;
  }
}
</style>
