import { defineStore } from "pinia";
import { reqscDetail } from "@/api/specialColumn";
import { reqGetComment } from "@/api/comment";

export const useQAStore = defineStore("qa", {
  state: () => {
    return {
      qaContent: {},
      qacommentList: {},
    };
  },

  getters: {},
  actions: {
    async getQADetail(id) {
      const res = await reqscDetail(id);
      if (res.data.code == 200) {
        this.qaContent = res.data.result;
      }
      console.log(res);
    },
    async getComment(qid) {
      const res = await reqGetComment(qid);
      if (res.data.code == 200) {
        this.qacommentList = res.data.result.records;
      }
      console.log(res);
    },
  },
});
