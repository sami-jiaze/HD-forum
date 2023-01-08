<template>
  <div class="item-title">{{ item.content }}</div>
  <div class="item-title">{{ item.title }}</div>
  <div class="weeklist-item-footer">
    <div>
      <span class="item-likes" @click.stop="likeIt(item)">
        <i-bx-like v-if="!item.isLikes" />
        <i-bxs-like style="color: #00965e" v-else />
        {{ likes }}
      </span>
      <span style="color: #737373; font-size: 13px; margin-left: 10px">
        <el-icon><ChatDotSquare /></el-icon>
        {{ item.commentCount }}
      </span>
      <span style="color: #737373; font-size: 13px; margin-left: 10px">
        <el-icon><i-bx-bx-show /></el-icon>
        {{ readNum }}
      </span>
    </div>
    <div>
      <span style="color: #129d69; margin-right: 20px" v-if="item.userName">
        {{ item.userName }}
      </span>
      <span style="color: #129d69; margin-right: 20px" v-else>
        {{ props.item.author }}
      </span>
      <span>{{ item.date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let likes = ref(Math.ceil(Math.random() * 10));
let readNum = ref(Math.ceil(Math.random() * 100));
const props = defineProps(["item"]);
const likeIt = function (params: any) {
  params.isLikes = !params.isLikes;
  if (params.isLikes === true) {
    // params.likes++;
    likes.value++;
  } else likes.value--;
};
</script>

<style lang="scss" scoped>
.weeklist-item-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1 1 auto;
  flex-basis: 0;
}
.item-title {
  margin-left: 5px;
}
.item-likes {
  color: "#737373";
  font-size: 13px;
  margin-left: 5px;
  :hover {
    cursor: pointer;
  }
}
</style>
