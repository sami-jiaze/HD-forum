<!-- 例：主页的精彩内容帖子-->
<template>
  <div class="postlist-item">
    <img :src="postItem.img" alt="" srcset="" />
    <div class="postlist-text">
      <p>{{ postItem.title }}</p>
      <div class="postlist-text-msg">
        <span style="color: #129d69; font-weight: 600">
          {{ postItem.author }}
        </span>
        <span style="color: #727b82; font-size: 12px">
          {{ postItem.date }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "",
  props: ["postItem"],
  setup() {
    function fun(index: any) {
      alert(index);
    }
    return {
      fun,
    };
  },
};
</script>
<style lang="scss" scoped>
.postlist-item {
  display: flex;
  // flex-direction: column;
  width: 46%;
  // background-color: lightblue;
  margin-top: 50px;
  img {
    width: 180px;
    height: 130px;
    vertical-align: top;
  }
  .postlist-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5px 15px;
    .postlist-text-msg {
      width: 200px;
      display: flex;
      text-align: center;
      justify-content: space-between;
      // background-color: pink;
    }
  }
}
.postlist-item:hover {
  cursor: pointer;
}
</style>
