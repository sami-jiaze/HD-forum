import router from ".";
import { useUserStore } from "@/stores/user";

const us = useUserStore();
router.beforeEach((to, from, next) => {
  if (!us.token) {
    alert(123);
  }
});
