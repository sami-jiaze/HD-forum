<template>
  <div class="hotqa-list-container">
    <p class="hotqa-nav">Hot Q&A</p>
    <hr style="border: 1px solid #f4f4f4" />
    <div>
      <ul>
        <li v-for="item in qaItem" :key="item.no" @click="tapQAItem(item.no)">
          <div
            class="hotqa-meta"
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
interface QAItem {
  no: string | number;
  describe: string;
}
const qaItem = ref<QAItem[]>([
  {
    no: 1,
    describe: "FZU Hot Q&A 1",
  },
  {
    no: "2",
    describe: "FZU Hot Q&A 2",
  },
  {
    no: "3",
    describe: "FZU Hot Q&A 3",
  },
  {
    no: "4",
    describe: "FZU Hot Q&A 4",
  },
  {
    no: "5",
    describe: "FZU Hot Q&A 5",
  },
  {
    no: "6",
    describe: "FZU Hot Q&A 6",
  },
]);
const tapQAItem = function (params: string | number) {
  alert(params);
};
</script>

<style lang="scss" scoped>
.hotqa-list-container {
  width: 250px;
  min-height: 200px;
  background-color: #fff;
  overflow: hidden;
  .hotqa-nav {
    margin: 5px 0 5px 10px;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    position: relative;
    display: flex;
    min-height: 50px;
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
  .hotqa-meta {
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
