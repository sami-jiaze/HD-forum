<!-- eslint-disable prettier/prettier -->
<template>
  <HeaderVue>
    <template v-slot:right>
      <LoggedNavVue></LoggedNavVue>
    </template>
  </HeaderVue>
  <input
    class="text"
    placeholder="input article title..."
    v-model="title"
  />
  <textarea
    class="des"
    placeholder="input article description..."
    maxlength="60"
    v-model="introduction"
  ></textarea>
  <p style="text-align: center">Start writing your article!</p>
  <div class="article-info">
    <v-md-editor
      v-model="content"
      height="400px"
      :disabled-menus="[]"
    ></v-md-editor>
  </div>
   <el-button color="#148f5f" style="position: absolute;right: 5%;" @click="publish">
   publish
   </el-button>
  <!-- <v-md-editor :model-value="wform.content" mode="preview"></v-md-editor> -->
  <!-- <v-md-preview-html
    :html="a"
    preview-class="vuepress-markdown-body"
  ></v-md-preview-html> -->
</template>

<script setup lang="ts">
import HeaderVue from "@/layout/Header.vue";
import LoggedNavVue from "@/components/LoggedNav.vue";
import { ref } from "vue";
import { ElMessage } from "element-plus";
import type { writeForm } from "@/type/writeForm";
import { reqPostArticle } from "@/api/specialColumn";
import router from "@/router";
import { newdate1 } from "@/utils/getTime";
// import text from "@/views/articleDetail/hello word.md?raw";
// const text = ref("# hello word\n\n## welcome\nthis is my article");
// const markdown = `
// <h2>前言</h2><p>这篇文章主要是 <strong>总结 + 实践</strong> 一些比较常见且重要的JS手写题，方便自己以及大家学习参考。
// </p>
// <h2 data-v-md-heading="_1-数据类型判断" data-v-md-line="5">
//    1. 数据类型判断
// </h2>
// <p data-v-md-line="7">
//    <strong>核心思想</strong>：
//    <code>
//       typeof
//    </code>
// 可以判断
//    <code>
//       Undefined、String、Number、Boolean、Symbol、Function
//    </code>
// 类型的数据，但对其他的都会认为是
//    <code>
//       Object
//    </code>
// ，比如
//    <code>
//       Null、Array
//    </code>
// 等。所以通过
//    <code>
//       typeof
//    </code>
// 来判断数据类型会不准确。</p>
// `;
// const teq = ref("# hello word\n\n## 这是我写的文章\nhello world");
// const a = ref("> Four eggs\\nLow gluten flour 100g\\nWhite sugar 50g\\nOil 50g\\nWater 40g\\nA little salt\\n\\nAdd 15g of white sugar to the egg yolk basin, and mix the sugar and egg yolk with a spatula\\n![one](https://exp-picture.cdn.bcebos.com/04d7a614f4d0b503b393bf4acc4ec28332bf209a.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80)\\n\\nSift the flour in twice. Sift in the first time and mix well\\n![t](https://exp-picture.cdn.bcebos.com/baab2086304861431d95b1858febf6a75e0f539a.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80)\\n**...**\\n![f](https://ts3.cn.mm.bing.net/th?id=AMMS_c01fcc8b49f79b3d836d142402260843&w=196&h=246&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1)") ;
// const a1 = a.value.replace(/\\n/g, '<br>');

const title = ref("");
const introduction = ref("");
const content = ref("");

// const wform = ref<writeForm>({
//   title: "",
//   introduction: "",
//   content: "",
//   type: "specialColumn",
//   createTime: newdate,
// });
// @upload-image="handleUploadImage"
// function handleUploadImage(event: any, insertImage: any, files: any) {
//   // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
//   console.log(event);
//   console.log(files);
//   // 此处只做示例
//   insertImage({
//     url: "http://rlutlpic8.hn-bkt.clouddn.com/d2211391-d59d-4bc0-9381-8f5673c9ab38.png",
//     desc: "七龙珠",
//   });
// }
const formData = new FormData();

async function publish() {
  formData.append("title", title.value);
  formData.append("introduction", introduction.value);
  formData.append("content", content.value);
  formData.append("type", "specialColumn");
  formData.append("createTime", newdate1);
  // for (let key of formData.entries()) {
  //   console.log(key[0] + ", " + key[1]);
  // }
  const res = await reqPostArticle(formData);
  console.log(res);
  if (res.data.code == 200) {
    ElMessage({
      message: "publish successfully.",
      type: "success",
    });
    router.push("/specialColumn");
  }
}
</script>

<style lang="scss" scoped>
.text {
  margin-left: 40px;
  outline: none;
  width: 65%;
  font-size: 30px;
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
  font-family: Arial, Helvetica, sans-serif;
}
.article-info {
  margin: 15px 15px;
}
.des {
  margin-left: 40px;
  border: none;
  resize: none;
  outline: none;
  width: 65%;
  font-size: 20px;
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
