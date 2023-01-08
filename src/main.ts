import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "./assets/style/main.css";

import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import VMdPreviewHtml from "@kangc/v-md-editor/lib/preview-html";
import "@kangc/v-md-editor/lib/style/preview-html.css";
// import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
// import "@kangc/v-md-editor/lib/theme/style/github.css";
import Prism from "prismjs";
import hljs from "highlight.js";

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
  hljs,
});

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia());
app.use(router);
app.use(VueMarkdownEditor);
app.use(VMdPreviewHtml);
app.mount("#app");
