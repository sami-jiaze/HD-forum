<template>
  <div class="home-recommend">
    <div class="recommend-box">
      <div style="color: #4b4b4b; font-weight: 700; font-size: 20px">
        <!-- 推荐专区 -->
        Recommended zone
        <span style="color: #41abc1"> ></span>
      </div>
      <div class="recommend-content">
        <ul>
          <li
            v-for="(item, index) in recommendList"
            :key="index"
            @click="fn(index)"
          >
            <div>
              <img :src="item.img" alt="" />
              <p style="color: #4b4b4b">{{ item.title }}</p>
              <p style="color: #727b82; font-size: 12px">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";

interface recommendItem {
  title: string;
  text: string;
  img: string;
}
const recommendList = ref<recommendItem[]>([
  {
    // title: "2022福州大学,Light .公益创新挑战赛",
    title: "2022FZU,Light .Public Welfare Innovation Challenge",
    text: "Sincerely invite you to bring a little change to the world with Al!",
    img: "/src/assets/images/recommend1.png",
  },
  {
    title: "FZU|Artificial intelligence|Arm large computation",
    text: "AC artificial intelligence, Arm hardware related content",
    img: "/src/assets/images/recommend2.png",
  },
]);

function fn(index: any) {
  alert(index);
}
</script>

<style lang="scss" scoped>
.home-recommend {
  width: 100%;
  margin-top: 20px;

  .recommend-box {
    display: flex;
    width: 1000px;
    // background-color: lightblue;
    flex-direction: column;
    margin: 0 auto;
    .recommend-content {
      display: flex;
      ul {
        width: 100%;
        display: flex;
        li div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 170px;
          height: 200px;
          // background-color: pink;
          margin: 10px;
          :hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
