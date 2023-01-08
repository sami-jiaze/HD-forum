<template>
  <div>
    <el-popover placement="bottom-start" :width="400" trigger="click">
      <template #reference>
        <span>
          <slot></slot>
        </span>
      </template>
      <el-scrollbar height="300px" class="scroll">
        <div class="emoji-box">
          <div
            class="item"
            v-for="(item, index) in list"
            :key="index"
            @click="$emit('getEmoji', list[index])"
          >
            {{ item }}
          </div>
        </div>
      </el-scrollbar>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
const list = [
  "😂",
  "😊",
  "😉",
  "😎",
  "🤔",
  "😢",
  "🤦‍♀️",
  "😒",
  "🤦‍♂️",
  "👍",
  "✌",
  "😁",
  "😆",
  "👏",
  "😍",
  "🙌",
  "😜",
];
</script>
<style lang="scss" scoped>
.emoji-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  font-size: 25px;

  .item {
    width: 10%;
    text-align: center;
    cursor: pointer;
    margin-top: 10px;
  }
}
</style>
