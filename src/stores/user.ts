import { defineStore } from "pinia";
import { setToken, getToken, removeToken } from "@/utils/auth";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      num: 0,
      token: "",
    };
  },

  getters: {},
  actions: {
    setToken(token: string) {
      setToken(token);
      this.token = getToken() as string;
    },
    removeToken() {
      removeToken();
      this.token = getToken() as string;
    },
    getuToken() {
      this.token = getToken() as string;
    },
  },
});
