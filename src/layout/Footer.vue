<template>
  <div class="home-footer">
    <div class="footer-box-top">
      <ul>
        <li>Products</li>
        <li>Hot QA</li>
        <li>Hot column</li>
        <li>Hot event</li>
        <li>Technical circle</li>
      </ul>
      <ul>
        <li>Discuss</li>
        <li>Campus novelty</li>
        <li>Campus news</li>
        <li>About FZU</li>
        <li>Campus wall</li>
      </ul>
      <ul>
        <li>Resources</li>
        <li>Weekly selection</li>
        <li>Learning resources</li>
        <li>Life Tips</li>
        <li>Campus strategy</li>
      </ul>
      <ul>
        <li>Cooperation</li>
        <li>About us</li>
        <li>Ad placement</li>
        <li>Contact us</li>
        <li>Join us</li>
        <li>Cooperation partner</li>
      </ul>
      <ul>
        <li>Attention</li>
        <li>Product technical log</li>
        <li>Operation log</li>
        <li>Team Log</li>
        <li>Community interview</li>
      </ul>
      <ul>
        <li>Clause</li>
        <li>Service agreement</li>
        <li>Privacy policy</li>
        <li>Download App</li>
        <li>
          <img src="@/assets/images/ma.png" alt="" width="40px" />
        </li>
      </ul>
    </div>
    <hr />
    <img src="@/assets/images/toulan.png" class="toulan" />
    <div class="footer-box-bottom">
      <p>Copyright © 2022-2032 Current rendered version 22.11.23</p>
      <p>Heptagonal-Dinner No copyright</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.home-footer {
  width: 100%;
  margin-top: 50px;
  .footer-box-top {
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    color: #727b82;
    li:first-child {
      color: #4b4b4b;
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
  .footer-box-bottom {
    margin: 10px 100px 3px;
    font-size: 12px;
    color: #727b82;
  }
}

.toulan {
  position: absolute;
  right: 60px;
}
</style>
