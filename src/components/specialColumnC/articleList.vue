<template>
  <div class="article-container">
    <p class="article-nav">Hot article</p>
    <hr style="border: 1px solid #f4f4f4" />
    <div>
      <ul>
        <li
          v-for="item in articleItem"
          :key="item.no"
          @click="tapArticle(item.no)"
        >
          <div
            class="article-meta"
            :class="{
              yellow: item.no == 3,
              red: item.no == 1,
              orange: item.no == 2,
            }"
          >
            {{ item.no }}
          </div>
          <div style="margin-left: 10px">{{ item.describe }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface ArticleItem {
  no: string | number;
  describe: string;
}
const articleItem = ref<ArticleItem[]>([
  {
    no: 1,
    describe: "FZU Hot Post 1",
  },
  {
    no: "2",
    describe: "FZU Hot Post 2",
  },
  {
    no: "3",
    describe: "FZU Hot Post 3",
  },
  {
    no: "4",
    describe: "FZU Hot Post 4",
  },
  {
    no: "5",
    describe: "FZU Hot Post 5",
  },
  {
    no: "6",
    describe: "FZU Hot Post 6",
  },
]);
const tapArticle = function (params: string | number) {
  alert(params);
};
</script>

<style lang="scss" scoped>
.article-container {
  margin: 40px 0;
  width: 300px;
  min-height: 200px;
  background-color: #fff;
  .article-nav {
    margin: 5px 0 5px 10px;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    position: relative;
    display: flex;
    height: 50px;
    margin: 5px 5px;
    cursor: pointer;
    // background-color: aqua;
  }
  li::after {
    content: "";
    position: absolute;
    bottom: -1px;
    height: 2px;
    width: 300px;
    background-color: #f4f4f4;
  }
  .article-meta {
    margin: 5px 0 0 5px;
    min-width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background-color: #bebebe;
    color: #fff;
  }
  .red {
    background-color: #ff675b;
  }
  .orange {
    background-color: #ffb461;
  }
  .yellow {
    background-color: #ffd261;
  }
}
</style>
