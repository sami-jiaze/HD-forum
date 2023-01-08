import { defineStore } from "pinia";
import { reqGetComment } from "@/api/comment";
import { ref } from "vue";

export const useSCStore = defineStore("sc", {
  state: () => {
    return {
      commentList: [],
    };
  },

  getters: {},
  actions: {
    async getComment(cid) {
      const res = await reqGetComment(cid);
      if (res.data.code == 200) {
        this.commentList = res.data.result.records;
      }
      console.log(res);
    },
  },
});
