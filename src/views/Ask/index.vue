<template>
  <HeaderVue>
    <template v-slot:right>
      <LoggedNavVue></LoggedNavVue>
    </template>
  </HeaderVue>
  <div style="text-align: center; margin-top: 50px">post a question</div>
  <div class="issue-box">
    <div>
      <el-input
        v-model="text"
        placeholder="write..."
        maxlength="500"
        type="textarea"
        :autosize="{ minRows: 5 }"
      />
    </div>
    <!-- 长度限制 -->
    <div
      class="qa-limit"
      :class="[text.length > 500 ? 'qa-limit-warning' : '']"
    >
      {{ text.length }}/500
    </div>
    <div class="qa-upload hideUpload">
      <uploadImgVue v-model:files="fileList"></uploadImgVue>
    </div>

    <div class="footer">
      <div class="tool">
        <!-- 表情栏 -->
        <emojiVue @getEmoji="getEmoji">
          <template #default>
            <span><i-bx-smile></i-bx-smile> emoji</span>
          </template>
        </emojiVue>
        <!-- 图片上传 -->
        <span @click="eventDelegation">
          <i-bx-image-add></i-bx-image-add> photo
          <input
            type="file"
            id="uploadInput"
            ref="dom"
            @change="changeInput"
            style="display: none"
          /><!--隐藏选择文件夹-->
        </span>
      </div>
      <div class="button">
        <el-button type="primary" size="small" @click="publish()">
          publish
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import HeaderVue from "@/layout/Header.vue";
import LoggedNavVue from "@/components/LoggedNav.vue";
import emojiVue from "@/views/Ask/components/emoji.vue";
import uploadImgVue from "./components/uploadImg.vue";
import { reqPostQA } from "@/api/QA";
import { ElMessage } from "element-plus";
import router from "@/router";
import { newdate1 } from "@/utils/getTime";

const text = ref("I want to ask...");
const dom = ref();
const fileList = ref([]);
let formData = new FormData();

const getEmoji = (data) => {
  text.value += data;
};
console.log(newdate1);
// 发布qa
async function publish() {
  // 上传准备
  formData.append("content", text.value);
  formData.append("type", "QA");
  formData.append("createTime", newdate1);
  const res = await reqPostQA(formData);
  console.log(res);
  if (res.data.code == 200) {
    ElMessage({
      message: "publish successfully.",
      type: "success",
    });
    router.push("/qaModules");
  }
  //   for (let key of formData.entries()) {
  //   console.log(key[0] + ", " + key[1]);
  // }
}

const changeInput = () => {
  if (!dom.value.files[0]) {
    return;
  }
  const blob = new Blob([dom.value.files[0]], { type: "image/png" });
  let url: string = URL.createObjectURL(blob);
  console.log(dom.value.files[0]);
  // console.log(blob);
  fileList.value.push({ url: url });
  formData.append("fileList", dom.value.files[0]);
  // console.log(fileList.value);
};
const eventDelegation = () => {
  dom.value.click();
};
const hide = computed(() => {
  return fileList.value.length > 0 ? "block" : "none";
});
</script>

<style lang="scss" scoped>
.issue-box {
  margin-top: 30px;
  width: 100%;
  background: white;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 2px;
  :deep(.el-textarea__inner) {
    background-color: #f4f5f5;
    resize: none;
    border-width: 0px;
    border-radius: 0px;
    border-style: none;
    border: none;
    outline: none;
  }

  .footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tool {
      display: flex;
      align-items: center;
      span {
        margin-right: 20px;
        cursor: pointer;
        color: #4e5969;
        font-size: 14px;
      }
      i {
        margin-right: 2px;
      }
    }
    :deep(.el-button--primary) {
      background: #1e80ff;
      padding: 0px 20px;
      font-size: 14px;
    }
  }
}
.qa-limit {
  margin-top: 5px;
  font-size: 13px;
  text-align: right;
  color: #4e5969;
}
.qa-upload {
  margin-top: 20px;
}
.qa-limit-warning {
  color: rgb(236, 120, 120);
}
.hideUpload {
  display: v-bind(hide);
}
</style>
