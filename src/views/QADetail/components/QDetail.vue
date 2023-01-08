<template>
  <div class="qa-detail">
    <el-card>
      <div class="comment-head">
        <img :src="qaStore.qaContent.avatar" alt="" />
        <span>{{ qaStore.qaContent.userName }}</span>
      </div>
      <p style="margin: 15px 0">{{ qaStore.qaContent.content }}</p>
      <div v-if="qaStore.qaContent.filesAddress">
        <ul>
          <li
            v-for="(imgItem, index) in qaStore.qaContent.filesAddress"
            :key="index"
          >
            <img :src="imgItem" alt="" class="comment-img" />
          </li>
        </ul>
      </div>
      <el-divider />
      <div class="card-bottom">
        <div class="bottom-divider">
          <i-bx-like />
          <!-- {{ item.delFlag }} -->
        </div>
        <div class="bottom-divider">
          <i-bx-dislike></i-bx-dislike>
        </div>
        <div class="bottom-divider">
          <i-bx-comment-dots></i-bx-comment-dots>
        </div>
      </div>
    </el-card>
  </div>
  <postCommentVue></postCommentVue>
  <commentVue></commentVue>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useQAStore } from "@/stores/qa";
import { ref } from "vue";
import postCommentVue from "@/components/Mement/postComment.vue";
import commentVue from "@/components/Mement/comment.vue";
const route = useRoute();
const qaStore = useQAStore();
const qid = route.params.id;
qaStore.getQADetail(qid);

</script>

<style lang="scss" scoped>
.qa-detail {
  width: 600px;
  min-height: 200px;
  background-color: #fff;
  .comment-head {
    // background-color: pink;
    display: flex;
    align-items: center;
    // padding-bottom: 15px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .card-bottom {
    display: flex;
  }
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
</style>
