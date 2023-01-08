<template>
  <div>
    <HomeHeader>
      <template v-slot:right>
        <LoggedNavVue></LoggedNavVue>
      </template>
    </HomeHeader>

    <div class="sc-container">
      <div class="sc-box">
        <SCLeft></SCLeft>
        <SCRight></SCRight>
      </div>
    </div>
  </div>

  <HomeFooter></HomeFooter>
</template>

<script lang="ts" setup>
// import { defineComponent } from "vue";
// import { ref } from "vue";
import HomeFooter from "@/layout/Footer.vue";
import HomeHeader from "@/layout/Header.vue";
import SCLeft from "@/views/specialColumn/components/left.vue";
import SCRight from "@/views/specialColumn/components/right.vue";
import LoggedNavVue from "@/components/LoggedNav.vue";
</script>

<style scoped lang="scss">
.sc-container {
  background-color: #e9ecef;
  min-height: calc(100vh - 270px);
  // overflow: hidden;
  padding: 0.1px;
  display: flex;

  .sc-box {
    width: 1000px;
    margin: 0 auto;
    margin-top: 50px;
    // background-color: pink;
    display: flex;
    justify-content: space-around;
  }
}
</style>
