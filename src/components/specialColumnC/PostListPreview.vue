<!-- 例: 专栏热门最新内容 -->
<template>
  <div>
    <img
      v-if="props.PostItem.filesAddress.length"
      :src="props.PostItem.filesAddress"
      alt=""
    />
    <img v-else src="../../assets/images/login2.jpg" alt="" />
  </div>
  <div class="plr-content">
    <h4>{{ props.PostItem.title }}</h4>
    <p class="plr-des">{{ props.PostItem.introduction }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps(["PostItem"]);
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-direction: column;
}

li {
  img {
    vertical-align: top;
    width: 200px;
    height: 100px;
    margin: 5px 0px;
    background-color: beige;
  }

  .plr-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h4 {
      text-align: center;
      background-color: #cecece;
    }

    .plr-des {
      background-color: bisque;
      width: 346px;
      height: 69px;
      font-size: 12px;
      margin-top: 5px;
    }
  }
}
</style>
