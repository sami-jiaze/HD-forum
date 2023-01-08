<template>
  <HeaderVue>
    <template v-slot:right>
      <LoggedNavVue></LoggedNavVue>
    </template>
  </HeaderVue>
  <div class="article-container">
    <div class="article-box">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Home Page</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="article-content">
        <div class="article-content-left">
          <div>123</div>
        </div>
        <div class="article-content-right">123</div>
      </div>
    </div>
  </div>
  <FooterVue></FooterVue>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import LoggedNavVue from "@/components/LoggedNav.vue";
import FooterVue from "@/layout/Footer.vue";
import HeaderVue from "@/layout/Header.vue";
</script>

<style lang="scss" scoped>
.article-container {
  background-color: #e9ecef;
  min-height: calc(100vh - 270px);
  // padding: 0.1px;
  overflow: hidden;
  .article-box {
    width: 900px;
    // min-height: 500px;
    margin: 0 auto;
    // background-color: pink;
    margin-top: 20px;
    .article-content {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .article-content-left {
        width: 600px;
        background-color: lightblue;
      }
      .article-content-right {
        width: 250px;
        background-color: pink;
      }
    }
  }
}
</style>
