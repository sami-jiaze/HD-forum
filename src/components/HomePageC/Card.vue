<!-- 例：主页的粉色card -->
<template>
  <div class="card-item">
    <div class="card-img">
      <img :src="cardValue.img" alt="?" srcset="" />
    </div>
    <div class="card-text">
      <p class="tit">{{ cardValue.title }}</p>
      <p class="des">{{ cardValue.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
// import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "",
  props: ["cardValue"],
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.card-item {
  width: 200px;
  height: 80px;
  display: flex;
  .card-img {
    display: flex;
    align-items: center;
    margin: 0 10px;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .card-text {
    margin-left: 5px;
    .tit {
      margin: 10px 10px 15px;
    }
    .des {
      margin: 0 10px;
      font-size: 10px;
    }
  }
}
.card-item:hover {
  cursor: pointer;
}
</style>
