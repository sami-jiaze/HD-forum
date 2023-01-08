<template>
  <div class="container">
    <div class="author wrapper">
      <div class="author-head">
        <img :src="authormsg.avatar" alt="" />
      </div>
      <div class="author-name">{{ authormsg.userName }}</div>
    </div>
    <div class="author-data wrapper">
      <ul>
        <li>
          <span>{{ Math.ceil(Math.random() * 10) }}</span>
          following
        </li>
        <li>
          <span>{{ Math.ceil(Math.random() * 10) }}</span>
          followers
        </li>
      </ul>
    </div>
    <!-- 关注按钮 -->
    <div class="wrapper">
      <button>Follow the author</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["authormsg"]);
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.wrapper {
  margin-left: 20px;
}

.container {
  /* width: 300px; */
  height: 192px;
  background-color: white;
  border: 1px solid rgb(240, 240, 240);
  margin-bottom: 20px;
}

.author {
  display: flex;
  height: 70px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.author-head {
  width: 63px;
  height: 63px;
  border-radius: 50%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
}

.author-name {
  flex: 1;
  line-height: 63px;
  margin-left: 8px;
}

.author-data ul {
  display: flex;
  height: 20px;
}

span {
  font-weight: blod;
}

ul li {
  font-size: 15px;
  margin-right: 10px;
}

button {
  width: 200px;
  height: 40px;
  background-color: rgb(0, 150, 94);
  color: white;
  border-radius: 10px;
  margin-top: 20px;
}
</style>
