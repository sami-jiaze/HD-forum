<template>
  <div class="sc-right">
    <div class="sc-msg">
      <el-icon class="elicon"><Bell /></el-icon>
      <div style="color: #737373">This is a notification</div>
    </div>
    <LabelFieldVue></LabelFieldVue>
    <ArticleListVue></ArticleListVue>
  </div>
</template>

<script setup lang="ts">
import LabelFieldVue from "@/components/specialColumnC/labelField.vue";
import ArticleListVue from "@/components/specialColumnC/articleList.vue";
</script>

<style lang="scss" scoped>
.sc-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  // background-color: lightblue;
  .sc-msg {
    display: flex;
    justify-content: baseline;
    align-items: center;
    .elicon {
      margin-bottom: 20px;
      color: #777977;
    }
    div {
      width: 272px;
      height: 44px;
      margin-left: 15px;
      // background-color: pink;
      color: #e9ecef;
    }
  }
}
</style>
