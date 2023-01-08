<template>
  <div class="team-box">
    <div class="team-content">
      <div class="team-tit">
        Development team<span style="color: #727b82; margin-left: 20px">ABOUT US</span>
      </div>
      <ul>
        <li v-for="(item, index) in memberList" :key="index">
          <img :src="item.img" />
          <p>{{ item.position }}</p>
          <p style="margin-top: 20px">{{ item.signature }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";

interface memberItem {
  position: string;
  signature: string;
  img: string;
}
const memberList = ref<memberItem[]>([
  {
    img: "/src/assets/images/member7.jpg",
    position: "PM/Android/UI",
    // signature: "今日事今日毕",
    signature: "Today's work is finished today",
  },
  {
    img: "/src/assets/images/member6.jpg",
    position: "Android/Test",
    signature: "Testing requires effort!",
  },
  {
    img: "/src/assets/images/member5.jpg",
    position: "IOS",
    // signature: "一天一苹果，医生远离我",
    signature: "An apple a day keeps the doctor away from me"
  },
  {
    img: "/src/assets/images/member4.jpg",
    position: "Back-end",
    signature: "Lucky companion",
  },
  {
    img: "/src/assets/images/member3.jpg",
    position: "Back-end",
    signature: "To see the destruction is to see the rebirth",
  },
  {
    img: "/src/assets/images/member2.jpg",
    position: "Front-end",
    // signature: "摸鱼第一名",
    signature: "The champion that loaf on the job",
  },
  {
    img: "/src/assets/images/member1.jpg",
    position: "Front-end",
    // signature: "划水第一名",
    signature: "The champion that mess around",
  },
]);
</script>

<style scoped lang="scss">
.team-box {
  width: 100%;
  min-width: 1200px;
  background-color: #e9ecef;
  overflow: hidden;
  .team-content {
    // width: 1000px;
    // background-color: pink;
    // margin: 0 auto;
    .team-tit {
      color: #484849;
      font-size: 20px;
      font-weight: 600;
      margin-top: 40px;
      text-align: center;
    }
    ul {
      display: flex;
      justify-content: space-between;
      li {
        width: 200px;
        // height: 180px;
        margin: 20px 5px;
        text-align: center;
        margin-top: 40px;
        white-space: pre-wrap;
        // background-color: lightblue;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
